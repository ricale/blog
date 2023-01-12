import { HeadFC } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return <Layout></Layout>;
};

export const Head: HeadFC = () => <Seo />;

export default IndexPage;
