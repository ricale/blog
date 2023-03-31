import * as React from "react";
import { navigate } from "gatsby";

import { Post } from "../../types";
import styled from "../../themes";
import ThumbnailImage from "../ThumbnailImage";

type PostListItemProps = Post;

function PostCardItem({
  title,
  slug,
  date,
  heroImage,
  heroImageAlt,
  ...props
}: PostListItemProps) {
  return (
    <Container {...props} onClick={() => navigate(`/posts/${slug}`)}>
      <ThumbnailWrapper>
        <ThumbnailImage source={heroImage} alt={heroImageAlt} />
      </ThumbnailWrapper>
      <Info>
        <Title>{title}</Title>
        <Subtitle>{date}</Subtitle>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  padding: 2px;
  background-color: ${(p) => p.theme.colors.postCardItem};
  cursor: pointer;
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 150px;
`;

const Info = styled.div`
  padding: 8px;
`;
const Title = styled.h3`
  word-break: keep-all;
  margin-bottom: 4px;
`;
const Subtitle = styled.p`
  font-size: 0.875rem;
`;

export default PostCardItem;
