import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { PostSource, SeriesSource, TagSource } from "../types";
import getPosts from "../getters/getPosts";
import getSeries from "../getters/getSeries";
import SeriesList from "../components/SeriesList";
import styled from "../themes";
import PostCardList from "../components/PostCardList";
import TagList from "../components/TagList";

type IndexPageData = {
  recentPosts: {
    nodes: PostSource[];
  };
  series: {
    group: SeriesSource[];
  };
  tags: {
    group: TagSource[];
  };
};

function IndexPage({ data: source }: PageProps<IndexPageData>) {
  const recentPosts = getPosts(source.recentPosts.nodes);
  const recentSeries = getSeries(source.series.group).slice(0, 3);
  const popularTags = source.tags.group
    .sort((a, b) => b.totalCount - a.totalCount)
    .slice(0, 20);

  return (
    <Layout emphasize>
      <Row>
        <Column flex={4}>
          <Section>
            <div>
              <h2>최신 글</h2>
              <Link to="/posts/">더보기</Link>
            </div>
            <PostCardList data={recentPosts} />
          </Section>

          <Section>
            <div>
              <h2>최신 시리즈</h2>
              <Link to="/series/">더보기</Link>
            </div>
            <SeriesList data={recentSeries} />
          </Section>
        </Column>
        <Column>
          <Section>
            <div>
              <h2>태그</h2>
              <Link to="/tags/">더보기</Link>
            </div>
            <PopularTagList tags={popularTags} />
          </Section>
        </Column>
      </Row>
    </Layout>
  );
}

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;

  margin: 24px 0;
  /* padding: 0 8px; */
`;
type ColumnProps = {
  flex?: number;
};
const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: ${(p) => p.flex ?? 1};
`;
const Section = styled.div`
  & > :first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    > h2 {
      font-size: 1.125rem;
    }
    > a {
      font-size: 0.875rem;
      color: #dddddd;
      text-decoration: underline;
    }
  }
`;

const PopularTagList = styled(TagList)`
  font-size: 0.875rem;
`;

export const query = graphql`
  query {
    recentPosts: allMdx(
      filter: { frontmatter: { date: { ne: "" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 4
    ) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "YYYY. M. D.")
          heroImageAlt
          heroImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }

    series: allMdx(limit: 2000) {
      group(field: { frontmatter: { series: SELECT } }) {
        fieldValue
        totalCount
        edges {
          node {
            frontmatter {
              title
              originalDate: date
              date(formatString: "YYYY. M. D.")
              heroImageAlt
              heroImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }

    tags: allMdx(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo />;

export default IndexPage;
