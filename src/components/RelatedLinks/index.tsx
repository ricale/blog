import * as React from "react";

import styled from "../../themes";
import GitHubIcon from "./GitHubIcon";
import HomeIcon from "./HomeIcon";

function RelatedLinks() {
  return (
    <Container>
      <a href="https://ricale.kr">
        <HomeIcon size={24} />
      </a>
      <a href="https://github.com/ricale/blog">
        <GitHubIcon size={24} />
      </a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  & > a {
    display: flex;
    color: #aaaaaa;
    &:hover {
      color: #ffffff;
    }
  }
`;

export default RelatedLinks;
