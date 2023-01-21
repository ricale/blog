import * as React from "react";

import styled from "../../themes";
import { PostFrontmatter } from "../../types";
import SeriesListItem from "./SeriesListItem";

type SeriesListProps = {
  data: {
    fieldValue: string;
    totalCount: number;
    edges: {
      node: {
        frontmatter: Omit<PostFrontmatter, "slug" | "tags"> & {
          originalDate: string;
        };
      };
    }[];
  }[];
};
function SeriesList({ data: source }: SeriesListProps) {
  const data = source
    .map(({ edges, ...sr }) => ({
      ...sr,
      node: edges.sort((a, b) =>
        b.node.frontmatter.originalDate.localeCompare(
          a.node.frontmatter.originalDate
        )
      )[0].node,
    }))
    .sort((a, b) =>
      b.node.frontmatter.originalDate.localeCompare(
        a.node.frontmatter.originalDate
      )
    );
  return (
    <Container>
      {data.map((sr) => (
        <Item key={sr.fieldValue} {...sr} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;
const Item = styled(SeriesListItem)`
  width: calc(25% - 12px);

  @media (max-width: 768px) {
    width: calc(33% - 10px);
  }

  @media (max-width: 500px) {
    width: calc(50% - 8px);
  }
`;

export default SeriesList;
