import * as React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";

import Layout from "../components/Layout";
import ListPageHeader from "../components/ListPageHeader";
import SimplePostList from "../components/SimplePostList";
import { PostFrontmatter } from "../types";
import Seo from "../components/Seo";

type TagDetailPageTemplateData = {
  allMdx: {
    totalCount: number;
    edges: {
      node: {
        frontmatter: Pick<PostFrontmatter, "title" | "slug" | "date"> & {
          originalDate: string;
        };
      };
    }[];
  };
};
type TagDetailPageTemplateContext = {
  tag: string;
};
const TagDetailPageTemplate = ({
  pageContext,
  data,
}: PageProps<TagDetailPageTemplateData, TagDetailPageTemplateContext>) => {
  const { tag } = pageContext;
  const { totalCount, edges } = data.allMdx;

  return (
    <Layout minContentHeight={500}>
      <ListPageHeader title={tag} subtitle="태그" note={totalCount} />
      <SimplePostList data={edges} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] }, date: { ne: "" } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "YYYY.MM.DD.")
            originalDate: date
          }
        }
      }
    }
  }
`;

export const Head = ({
  pageContext,
  data,
}: HeadProps<TagDetailPageTemplateData, TagDetailPageTemplateContext>) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMdx;

  return (
    <Seo
      title={`태그 "${tag}"`}
      description={`${totalCount}개의 글이 있습니다.`}
      path={`tags/${tag}`}
    />
  );
};

export default TagDetailPageTemplate;
