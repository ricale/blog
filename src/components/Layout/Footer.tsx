import * as React from "react";
import styled from "../../themes";

function Footer() {
  return (
    <Container>
      <p>
        Copyright 2021{" "}
        <strong>
          <a href="https://ricale.kr/">ricale</a>.
        </strong>
      </p>
      <p>
        <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/kr/">
          CC BY-NC-SA 2.0 KR
        </a>
        .
      </p>
      <p>
        Powered by{" "}
        <strong>
          <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </strong>{" "}
        and{" "}
        <strong>
          <a href="https://pages.github.com/">GitHub Pages</a>
        </strong>
        .
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;

  margin-top: 60px;
  margin-bottom: 16px;

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
