import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import PostListItem from "../../components/PostListItem";
import styled from "../../themes";
import ListPageHeader from "../../components/ListPageHeader";

type BlogPageData = {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string;
        slug: string;
        date: string;
        heroImage?: ImageDataLike;
        heroImageAlt?: string;
      };
    }[];
  };
};
const PostsPage = ({ data }: PageProps<BlogPageData>) => {
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <ListPageHeader title="글" note={`${posts.length}`} />

      <PostList>
        {posts.map(({ frontmatter, ...item }, i) => (
          <PostListItem key={i} {...frontmatter} {...item} />
        ))}
      </PostList>
    </Layout>
  );
};

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

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
