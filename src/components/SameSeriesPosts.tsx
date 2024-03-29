import * as React from "react";
import { Link } from "gatsby";

import styled, { css } from "../themes";
import { PostFrontmatter } from "../types";

type SameSeriesPostsProps = {
  name?: string;
  data?:
    | null
    | {
        frontmatter: Pick<PostFrontmatter, "title" | "slug">;
      }[];
  current?: string;
};
function SameSeriesPosts({ name, data, current }: SameSeriesPostsProps) {
  const [collapsed, setCollapsed] = React.useState(true);
  if (!data) {
    return null;
  }
  return (
    <Container>
      <Header collapsed={collapsed} onClick={() => setCollapsed((st) => !st)}>
        <h2>
          <Link to={`/series/${name}/`}>{`시리즈 "${name}"`}</Link>
        </h2>
        <span>▲</span>
      </Header>
      {!collapsed && (
        <List>
          {data.map(({ frontmatter: { slug, title } }) => (
            <ListItem active={slug === current} key={slug}>
              <Link to={`/posts/${slug}`}>{title}</Link>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 16px;
  align-items: center;

  background-color: ${(p) => p.theme.colors.sameSereisPosts};
`;

type HeaderProps = {
  collapsed: boolean;
};
const Header = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  user-select: none;

  > h2 {
    margin: 0;
    font-size: 1rem;
    > a {
      color: ${(p) => p.theme.colors.onBackground};
    }
  }

  > span {
    transform: rotate(${(p) => (p.collapsed ? 0 : 180)}deg);
    transition: transform 0.2s;
  }
`;

const List = styled.ol`
  margin: 0;
  border-top: 1px solid ${(p) => p.theme.colors.background};
  padding-top: 16px;
  padding-left: 48px;
  padding-bottom: 16px;
`;

type ListItemProps = {
  active: boolean;
};
const ListItem = styled.li<ListItemProps>`
  margin-bottom: 4px;
  font-size: 0.9375rem;
  color: ${(p) => p.theme.colors.inactiveText};
  & > a {
    color: ${(p) => p.theme.colors.inactiveText};
  }
  ${(p) =>
    p.active &&
    css`
      color: ${(p) => p.theme.colors.onBackground};
      & > a {
        color: ${(p) => p.theme.colors.onBackground};
        text-decoration: underline;
      }
    `}
`;

export default SameSeriesPosts;
