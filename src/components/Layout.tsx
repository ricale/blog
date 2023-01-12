import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import styled, { GlobalStyle, normalTheme, ThemeProvider } from "../themes";

type LayoutProps = {
  children?: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
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
        <header>{data.site.siteMetadata.title}</header>
        <nav>
          <ul>
            <li>
              <Link to="/posts">posts</Link>
            </li>
            <li>
              <Link to="/tags">tags</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  max-width: 800px;
  padding: ${(p) => p.theme.dimens.margin}px;
`;
const BlogHeader = styled.header``;

export default Layout;
