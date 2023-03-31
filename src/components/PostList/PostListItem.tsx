import * as React from "react";
import { navigate } from "gatsby";

import styled from "../../themes";
import { Post } from "../../types";
import ThumbnailImage from "../ThumbnailImage";

const INVALID_DATE_STRING = "Invalid date";

type PostListItemProps = Post;

function PostListItem({
  title,
  slug,
  date,
  heroImage,
  heroImageAlt,
}: PostListItemProps) {
  const dateIsValid = date !== INVALID_DATE_STRING;
  return (
    <Container onClick={() => navigate(`/posts/${slug}`)}>
      <ThumbnailWrapper>
        <ThumbnailImage source={heroImage} alt={heroImageAlt} />
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
