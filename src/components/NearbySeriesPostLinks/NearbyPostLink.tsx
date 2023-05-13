import * as React from "react";
import { Link } from "gatsby";

import { PostFrontmatter } from "../../types";
import styled from "../../themes";

type NearbyPostLinkProps = Pick<PostFrontmatter, "title" | "slug"> & {
  desc: string;
  next?: boolean;
};
function NearbyPostLink({ title, slug, desc, ...props }: NearbyPostLinkProps) {
  return (
    <Container {...props} to={`/posts/${slug}`}>
      <Desc>{desc}</Desc>
      <Title>{title}</Title>
    </Container>
  );
}

type ContainerProps = {
  next?: boolean;
};
const Container = styled(Link)<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.next ? "flex-end" : "flex-start")};

  max-width: 100%;
  padding: 16px;

  background-color: ${(p) => p.theme.colors.nearbyPostLink};

  &:hover {
    text-decoration: none;
  }
`;
const Desc = styled.div`
  font-size: 0.75rem;
  color: ${(p) => p.theme.colors.onNearbyPostLink};
`;
const Title = styled.div`
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default NearbyPostLink;
