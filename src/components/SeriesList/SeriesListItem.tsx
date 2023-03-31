import * as React from "react";
import { navigate } from "gatsby";

import { Series } from "../../types";
import styled from "../../themes";
import ThumbnailImage from "../ThumbnailImage";

type SeriesListItemProps = Series;
function SeriesListItem({
  fieldValue,
  totalCount,
  frontmatter,
  ...props
}: SeriesListItemProps) {
  const { date, heroImage, heroImageAlt } = frontmatter;
  return (
    <Container onClick={() => navigate(`/series/${fieldValue}`)} {...props}>
      <ThumbnailWrapper>
        <ThumbnailImage source={heroImage} alt={heroImageAlt} />
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

  background-color: ${(p) => p.theme.colors.seriesListItemThumbnail};
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

  background-color: ${(p) => p.theme.colors.seriesListItemInfo};

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

    background-color: ${(p) => p.theme.colors.sereisListItemCount};
    color: ${(p) => p.theme.colors.seriesListItemCountText};
    font-size: 0.85rem;
    font-weight: normal;
  }
`;

export default SeriesListItem;
