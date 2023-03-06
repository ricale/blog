import { css } from "../../themes";

const headingCss = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    line-height: 1.25;
    font-weight: 600;

    > a.anchor path {
      fill: white;
    }
  }

  h1 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid ${(p) => p.theme.colors.headingBorder};
    font-size: 2.125em;
  }

  h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid ${(p) => p.theme.colors.headingBorder};
    font-size: 1.625em;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.25em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.9375em;
  }
`;

export default headingCss;
