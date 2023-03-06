import { css } from "../../themes";

const tableCss = css`
  table {
    width: max-content;
    max-width: 100%;
    margin-bottom: 16px;
    border-collapse: collapse;
    td,
    th {
      padding: 6px 13px;
      border: 1px solid ${(p) => p.theme.colors.tableBorder};
    }
  }
`;

export default tableCss;
