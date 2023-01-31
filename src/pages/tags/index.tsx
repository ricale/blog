import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import ListPageHeader from "../../components/ListPageHeader";
import Tag from "../../components/Tag";
import styled from "../../themes";
import TagList from "../../components/TagList";
import { TagSource } from "../../types";

type TagsPageData = {
  allMdx: {
    group: TagSource[];
  };
};
function TagsPage({ data }: PageProps<TagsPageData>) {
  const tags = data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount);
  const [tagsMoreThanOnce, tagsOnlyOnce] = tags.reduce(
    (acc, tag) => {
      acc[tag.totalCount > 1 ? 0 : 1].push(tag);
      return acc;
    },
    [[], []] as [TagSource[], TagSource[]]
  );
  return (
    <Layout>
      <ListPageHeader title="태그" />
      <Tags tags={tagsMoreThanOnce} showCount />
      <Tags tags={tagsOnlyOnce} />
    </Layout>
  );
}

const Tags = styled(TagList)`
  margin-bottom: 24px;
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
