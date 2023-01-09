import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return <Layout pageTitle="Home Page"></Layout>;
};

export const Head: HeadFC = () => <Seo title="Home Page" />;

export default IndexPage;
