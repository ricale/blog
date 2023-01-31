import * as React from "react";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Post } from "../../types";
import styled from "../../themes";

type PostListItemProps = Post;

function PostCardItem({
  title,
  slug,
  date,
  heroImage,
  heroImageAlt,
  ...props
}: PostListItemProps) {
  const image = heroImage ? getImage(heroImage) : null;
  return (
    <Container {...props} onClick={() => navigate(`/posts/${slug}`)}>
      <ThumbnailWrapper>
        {!!image && <ThumbnailImage image={image} alt={heroImageAlt ?? ""} />}
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
  background-color: #333333;
  cursor: pointer;
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 150px;
`;
const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
