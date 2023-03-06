import * as React from "react";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import styled from "../../themes";
import { Post } from "../../types";

const INVALID_DATE_STRING = "Invalid date";

type PostListItemProps = Post;

function PostListItem({
  title,
  slug,
  date,
  heroImage,
  heroImageAlt,
}: PostListItemProps) {
  const image = heroImage ? getImage(heroImage) : null;
  const dateIsValid = date !== INVALID_DATE_STRING;
  return (
    <Container onClick={() => navigate(`/posts/${slug}`)}>
      <ThumbnailWrapper>
        {!!image && <ThumbnailImage image={image} alt={heroImageAlt ?? ""} />}
      </ThumbnailWrapper>
      <Info>
        <h2>{title}</h2>
        <Subtitle>{dateIsValid ? date : slug}</Subtitle>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px;

  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.colors.postListItemHover};
  }
`;

const ThumbnailWrapper = styled.div`
  position: relative;

  width: 60px;
  height: 60px;

  background-color: ${(p) => p.theme.colors.postListItemThumbnail};
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

const Subtitle = styled.div`
  font-size: 0.8125rem;
  color: ${(p) => p.theme.colors.postListItemSubtitleText};
`;

export default PostListItem;
