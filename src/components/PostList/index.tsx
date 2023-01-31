import * as React from "react";

import styled from "../../themes";
import { Post } from "../../types";
import PostListItem from "./PostListItem";

type PostListProps = {
  data: Post[];
};
function PostList({ data }: PostListProps) {
  return (
    <Container>
      {data.map(({ ...item }, i) => (
        <PostListItem key={i} {...item} />
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
