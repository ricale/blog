import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { navigate } from "gatsby";

import { PostFrontmatter } from "../../types";

type SeriesListItemProps = {
  fieldValue: string;
  totalCount: number;
  node: {
    frontmatter: Omit<PostFrontmatter, "slug" | "tags">;
  };
};
function SeriesListItem({
  fieldValue,
  totalCount,
  node,
  ...props
}: SeriesListItemProps) {
  const { date, heroImage, heroImageAlt } = node.frontmatter;

  const image = heroImage ? getImage(heroImage) : null;

  return (
    <Container onClick={() => navigate(`/series/${fieldValue}`)} {...props}>
      <ThumbnailWrapper>
        {!!image && <ThumbnailImage image={image} alt={heroImageAlt ?? ""} />}
      </ThumbnailWrapper>
      <Info>
        <h3>
          {fieldValue} <small>{`${totalCount}`}</small>
        </h3>
        <small>{`~ ${date}`}</small>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const ThumbnailWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: #222222;
`;

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;

  display: flex;
  flex-direction: column;
  padding: 8px;

  background-color: rgba(0, 0, 0, 0.6);

  & > h3 {
    flex: 1;
    margin: 0 0 4px;
    word-break: keep-all;
  }
  & > small {
    text-align: right;
  }
  & > h3 > small {
    padding: 2px 4px;

    background-color: rgba(183, 179, 204, 0.6);
    color: #ffff00;
    font-size: 0.85rem;
    font-weight: normal;
  }
`;

export default SeriesListItem;
