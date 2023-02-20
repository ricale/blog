import { css } from "../../themes";

const codeblockCss = css`
  pre[class*="language-"] {
    margin: 0 0 16px;
  }

  pre > code {
    padding: unset;
    border-radius: unset;
    background-color: unset;
    color: unset;
  }
  .codeblock-container {
    position: relative;
    padding-top: 0.1px;
    .codeblock-title {
      position: absolute;
      top: 0px;
      left: 8px;
      padding: 2px 8px;

      font-size: 0.875rem;
      font-family: consolas, monospace;
      background-color: #666666;
    }
    .codeblock-copy-button {
      position: absolute;
      top: 0;
      right: 0;

      padding: 4px 6px;
      border: 0;

      font-size: 0.75rem;
      color: #dddddd;
      text-decoration: underline;

      background-color: transparent;
      cursor: pointer;
    }
    .codeblock-title + div pre[class*="language-"] {
      margin-top: 8px;
    }
    .codeblock-title + div + .codeblock-copy-button {
      top: 8px;
    }
  }

  @media (max-width: 700px) {
    .codeblock-container {
      padding-top: 0;
      .codeblock-title {
        position: static;
      }
    }
  }
`;

export default codeblockCss;
