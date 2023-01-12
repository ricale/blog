import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

type TagsPageData = {
  allMdx: {
    group: {
      totalCount: number;
      fieldValue: string;
    }[];
  };
};
const TagsPage = ({ data }: PageProps<TagsPageData>) => {
  const tags = data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount);
  return (
    <Layout>
      <h1>tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>{`${tag.fieldValue}`}</Link>{" "}
            <small>{`${tag.totalCount}`}</small>
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

export const Head = () => <Seo title="태그 목록" />;

export default TagsPage;
