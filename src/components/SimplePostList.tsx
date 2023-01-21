import * as React from "react";
import { Link } from "gatsby";
import styled from "../themes";

type SimplePostListProps = {
  data: {
    node: {
      frontmatter: {
        title: string;
        slug: string;
        date: string;
      };
    };
  }[];
};

function SimplePostList({ data }: SimplePostListProps) {
  return (
    <SeriesPostList>
      {data.map(({ node: { frontmatter } }) => (
        <li key={frontmatter.slug}>
          <span>{frontmatter.date}</span>
          <Link to={`/posts/${frontmatter.slug}`}>{frontmatter.title}</Link>
        </li>
      ))}
    </SeriesPostList>
  );
}

const SeriesPostList = styled.ol`
  padding-left: 0px;
  list-style: none;

  li {
    margin-bottom: 8px;
  }

  li > :first-child {
    margin-right: 8px;
    font-family: monospace;
    font-size: 0.875rem;
  }
`;

export default SimplePostList;
