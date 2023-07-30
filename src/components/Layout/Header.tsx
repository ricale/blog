import * as React from "react";
import { Link } from "gatsby";

import { RICALE_HOME_URL } from "../../constants/urls";
import styled, { css } from "../../themes";
import RelatedLinks from "../RelatedLinks";

const isDevelopment = process.env.NODE_ENV === "development";

const MENU_ITEMS = [
  { path: "/posts", title: "모든글" },
  { path: "/series", title: "시리즈" },
  { path: "/tags", title: "태그" },
  ...(isDevelopment ? [{ path: "/drafts", title: "임시글" }] : []),
];

type HeaderProps = {
  emphasize?: boolean;
  title: string;
  author: string;
  siteUrl: string;
};
function Header({ emphasize, title, author, siteUrl }: HeaderProps) {
  const menuItems = !emphasize ? MENU_ITEMS : MENU_ITEMS.slice(3);
  return (
    <Container emphasize={emphasize}>
      <HeaderContainer emphasize={emphasize}>
        <header>
          <Link to="/">{title}</Link>
        </header>
        <address>
          <a href={RICALE_HOME_URL}>{`by ${author}`}</a>
        </address>
        {emphasize && <RelatedLinks siteUrl={siteUrl} />}
      </HeaderContainer>
      <Menu shrink={emphasize}>
        <ul>
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>
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

  ${(p) =>
    p.emphasize &&
    css`
      @media (max-width: 500px) {
        flex-direction: column;
      }
    `}
`;

type HeaderContainerProps = {
  emphasize?: boolean;
};
const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  flex-direction: row;

  font-family: monospace;

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

  @media (max-width: 799px) {
    flex-direction: column;
  }

  ${(p) =>
    p.emphasize &&
    css`
      flex-direction: column;

      padding-top: 76px;
      padding-bottom: 68px;

      & > header {
        font-size: 5rem;
      }
      & > address {
        font-size: 1.5rem;
      }
      & > :last-child {
        margin-top: 8px;
      }

      @media (max-width: 799px) {
        & > header {
          font-size: 4.5rem;
        }
        & > address {
          font-size: 1.25rem;
        }
      }
      @media (max-width: 500px) {
        & > header {
          font-size: 4rem;
        }
        & > address {
          font-size: 1.125rem;
        }
        order: 2;
      }
    `}
`;

type MenuProps = {
  shrink?: boolean;
};
const Menu = styled.nav<MenuProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  flex: 1;
  > ul {
    display: flex;
    flex-direction: row;
    gap: 8px;

    margin: 0;
    padding: 0;
    list-style: none;

    > li > a {
      display: inline-block;
      color: ${(p) => p.theme.colors.headerText};
      text-decoration: underline;
      font-size: 0.875rem;
    }
  }

  ${(p) =>
    p.shrink &&
    css`
      @media (max-width: 500px) {
        order: 1;
      }
    `}
`;

export default Header;
