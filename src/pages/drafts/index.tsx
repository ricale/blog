import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import ListPageHeader from "../../components/ListPageHeader";
import { PostFrontmatter } from "../../types";
import PostList from "../../components/PostList";

type DraftsPageData = {
  allMdx: {
    nodes: {
      frontmatter: PostFrontmatter;
    }[];
  };
};
function DraftsPage({ data }: PageProps<DraftsPageData>) {
  const drafts = data.allMdx.nodes;
  return (
    <Layout>
      <ListPageHeader title="임시글" note={drafts.length} />
      <PostList data={drafts} />
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { date: { eq: "" } } }
      sort: { frontmatter: { date: DESC } }
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
  }
`;

export const Head = () => <Seo />;

export default DraftsPage;
