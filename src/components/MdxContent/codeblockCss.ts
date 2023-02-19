import { css } from "../../themes";

const codeblockCss = css`
  pre[class*="language-"] {
    margin-bottom: 16px;
  }

  pre > code {
    padding: unset;
    border-radius: unset;
    background-color: unset;
    color: unset;
  }
  .codeblock-container {
    position: relative;
    padding-top: 4px;
    .codeblock-title {
      position: absolute;
      top: 0px;
      left: 8px;
      padding: 2px 8px;

      font-size: 0.875rem;
      font-family: consolas, monospace;
      background-color: #666666;
      /* border: 2px solid #2a2a2a; */
    }
  }

  @media (max-width: 700px) {
    .codeblock-container {
      padding-top: 0;
      .codeblock-title {
        position: static;
      }
      .codeblock-title + div pre[class*="language-"] {
        margin-top: 0;
      }
    }
  }
`;

export default codeblockCss;
