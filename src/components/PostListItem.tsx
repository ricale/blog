import * as React from "react";
import { navigate } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import styled from "../themes";

type PostListItemProps = {
  title: string;
  slug: string;
  date: string;
  heroImage?: ImageDataLike;
  heroImageAlt?: string;
};
function PostListItem({
  title,
  slug,
  date,
  heroImage,
  heroImageAlt,
}: PostListItemProps) {
  const image = heroImage ? getImage(heroImage) : null;
  return (
    <Container onClick={() => navigate(`/posts/${slug}`)}>
      <ThumbnailWrapper>
        {!!image && <ThumbnailImage image={image} alt={heroImageAlt ?? ""} />}
      </ThumbnailWrapper>
      <Info>
        <h2>{title}</h2>
        <WrittenDate>{date}</WrittenDate>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`;

const ThumbnailWrapper = styled.div`
  position: relative;

  width: 60px;
  height: 60px;

  background-color: #222222;
`;

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;

  & > h2 {
    margin: 0;
    font-size: 1.125rem;
  }
`;

const WrittenDate = styled.div`
  font-size: 0.8125rem;
  color: #dddddd;
`;

export default PostListItem;
