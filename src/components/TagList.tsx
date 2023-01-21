import * as React from "react";

import styled from "../themes";
import Tag from "./Tag";

function isStringArray(arr: unknown[]): arr is string[] {
  return typeof arr[0] === "string";
}

type TagListProps = {
  tags: string[] | { fieldValue: string; totalCount: number }[];
};
function TagList({ tags, ...props }: TagListProps) {
  const items = isStringArray(tags)
    ? tags.map((tag) => ({ fieldValue: tag, totalCount: undefined }))
    : tags;
  return (
    <Container {...props}>
      {items.map((tag) => (
        <li key={tag.fieldValue}>
          <Tag value={tag.fieldValue} />
        </li>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.dimens.gutter}px;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export default TagList;
