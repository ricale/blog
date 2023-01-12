import styled from "../themes";

const MdxContent = styled.div`
  word-break: keep-all;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    padding: 0;
  }

  h1 {
    margin-top: ${(p) => p.theme.dimens.margin * 3.5}px;
    margin-bottom: ${(p) => p.theme.dimens.margin}px;
  }

  h2 {
    margin-top: ${(p) => p.theme.dimens.margin * 3}px;
    margin-bottom: ${(p) => p.theme.dimens.margin}px;
  }

  h3 {
    margin-top: ${(p) => p.theme.dimens.margin * 2.5}px;
    margin-bottom: ${(p) => p.theme.dimens.margin}px;
  }

  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  ul,
  ol,
  table {
    margin-top: ${(p) => p.theme.dimens.margin}px;
    margin-bottom: ${(p) => p.theme.dimens.margin}px;
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
    padding: 16px 30px;
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
    top: 15px;
    left: 5px;

    font-size: 3rem;
    color: ${(p) => p.theme.colors.blockquoteBorder};
  }
  blockquote:after {
    content: '"';

    position: absolute;
    bottom: -15px;
    right: 10px;

    font-size: 3rem;
    color: ${(p) => p.theme.colors.blockquoteBorder};
  }

  code {
    padding: ${(p) => p.theme.dimens.spacing}px
      ${(p) => p.theme.dimens.spacing}px ${(p) => p.theme.dimens.thin}px;
    border-radius: 2px;

    font-size: 0.875em;

    background-color: ${(p) => p.theme.colors.code};
    color: ${(p) => p.theme.colors.onCode};
  }

  pre {
    margin: ${(p) => p.theme.dimens.margin}px 0;
    padding: ${(p) => p.theme.dimens.margin}px;

    background-color: ${(p) => p.theme.colors.codeblock};
    color: ${(p) => p.theme.colors.onCodeblock};
    line-height: 140%;
    overflow-x: auto;
  }

  pre > code {
    padding: unset;
    border-radius: unset;
    background-color: unset;
    color: unset;
  }

  table {
    border-collapse: collapse;
    td,
    th {
      border: 1px solid ${(p) => p.theme.colors.tableBorder};
      padding: ${(p) => p.theme.dimens.spacing}px
        ${(p) => p.theme.dimens.gutter}px;
    }
  }
`;

export default MdxContent;
