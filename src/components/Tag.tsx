import * as React from "react";
import { Link } from "gatsby";
import styled from "../themes";

type TagProps = {
  value: string;
};
function Tag({ value }: TagProps) {
  return <TagComp to={`/tags/${value}`}>{value}</TagComp>;
}

const TagComp = styled(Link)`
  display: inline-block;
  padding: ${(p) => p.theme.dimens.spacing}px ${(p) => p.theme.dimens.gutter}px;
  border-radius: 2px;

  background-color: ${(p) => p.theme.colors.tag};
  color: ${(p) => p.theme.colors.onTag};
  text-decoration: none;
`;

export default Tag;
