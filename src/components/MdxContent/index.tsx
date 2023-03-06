import styled from "../../themes";
import blockquoteCss from "./blockquoteCss";
import codeblockCss from "./codeblockCss";
import headingCss from "./headingCss";
import imageCss from "./imageCss";
import listCss from "./listCss";
import tableCss from "./tableCss";
import tocCss from "./tocCss";

const MdxContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 1.5;

  ${headingCss}
  ${listCss}
  ${imageCss}
  ${tocCss}
  ${codeblockCss}
  ${blockquoteCss}
  ${tableCss}

  p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  hr {
    height: 0.25em;
    margin: 24px 0;
    border: 0;

    background-color: ${(p) => p.theme.colors.hr};
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
`;

export default MdxContent;
