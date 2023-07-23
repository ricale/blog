import * as React from "react";

import {
  BLOG_GITHUB_REPOSITORY_URL,
  RICALE_HOME_URL,
} from "../../constants/urls";
import styled from "../../themes";
import GitHubIcon from "./GitHubIcon";
import HomeIcon from "./HomeIcon";

function RelatedLinks() {
  return (
    <Container>
      <a href={RICALE_HOME_URL}>
        <HomeIcon size={24} />
      </a>
      <a href={BLOG_GITHUB_REPOSITORY_URL}>
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
