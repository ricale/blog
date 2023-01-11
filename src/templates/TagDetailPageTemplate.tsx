import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../components/Layout";

type TagDetailPageTemplateData = {
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
type TagDetailPageTemplateContext = {
  tag: string;
};
const TagDetailPageTemplate = ({
  pageContext,
  data,
}: PageProps<TagDetailPageTemplateData, TagDetailPageTemplateContext>) => {
  const { tag } = pageContext;
  const { totalCount, edges } = data.allMdx;

  return (
    <Layout>
      <h1>{`태그 "${tag}"`}</h1>
      <p>{`글 ${totalCount}개`}</p>

      <ul>
        {edges.map(({ node: { frontmatter } }) => (
          <li key={frontmatter.slug}>
            <Link to={`/posts/${frontmatter.slug}`}>{frontmatter.title}</Link>
          </li>
        ))}
      </ul>
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

export default TagDetailPageTemplate;
