import * as React from "react";

import styled from "../../themes";
import { PostFrontmatter } from "../../types";
import SeriesItem from "./SeriesItem";

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
        <SeriesItem key={sr.fieldValue} {...sr} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default SeriesList;
