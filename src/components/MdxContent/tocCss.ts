import { css } from "../../themes";

const tocCss = css`
  > .md {
    order: 1;
  }

  > .toc {
    font-size: 0.875rem;
    > ul {
      margin: 0;
      padding: 0;
      list-style: none;

      ul {
        list-style: none;
      }
    }
  }
  @media (max-width: 1099px) {
    > .toc {
      position: absolute;
      top: -62px;
      right: 8px;
      z-index: 10;

      padding: 8px;

      background-color: #1a1a1a;

      > p {
        margin: 0;
        font-size: 0.875rem;
      }
      > ul {
        display: none;
      }
    }
    > .toc:hover {
      left: 8px;
      padding: 16px;
      > p {
        margin: 0;
        font-size: 1.125rem;
      }
      > ul {
        display: block;
        margin-top: 8px;
        padding-left: 20px;
        font-size: 1rem;
        a {
          color: #dddddd;
        }
        a > code {
          color: #dddddd;
        }
        ul {
          padding-left: 30px;
        }
      }
    }
  }
  @media (min-width: 1100px) {
    > .toc {
      position: absolute;
      top: 8px;
      left: calc(50% + 400px);
      height: 100%;
      > p {
        display: none;
      }
      > ul {
        position: sticky;
        top: 10px;
        padding-left: 8px;
        border-left: 1px solid #aaaaaa;

        white-space: nowrap;

        a {
          color: #aaaaaa;
        }
        a > code {
          color: #aaaaaa;
        }
        code {
          white-space: nowrap;
        }
        overflow: hidden;
        ul {
          padding-left: 15px;
        }
      }

      .highlight {
        color: #ffffff;
        text-decoration: underline;
        code {
          color: #ffffff;
          text-decoration: underline;
        }
      }
    }
  }
  > .toc {
    ${[...new Array(30)].map(
      (_, i) =>
        css`
          @media (min-width: ${1100 + (i + 1) * 10}px) {
            width: ${(1100 + i * 10 - 800) / 2}px;
          }
        `
    )}

    @media (min-width: ${1100 + 30 * 10}px) {
      > ul {
        white-space: inherit;
        code {
          white-space: inherit;
        }
      }
    }
  }
`;

export default tocCss;
