import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import styled, { GlobalStyle, normalTheme, ThemeProvider } from "../../themes";
import { SiteMetadata } from "../../types";
import Header from "./Header";
import Footer from "./Footer";

type LayoutQueryData = {
  site: {
    siteMetadata: SiteMetadata;
  };
};
type LayoutProps = {
  emphasize?: boolean;
  minContentHeight?: number;
  children?: React.ReactNode;
};
function Layout({ emphasize, minContentHeight, children }: LayoutProps) {
  const data = useStaticQuery<LayoutQueryData>(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          siteUrl
        }
      }
    }
  `);
  const { title, author, siteUrl } = data.site.siteMetadata;
  return (
    <ThemeProvider theme={normalTheme}>
      <GlobalStyle />
      <Container>
        <Header
          emphasize={emphasize}
          title={title}
          author={author}
          siteUrl={siteUrl}
        />
        <main
          style={minContentHeight ? { minHeight: minContentHeight } : undefined}
        >
          {children}
        </main>
        <Footer showLinks={!emphasize} siteUrl={siteUrl} />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

  > main {
    padding-left: ${(p) => p.theme.dimens.margin}px;
    padding-right: ${(p) => p.theme.dimens.margin}px;
    padding-bottom: ${(p) => p.theme.dimens.margin}px;

    @media (max-width: 799px) {
      padding-left: ${(p) => p.theme.dimens.margin + 4}px;
      padding-right: ${(p) => p.theme.dimens.margin + 4}px;
    }
  }
`;

export default Layout;
