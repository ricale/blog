import * as React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import ListPageHeader from "../components/ListPageHeader";
import SimplePostList from "../components/SimplePostList";
import { PostFrontmatter } from "../types";
import Seo from "../components/Seo";

type SeriesDetailPageTemplateData = {
  allMdx: {
    totalCount: number;
    edges: {
      node: {
        frontmatter: Pick<
          PostFrontmatter,
          "title" | "slug" | "date" | "heroImage"
        > & {
          originalDate: string;
        };
      };
    }[];
  };
};
type SeriesDetailPageTemplateContext = {
  series: string;
};
const SeriesDetailPageTemplate = ({
  pageContext,
  data,
}: PageProps<
  SeriesDetailPageTemplateData,
  SeriesDetailPageTemplateContext
>) => {
  const { series } = pageContext;
  const { totalCount, edges } = data.allMdx;

  return (
    <Layout minContentHeight={500}>
      <ListPageHeader title={series} subtitle="시리즈" note={totalCount} />
      <SimplePostList data={edges} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($series: String) {
    allMdx(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { series: { in: [$series] }, date: { ne: "" } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "YYYY.MM.DD.")
            originalDate: date
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
`;

export const Head = ({
  pageContext,
  data,
}: HeadProps<
  SeriesDetailPageTemplateData,
  SeriesDetailPageTemplateContext
>) => {
  const { series } = pageContext;
  const { totalCount, edges } = data.allMdx;
  const firstPost = [...edges].sort((a, b) =>
    b.node.frontmatter.originalDate.localeCompare(
      a.node.frontmatter.originalDate
    )
  )[0];
  const image = firstPost.node.frontmatter.heroImage
    ? getImage(firstPost.node.frontmatter.heroImage)
    : null;

  return (
    <Seo
      title={`시리즈 "${series}"`}
      description={`${totalCount}개의 글이 있습니다.`}
      path={`series/${series}`}
      thumbnail={image?.images?.fallback?.src}
    />
  );
};

export default SeriesDetailPageTemplate;
