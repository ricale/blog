import * as React from "react";
import { navigate } from "gatsby";
import styled from "../themes";
import { PostFrontmatter } from "../types";

type SimplePostListProps = {
  data: {
    node: {
      frontmatter: Pick<PostFrontmatter, "title" | "slug" | "date"> & {
        originalDate: string;
      };
    };
  }[];
  actions?: React.ReactNode;
};

function SimplePostList({ data: source, actions }: SimplePostListProps) {
  const [orderByAsc, setOrderByAsc] = React.useState(false);
  const data = [...source].sort(
    (a, b) =>
      a.node.frontmatter.originalDate.localeCompare(
        b.node.frontmatter.originalDate
      ) * (orderByAsc ? 1 : -1)
  );

  return (
    <Container>
      <Actions>
        <div>{actions}</div>
        <span className="divider">|</span>
        <SortingAction>
          <span>정렬:</span>
          <a onClick={() => setOrderByAsc((st) => !st)}>
            {`작성일 ${orderByAsc ? "오름차순" : "내림차순"}`}
          </a>
        </SortingAction>
      </Actions>
      <PostList>
        {data.map(({ node: { frontmatter } }) => (
          <li
            key={frontmatter.slug}
            onClick={() => navigate(`/posts/${frontmatter.slug}`)}
          >
            <span className="date">{frontmatter.date}</span>
            <span className="title">{frontmatter.title}</span>
          </li>
        ))}
      </PostList>
    </Container>
  );
}

const Container = styled.div``;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px;

  & > div:first-child {
    display: flex;
    align-items: center;
  }
  & > span.divider {
    font-size: 0.75rem;
  }
`;
const SortingAction = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  > span {
    font-size: 0.875rem;
    color: #ffffff;
  }
  > a {
    border: 0;
    text-decoration: underline;

    font-size: 0.875rem;
    color: #ffffff;
    background-color: transparent;
    cursor: pointer;
  }
`;

const PostList = styled.ol`
  margin-top: 8px;
  padding-left: 0px;
  list-style: none;
  cursor: pointer;

  li {
    display: flex;
    align-items: center;

    padding: 2px;
    margin-bottom: 4px;
    :hover {
      background-color: #666666;
    }

    > .date {
      margin-right: 8px;
      font-family: monospace;
      font-size: 0.875rem;
    }
    > .title {
      color: skyblue;
    }
  }

  @media (max-width: 414px) {
    li {
      flex-direction: column;
      align-items: flex-start;

      margin-bottom: 12px;
      > .date {
        order: 2;
        font-size: 0.75rem;
      }
      > .title {
        order: 1;
      }
    }
  }
`;

export default SimplePostList;
