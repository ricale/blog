import * as React from "react";
import { Link } from "gatsby";

import styled, { css } from "../../themes";

const isDevelopment = process.env.NODE_ENV === "development";

const menuItems = [
  { path: "/posts", title: "모든글" },
  { path: "/series", title: "시리즈" },
  { path: "/tags", title: "태그" },
  { href: "/rss.xml", title: "RSS" },
  ...(isDevelopment ? [{ path: "/drafts", title: "임시글" }] : []),
];

type HeaderProps = {
  emphasize?: boolean;
  title: string;
  author: string;
  siteUrl: string;
};
function Header({ emphasize, title, author, siteUrl }: HeaderProps) {
  return (
    <Container emphasize={emphasize}>
      <header>
        <Link to="/">{title}</Link>
      </header>
      <address>
        <a href="https://ricale.kr">{`by ${author}`}</a>
      </address>
      <nav>
        <ul>
          {menuItems.map((item, i) => (
            <li key={i}>
              {item.path ? (
                <Link to={item.path}>{item.title}</Link>
              ) : (
                <a href={`${siteUrl}${item.href}`}>{item.title}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

type ContainerProps = {
  emphasize?: boolean;
};
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;

  margin: 0px 16px 8px;
  padding-top: 8px;

  & > header {
    margin-right: 8px;
    font-weight: 600;
    font-size: 1.25rem;
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
        color: #dddddd;
        text-decoration: underline;
        font-size: 0.875rem;
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

export default Header;
