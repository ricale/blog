import * as React from "react";
import { Link } from "gatsby";

import styled, { css } from "../../themes";

const isDevelopment = process.env.NODE_ENV === "development";

const menuItems = [
  { path: "/posts", title: "모든글" },
  { path: "/series", title: "시리즈" },
  { path: "/tags", title: "태그" },
  ...(isDevelopment ? [{ path: "/drafts", title: "임시글" }] : []),
];

type HeaderProps = {
  emphasize?: boolean;
  title: string;
  author: string;
};
function Header({ emphasize, title, author }: HeaderProps) {
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
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
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

export default Header;
