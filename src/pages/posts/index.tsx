import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

type BlogPageData = {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string;
        date: string;
        slug: string;
      };
      id: string;
      excerpt: string;
    }[];
  };
};
const BlogPage = ({ data }: PageProps<BlogPageData>) => {
  return (
    <Layout>
      <p>{data.allMdx.nodes.length}개 글</p>
      {data.allMdx.nodes.map((node, i) => (
        <article key={i}>
          <h2>
            <Link to={`/posts/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <div>{node.frontmatter.date}</div>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY. M. D.")
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo />;

export default BlogPage;
