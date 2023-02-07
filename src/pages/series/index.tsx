import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import ListPageHeader from "../../components/ListPageHeader";
import { Series, SeriesSource } from "../../types";
import SeriesList from "../../components/SeriesList";
import getSeries from "../../getters/getSeries";

type SeriesPageData = {
  allMdx: {
    group: SeriesSource[];
  };
};
function SeriesPage({ data: source }: PageProps<SeriesPageData>) {
  const data: Series[] = getSeries(source.allMdx.group);

  return (
    <Layout>
      <ListPageHeader title="시리즈" />
      <SeriesList data={data} />
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(limit: 2000, filter: { frontmatter: { date: { ne: "" } } }) {
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
