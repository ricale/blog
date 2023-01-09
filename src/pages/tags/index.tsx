import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const TagsPage = ({ data }: PageProps) => {
  const tags = (data as any).allMdx.group.sort(
    (a: any, b: any) => b.totalCount - a.totalCount
  );
  return (
    <Layout pageTitle="My Blog Posts">
      <h1>tags</h1>
      <ul>
        {tags.map((tag: any) => (
          <li key={tag.fieldValue}>
            <Link
              to={`/tags/${tag.fieldValue}/`}
            >{`${tag.fieldValue}(${tag.totalCount})`}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default TagsPage;
