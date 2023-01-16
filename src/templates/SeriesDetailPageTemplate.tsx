import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../components/Layout";

type SeriesDetailPageTemplateData = {
  allMdx: {
    totalCount: number;
    edges: {
      node: {
        frontmatter: {
          slug: string;
          title: string;
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
    <Layout>
      <h1>{`시리즈 "${series}"`}</h1>
      <ol>
        {edges.map(({ node: { frontmatter } }) => (
          <li key={frontmatter.slug}>
            <Link to={`/posts/${frontmatter.slug}`}>{frontmatter.title}</Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($series: String) {
    allMdx(
      limit: 2000
      sort: { frontmatter: { date: ASC } }
      filter: { frontmatter: { series: { in: [$series] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default SeriesDetailPageTemplate;
