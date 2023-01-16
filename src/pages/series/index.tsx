import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

type SeriesPageData = {
  allMdx: {
    group: {
      fieldValue: string;
      totalCount: number;
    }[];
  };
};
const SeriesPage = ({ data }: PageProps<SeriesPageData>) => {
  const series = data.allMdx.group;
  return (
    <Layout>
      <h1>시리즈</h1>
      <ul>
        {series.map((sr) => (
          <li key={sr.fieldValue}>
            <Link to={`/series/${sr.fieldValue}/`}>{`${sr.fieldValue}`}</Link>{" "}
            <small>{sr.totalCount}</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: { frontmatter: { series: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;

export const Head = () => <Seo title="시리즈 목록" />;

export default SeriesPage;
