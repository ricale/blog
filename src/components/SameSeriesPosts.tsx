import * as React from "react";
import { Link } from "gatsby";
import styled, { css } from "../themes";

type SameSeriesPostsProps = {
  name?: string;
  data?:
    | null
    | {
        frontmatter: {
          title: string;
          slug: string;
        };
      }[];
  current?: string;
};
const SameSeriesPosts = ({ name, data, current }: SameSeriesPostsProps) => {
  const [collapsed, setCollapsed] = React.useState(true);
  if (!data) {
    return null;
  }
  return (
    <Container>
      <Header collapsed={collapsed} onClick={() => setCollapsed((st) => !st)}>
        <h2>
          시리즈 <Link to={`/series/${name}/`}>{`"${name}"`}</Link>
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
};

const Container = styled.div`
  margin-bottom: 16px;
  align-items: center;

  background-color: #111111;
`;

type HeaderProps = {
  collapsed: boolean;
};
const Header = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;

  > h2 {
    margin: 0;
    font-size: 1rem;
  }

  > span {
    user-select: none;
    transform: rotate(${(p) => (p.collapsed ? 0 : 180)}deg);
  }
`;

const List = styled.ol`
  margin: 0 16px;
  padding-bottom: 16px;
`;

type ListItemProps = {
  active: boolean;
};
const ListItem = styled.li<ListItemProps>`
  ${(p) =>
    p.active &&
    css`
      & > a {
        font-weight: bold;
        font-style: italic;
        text-decoration: underline;
      }
    `}
`;

export default SameSeriesPosts;
