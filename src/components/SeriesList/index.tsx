import * as React from "react";

import styled from "../../themes";
import { Series } from "../../types";
import SeriesListItem from "./SeriesListItem";

type SeriesListProps = {
  data: Series[];
};
function SeriesList({ data, ...props }: SeriesListProps) {
  return (
    <Container {...props}>
      {data.map((sr) => (
        <SeriesListItem key={sr.fieldValue} {...sr} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;

  & > * {
    width: calc(25% - 12px);

    @media (max-width: 768px) {
      width: calc(33% - 10px);
    }

    @media (max-width: 500px) {
      width: calc(50% - 8px);
    }
  }
`;

export default SeriesList;
