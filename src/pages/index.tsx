import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";

import Layout from "../components/Layout";
import PostList from "../components/PostList";
import Seo from "../components/Seo";
import SeriesList from "../components/SeriesList";
import getPosts from "../getters/getPosts";
import getSeries from "../getters/getSeries";
import styled from "../themes";
import { PostSource, SeriesSource } from "../types";

type IndexPageData = {
  recentPosts: {
    nodes: PostSource[];
  };
  series: {
    group: SeriesSource[];
  };
};

function IndexPage({ data: source }: PageProps<IndexPageData>) {
  const recentPosts = getPosts(source.recentPosts.nodes);
  const recentSeries = getSeries(source.series.group).slice(0, 4);

  return (
    <Layout emphasize>
      <Section>
        <div>
          <h2>최신 글</h2>
          <Link to="/posts/">더보기</Link>
        </div>
        <RecentPostList data={recentPosts} />
      </Section>

      <Section>
        <div>
          <h2>최신 시리즈</h2>
          <Link to="/series/">더보기</Link>
        </div>
        <RecentSeriesList data={recentSeries} />
      </Section>
    </Layout>
  );
}

const Section = styled.div`
  &:not(:first-child) {
    margin-top: 32px;
  }
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
      color: ${(p) => p.theme.colors.inactiveText};
      text-decoration: underline;
    }
  }
`;

const RecentPostList = styled(PostList)`
  gap: 4px;
`;

const RecentSeriesList = styled(SeriesList)`
  @media (max-width: 768px) {
    & > :nth-child(n + 4) {
      display: none;
    }
  }

  @media (max-width: 500px) {
    & > :nth-child(n + 3) {
      display: none;
    }
  }
`;

export const query = graphql`
  query {
    recentPosts: allMdx(
      filter: { frontmatter: { date: { ne: "" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
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

    series: allMdx(limit: 2000, filter: { frontmatter: { date: { ne: "" } } }) {
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
  }
`;

export const Head: HeadFC = () => <Seo />;

export default IndexPage;
