import { css } from "../../themes";

const imageCss = css`
  img {
    border: 1px solid ${(p) => p.theme.colors.imageBorder};
  }

  .gatsby-resp-image-figure {
    margin: 0 0 16px;
    .gatsby-resp-image-wrapper {
      margin-bottom: 0;
    }
    .gatsby-resp-image-figcaption {
      margin-top: 4px;
      text-align: center;
      font-size: 0.875rem;
      color: ${(p) => p.theme.colors.imageCaptionText};
    }
  }
  .gatsby-resp-image-wrapper {
    margin-bottom: 16px;
  }
`;

export default imageCss;
