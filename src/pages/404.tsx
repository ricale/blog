import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import ListPageHeader from "../components/ListPageHeader";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ListPageHeader title="페이지를 찾을 수 없습니다." subtitle="404" />
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
