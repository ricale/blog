import { css } from "../../themes";

const listCss = css`
  ul,
  ol {
    margin-bottom: 16px;
  }
  li > ul,
  li > ol {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export default listCss;
