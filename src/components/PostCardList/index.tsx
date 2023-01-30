import * as React from "react";

import styled from "../../themes";
import { Post } from "../../types";
import PostCardItem from "./PostCardItem";

type PostCardListProps = {
  data: Post[];
};
function PostCardList({ data }: PostCardListProps) {
  return (
    <Container>
      {data.map(({ ...item }, i) => (
        <Item key={i} {...item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
`;

const Item = styled(PostCardItem)`
  width: calc(50% - 12px);
`;

export default PostCardList;
