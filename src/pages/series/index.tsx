import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import ListPageHeader from "../../components/ListPageHeader";
import { PostFrontmatter } from "../../types";
import SeriesList from "../../components/SeriesList";

type SeriesPageData = {
  allMdx: {
    group: {
      fieldValue: string;
      totalCount: number;
      edges: {
        node: {
          frontmatter: Omit<PostFrontmatter, "slug" | "tags"> & {
            originalDate: string;
          };
        };
      }[];
    }[];
  };
};
function SeriesPage({ data }: PageProps<SeriesPageData>) {
  return (
    <Layout>
      <ListPageHeader title="시리즈" />
      <SeriesList data={data.allMdx.group} />
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: { frontmatter: { series: SELECT } }) {
        fieldValue
        totalCount
        edges {
          node {
            frontmatter {
              title
              originalDate: date
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
    }
  }
`;

export const Head = () => <Seo title="시리즈 목록" />;

export default SeriesPage;
