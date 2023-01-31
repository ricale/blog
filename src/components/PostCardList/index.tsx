import * as React from "react";

import styled from "../../themes";
import { Post } from "../../types";
import PostCardItem from "./PostCardItem";

type PostCardListProps = {
  data: Post[];
};
function PostCardList({ data, ...props }: PostCardListProps) {
  return (
    <Container {...props}>
      {data.map(({ ...item }, i) => (
        <PostCardItem key={i} {...item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;

  & > * {
    width: calc(50% - 12px);

    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;

export default PostCardList;
