import * as React from "react";

import styled from "../../themes";
import { PostFrontmatter } from "../../types";
import PostListItem from "./PostListItem";

type PostListProps = {
  data: {
    frontmatter: PostFrontmatter;
  }[];
};
function PostList({ data }: PostListProps) {
  return (
    <Container>
      {data.map(({ frontmatter, ...item }, i) => (
        <PostListItem key={i} {...frontmatter} {...item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default PostList;
