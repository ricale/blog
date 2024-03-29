import { css } from "../../themes";

const codeblockCss = css`
  pre[class*="language-"] {
    margin: 0 0 16px;
  }

  code[class*="language-"] {
    font-size: 0.85rem;
  }

  .gatsby-highlight-code-line {
    display: block;

    margin-left: -1em;
    margin-right: -1em;
    padding-top: 1.8px;
    padding-bottom: 1.8px;
    padding-left: 0.75em;
    padding-right: 1em;
    border-left: 0.25em solid ${(p) => p.theme.colors.codeblockHighlightBorder};

    background-color: ${(p) => p.theme.colors.codeblockHighlight};
  }

  .line-numbers .line-numbers-rows {
    bottom: 0;
    padding-top: 17.5px;
    padding-left: 12px;
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
      z-index: 1;

      padding: 2px 8px;

      font-size: 0.875rem;
      font-family: consolas, monospace;
      background-color: ${(p) => p.theme.colors.codeblockTitle};
    }
    .codeblock-copy-button {
      position: absolute;
      top: 0;
      right: 0;

      padding: 4px 6px;
      border: 0;

      font-size: 0.75rem;
      color: ${(p) => p.theme.colors.codeblockCopyButtonLabel};
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

  @media (max-width: 500px) {
    .codeblock-container {
      padding-top: 0;
      .codeblock-title {
        position: static;
        background-color: ${(p) => p.theme.colors.codeblockTitleInMobile};
      }
    }
  }
`;

export default codeblockCss;
