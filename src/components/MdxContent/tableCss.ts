import { css } from "../../themes";

const tableCss = css`
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
`;

export default tableCss;
