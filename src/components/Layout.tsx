import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import styled, { GlobalStyle, normalTheme, ThemeProvider } from "../themes";

type LayoutQueryData = {
  site: {
    siteMetadata: {
      title: string;
      author: string;
    };
  };
};
type LayoutProps = {
  children?: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery<LayoutQueryData>(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <ThemeProvider theme={normalTheme}>
      <GlobalStyle />
      <Container>
        <Header>
          <header>{data.site.siteMetadata.title}</header>
          <address>by ricale</address>
          <nav>
            <ul>
              <li>
                <Link to="/posts">글</Link>
              </li>
              <li>
                <Link to="/tags">태그</Link>
              </li>
              <li>
                <Link to="/series">시리즈</Link>
              </li>
            </ul>
          </nav>
        </Header>
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

  > main {
    padding-left: ${(p) => p.theme.dimens.margin}px;
    padding-right: ${(p) => p.theme.dimens.margin}px;
    padding-bottom: ${(p) => p.theme.dimens.margin}px;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;

  margin: 8px 16px;

  & > header {
    font-weight: 900;
  }

  & > address {
    margin-left: 8px;
  }

  & > nav > ul {
    display: flex;
    flex-direction: row;
    gap: 8px;

    margin: 0;
    margin-left: 16px;
    padding: 0;
    list-style: none;
  }
`;

export default Layout;
