import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import ListPageHeader from "../../components/ListPageHeader";
import Tag from "../../components/Tag";
import styled from "../../themes";

type TagsPageData = {
  allMdx: {
    group: {
      fieldValue: string;
      totalCount: number;
    }[];
  };
};
function TagsPage({ data }: PageProps<TagsPageData>) {
  const tags = data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount);
  return (
    <Layout>
      <ListPageHeader title="태그" />
      <TagList>
        {tags.map((tag) => (
          <li key={tag.fieldValue}>
            <Tag value={tag.fieldValue} />{" "}
            <small>{`(${tag.totalCount})`}</small>
          </li>
        ))}
      </TagList>
    </Layout>
  );
}

const TagList = styled.ul`
  padding-left: 15px;
  & > li {
    margin-bottom: 4px;
  }
`;

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
