import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import ListPageHeader from "../../components/ListPageHeader";
import { PostSource } from "../../types";
import PostList from "../../components/PostList";
import getPosts from "../../getters/getPosts";

type DraftsPageData = {
  allMdx: {
    nodes: PostSource[];
  };
};
function DraftsPage({ data }: PageProps<DraftsPageData>) {
  const drafts = getPosts(data.allMdx.nodes);
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
