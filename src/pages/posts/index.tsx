import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import ListPageHeader from "../../components/ListPageHeader";
import { PostFrontmatter } from "../../types";
import PostList from "../../components/PostList";

type BlogPageData = {
  allMdx: {
    nodes: {
      frontmatter: PostFrontmatter;
    }[];
  };
};
function PostsPage({ data }: PageProps<BlogPageData>) {
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <ListPageHeader title="글" note={posts.length} />
      <PostList data={posts} />
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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

export default PostsPage;
