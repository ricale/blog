import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import SeriesItem from "../../components/SeriesItem";
import styled from "../../themes";
import ListPageHeader from "../../components/ListPageHeader";

type SeriesPageData = {
  allMdx: {
    group: {
      fieldValue: string;
      totalCount: number;
      edges: {
        node: {
          frontmatter: {
            title: string;
            originalDate: string;
            date: string;
            heroImage?: ImageDataLike;
            heroImageAlt?: string;
          };
        };
      }[];
    }[];
  };
};
const SeriesPage = ({ data }: PageProps<SeriesPageData>) => {
  const series = data.allMdx.group
    .map(({ edges, ...sr }) => ({
      ...sr,
      node: edges.sort((a, b) =>
        b.node.frontmatter.originalDate.localeCompare(
          a.node.frontmatter.originalDate
        )
      )[0].node,
    }))
    .sort((a, b) =>
      b.node.frontmatter.originalDate.localeCompare(
        a.node.frontmatter.originalDate
      )
    );

  return (
    <Layout>
      <ListPageHeader title="시리즈" />
      <SeriesList>
        {series.map((sr) => (
          <SeriesItem key={sr.fieldValue} {...sr} />
        ))}
      </SeriesList>
    </Layout>
  );
};

const SeriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

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
