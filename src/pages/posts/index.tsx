import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const BlogPage = ({ data }: PageProps) => {
  return (
    <Layout>
      {(data as any).allMdx.nodes.map((node: any, i: number) => (
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
