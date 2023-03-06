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

      background-color: ${(p) => p.theme.colors.fixedToc};

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
          color: ${(p) => p.theme.colors.onFixedToc};
        }
        a > code {
          color: ${(p) => p.theme.colors.onFixedToc};
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
        border-left: 1px solid ${(p) => p.theme.colors.inactiveText};

        white-space: nowrap;

        a {
          color: ${(p) => p.theme.colors.inactiveText};
        }
        a > code {
          color: ${(p) => p.theme.colors.inactiveText};
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
        color: ${(p) => p.theme.colors.onBackground};
        text-decoration: underline;
        code {
          color: ${(p) => p.theme.colors.onBackground};
          text-decoration: underline;
        }
      }
    }
  }
  > .toc {
    ${[...new Array(20)].map(
      (_, i) =>
        css`
          @media (min-width: ${1100 + (i + 1) * 20}px) {
            width: ${(1100 + i * 20 - 800) / 2}px;
          }
        `
    )}

    @media (min-width: ${1100}px) {
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
