import styled, { css } from "../themes";

const MdxContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 1.5;

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
      order: 0;
      margin: 0 0 16px;
      padding: 16px 0 0 16px;
      background-color: #1a1a1a;
      > h3 {
        margin: 0;
        font-size: 1.125rem;
      }
      > ul {
        position: relative;
        padding: 8px 0 16px 20px;

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
      > h3 {
        display: none;
      }
      > ul {
        position: sticky;
        top: 10px;
        padding: 8px;
        border-left: 1px solid #ddd;

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

  p {
    margin-top: 0;
    margin-bottom: 16px;
  }

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
    border-bottom: 1px solid #21262d;
    font-size: 2.125em;
  }

  h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #21262d;
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

  ul,
  ol,
  .gatsby-resp-image-wrapper {
    margin-bottom: 16px;
  }

  table {
    width: max-content;
    max-width: 100%;
    margin-bottom: 16px;
    border-collapse: collapse;
    tr {
      border-top: 1px solid #21262d;
    }
    td,
    th {
      padding: 6px 13px;
      border: 1px solid #30363d;
    }
  }

  hr {
    height: 0.25em;
    margin: 24px 0;
    border: 0;

    background-color: #30363d;
  }

  li > ul,
  li > ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  blockquote {
    position: relative;

    margin-left: 0;
    margin-right: 0;
    margin-bottom: 16px;
    padding: 16px 32px;
    border-left: 1px solid ${(p) => p.theme.colors.blockquoteBorder};
    border-left-width: 10px;

    background-color: ${(p) => p.theme.colors.blockquote};

    > :first-child {
      margin-top: 0;
    }
    > :last-child {
      margin-bottom: 0;
    }
    > ul,
    > ol {
      padding-left: 20px;
    }
  }

  blockquote:before {
    content: '"';

    position: absolute;
    top: -10px;
    left: 5px;

    font-size: 3em;
    color: ${(p) => p.theme.colors.blockquoteBorder};
  }
  blockquote:after {
    content: '"';

    position: absolute;
    bottom: -30px;
    right: 5px;

    font-size: 3em;
    color: ${(p) => p.theme.colors.blockquoteBorder};
  }

  code {
    padding: 0.2em 0.4em;
    border-radius: 2px;

    font-size: 0.85em;

    background-color: ${(p) => p.theme.colors.code};
    color: ${(p) => p.theme.colors.onCode};
    white-space: break-spaces;
  }

  a > code {
    color: skyblue;
  }

  pre[class*="language-"] {
    margin-bottom: 16px;

    /* overflow-x: auto; */
  }

  pre > code {
    padding: unset;
    border-radius: unset;
    background-color: unset;
    color: unset;
  }

  img {
    border: 1px solid #333333;
  }
`;

export default MdxContent;
