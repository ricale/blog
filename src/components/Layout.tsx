import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import styled, {
  css,
  GlobalStyle,
  normalTheme,
  ThemeProvider,
} from "../themes";
import { SiteMetadata } from "../types";

const isDevelopment = process.env.NODE_ENV === "development";

const menuItems = [
  { path: "/posts", title: "모든글" },
  { path: "/series", title: "시리즈" },
  { path: "/tags", title: "태그" },
  ...(isDevelopment ? [{ path: "/drafts", title: "임시글" }] : []),
];

type LayoutQueryData = {
  site: {
    siteMetadata: SiteMetadata;
  };
};
type LayoutProps = {
  emphasize?: boolean;
  children?: React.ReactNode;
};
function Layout({ emphasize, children }: LayoutProps) {
  const data = useStaticQuery<LayoutQueryData>(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);
  const { title, author } = data.site.siteMetadata;
  return (
    <ThemeProvider theme={normalTheme}>
      <GlobalStyle />
      <Container>
        <Header emphasize={emphasize}>
          <header>
            <Link to="/">{title}</Link>
          </header>
          <address>
            <a href="https://ricale.kr">{`by ${author}`}</a>
          </address>
          <nav>
            <ul>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Header>
        <main>{children}</main>
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
type HeaderProps = {
  emphasize?: boolean;
};
const Header = styled.div<HeaderProps>`
  display: flex;
  flex-direction: row;

  margin: 8px 16px;

  & > header {
    margin-right: 8px;
    font-weight: 600;
    font-size: 1.125rem;
    > a {
      color: white;
    }
  }

  & > address {
    font-size: 0.875rem;
    font-style: normal;
    > a {
      color: white;
    }
  }

  & > nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    flex: 1;
    > ul {
      display: flex;
      flex-direction: row;
      gap: 8px;

      margin: 0;
      margin-left: 16px;
      padding: 0;
      list-style: none;

      > li > a {
        display: inline-block;
        /* padding: 0px 8px; */
      }
    }
  }

  ${(p) =>
    p.emphasize &&
    css`
      padding-top: 56px;
      padding-bottom: 48px;
      & > header {
        font-family: monospace;
        font-size: 5rem;
      }
      & > address {
        font-family: monospace;
        font-size: 1.5rem;
      }
      & > nav {
        display: none;
      }

      @media (max-width: 799px) {
        flex-direction: column;

        & > header {
          font-family: monospace;
          font-size: 4.5rem;
        }
        & > address {
          font-family: monospace;
          font-size: 1.25rem;
        }
      }
    `}
`;

export default Layout;
