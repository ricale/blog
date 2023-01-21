import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { navigate } from "gatsby";

import { PostFrontmatter } from "../../types";

type SeriesItemProps = {
  fieldValue: string;
  totalCount: number;
  node: {
    frontmatter: Omit<PostFrontmatter, "slug" | "tags">;
  };
};
function SeriesItem({ fieldValue, totalCount, node }: SeriesItemProps) {
  const { date, heroImage, heroImageAlt } = node.frontmatter;

  const image = heroImage ? getImage(heroImage) : null;

  return (
    <Container onClick={() => navigate(`/series/${fieldValue}`)}>
      <ThumbnailWrapper>
        {!!image && <ThumbnailImage image={image} alt={heroImageAlt ?? ""} />}
        <small>{`${totalCount}`}</small>
      </ThumbnailWrapper>
      <Info>
        <h3>{fieldValue}</h3>
        <small>{`~ ${date}`}</small>
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

  width: 80px;
  height: 80px;

  background-color: #222222;

  & > small {
    position: absolute;
    right: 4px;
    bottom: 4px;

    padding: 2px 4px;

    background-color: #444444;
    font-size: 0.85em;
  }
`;

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  h3 {
    margin: 0 0 4px;
  }
`;

export default SeriesItem;
