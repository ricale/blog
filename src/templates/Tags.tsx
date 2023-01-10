import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const Tags = ({ pageContext, data }: PageProps) => {
  const { tag } = pageContext as any;
  const { edges, totalCount } = (data as any).allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Layout>
      <h1>{tagHeader}</h1>

      <ul>
        {edges.map(({ node: { frontmatter } }: any) => (
          <li key={frontmatter.slug}>
            <Link to={`/posts/${frontmatter.slug}`}>{frontmatter.title}</Link>
          </li>
        ))}
      </ul>

      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;

export default Tags;
