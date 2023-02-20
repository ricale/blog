import { css } from "../../themes";

const blockquoteCss = css`
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
`;

export default blockquoteCss;
