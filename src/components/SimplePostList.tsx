import * as React from "react";
import { Link, navigate } from "gatsby";
import styled from "../themes";
import { PostFrontmatter } from "../types";

type SimplePostListProps = {
  data: {
    node: {
      frontmatter: Pick<PostFrontmatter, "title" | "slug" | "date">;
    };
  }[];
};

function SimplePostList({ data }: SimplePostListProps) {
  return (
    <SeriesPostList>
      {data.map(({ node: { frontmatter } }) => (
        <li
          key={frontmatter.slug}
          onClick={() => navigate(`/posts/${frontmatter.slug}`)}
        >
          <span className="date">{frontmatter.date}</span>
          <span className="title">{frontmatter.title}</span>
        </li>
      ))}
    </SeriesPostList>
  );
}

const SeriesPostList = styled.ol`
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
