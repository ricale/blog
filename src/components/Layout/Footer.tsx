import * as React from "react";
import styled from "../../themes";
import RelatedLinks from "../RelatedLinks";
import {
  CCL_URL,
  GATSBY_URL,
  GITHUB_PAGES_URL,
  RICALE_HOME_URL,
} from "../../constants/urls";

type FooterProps = {
  showLinks?: boolean;
};
function Footer({ showLinks }: FooterProps) {
  return (
    <Container>
      {showLinks && <RelatedLinks />}
      <InfoRow>
        <p>
          Copyright 2021{" "}
          <strong>
            <a href={RICALE_HOME_URL}>ricale</a>.
          </strong>
        </p>
        <p>
          <a href={CCL_URL}>CC BY-NC-SA 2.0 KR</a>.
        </p>
        <p>
          Powered by{" "}
          <strong>
            <a href={GATSBY_URL}>Gatsby</a>
          </strong>{" "}
          and{" "}
          <strong>
            <a href={GITHUB_PAGES_URL}>GitHub Pages</a>
          </strong>
          .
        </p>
      </InfoRow>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 60px;
  margin-bottom: 16px;

  gap: 16px;
`;
const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;

  font-size: 0.8125rem;

  color: ${(p) => p.theme.colors.inactiveText};
  p {
    white-space: nowrap;
  }
  a {
    color: ${(p) => p.theme.colors.inactiveText};
  }
  strong,
  strong > a {
    font-weight: normal;
    color: ${(p) => p.theme.colors.onBackground};
  }
`;

export default Footer;
