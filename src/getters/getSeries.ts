import { Series, SeriesSource } from "../types";

function getSeries(source: SeriesSource[]): Series[] {
  return source
    .map(({ edges, ...sr }) => ({
      ...sr,
      ...edges.sort((a, b) =>
        b.node.frontmatter.originalDate.localeCompare(
          a.node.frontmatter.originalDate
        )
      )[0].node,
    }))
    .sort((a, b) =>
      b.frontmatter.originalDate.localeCompare(a.frontmatter.originalDate)
    );
}

export default getSeries;
