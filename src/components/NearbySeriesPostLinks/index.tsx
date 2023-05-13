import * as React from "react";

import { PostFrontmatter } from "../../types";
import styled from "../../themes";

import NearbyPostLink from "./NearbyPostLink";

type NearbySeriesPostLinksProps = {
  data?:
    | null
    | {
        frontmatter: Pick<PostFrontmatter, "title" | "slug">;
      }[];
  current?: string;
};

function NearbySeriesPostLinks({ data, current }: NearbySeriesPostLinksProps) {
  if (!data) {
    return null;
  }

  const currentIndex = data.findIndex((it) => it.frontmatter.slug === current);
  const prevPost = data[currentIndex - 1]?.frontmatter;
  const nextPost = data[currentIndex + 1]?.frontmatter;

  return (
    <Container>
      <div>
        {!!prevPost && <NearbyPostLink {...prevPost} desc="❮ 시리즈 이전글" />}
      </div>
      <div>
        {!!nextPost && (
          <NearbyPostLink {...nextPost} next desc="시리즈 다음글 ❯" />
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;

  margin: 120px 0;

  & > div {
    display: flex;
    flex-direction: column;

    overflow: hidden;
  }
  & > :nth-child(1) {
    align-items: flex-start;
  }
  & > :nth-child(2) {
    align-items: flex-end;
  }
`;

export default NearbySeriesPostLinks;
