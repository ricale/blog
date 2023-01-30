import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import ListPageHeader from "../../components/ListPageHeader";
import { PostSource } from "../../types";
import PostList from "../../components/PostList";
import getPosts from "../../getters/getPosts";

type PostsPageData = {
  allMdx: {
    nodes: PostSource[];
  };
};
function PostsPage({ data }: PageProps<PostsPageData>) {
  const posts = getPosts(data.allMdx.nodes);
  return (
    <Layout>
      <ListPageHeader title="글" note={posts.length} />
      <PostList data={posts} />
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { date: { ne: "" } } }
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

export const Head = () => <Seo title="모든 글" />;

export default PostsPage;
