import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import ListPageHeader from "../../components/ListPageHeader";
import Tag from "../../components/Tag";
import styled from "../../themes";
import TagList from "../../components/TagList";

type TagData = {
  fieldValue: string;
  totalCount: number;
};
type TagsPageData = {
  allMdx: {
    group: TagData[];
  };
};
function TagsPage({ data }: PageProps<TagsPageData>) {
  const tags = data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount);
  const [tagsMoreThanOnce, tagsOnlyOnce] = tags.reduce(
    (acc, tag) => {
      acc[tag.totalCount > 1 ? 0 : 1].push(tag);
      return acc;
    },
    [[], []] as [TagData[], TagData[]]
  );
  return (
    <Layout>
      <ListPageHeader title="태그" />
      {/* <Tags>
        {tagsMoreThanOnce.map((tag) => (
          <li key={tag.fieldValue}>
            <Tag value={tag.fieldValue} />{" "}
            {tag.totalCount > 1 && <sup>{`${tag.totalCount}`}</sup>}
          </li>
        ))}
      </Tags> */}
      <Tags tags={tagsMoreThanOnce} showCount />
      <Tags tags={tagsOnlyOnce} />
      {/* <Tags>
        {tagsOnlyOnce.map((tag) => (
          <li key={tag.fieldValue}>
            <Tag value={tag.fieldValue} />{" "}
            {tag.totalCount > 1 && <sup>{`${tag.totalCount}`}</sup>}
          </li>
        ))}
      </Tags> */}
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
