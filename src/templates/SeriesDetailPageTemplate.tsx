import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";

import Layout from "../components/Layout";
import styled from "../themes";
import ListPageHeader from "../components/ListPageHeader";
import SimplePostList from "../components/SimplePostList";

type SeriesDetailPageTemplateData = {
  allMdx: {
    totalCount: number;
    edges: {
      node: {
        frontmatter: {
          title: string;
          slug: string;
          date: string;
        };
      };
    }[];
  };
};
type SeriesDetailPageTemplateContext = {
  series: string;
};
const SeriesDetailPageTemplate = ({
  pageContext,
  data,
}: PageProps<
  SeriesDetailPageTemplateData,
  SeriesDetailPageTemplateContext
>) => {
  const { series } = pageContext;
  const { totalCount, edges } = data.allMdx;

  return (
    <Layout>
      <ListPageHeader title={series} subtitle="시리즈" note={totalCount} />
      <SimplePostList data={edges} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($series: String) {
    allMdx(
      limit: 2000
      sort: { frontmatter: { date: ASC } }
      filter: { frontmatter: { series: { in: [$series] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "YYYY.MM.DD.")
          }
        }
      }
    }
  }
`;

export default SeriesDetailPageTemplate;
