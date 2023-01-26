import { Link } from "gatsby";
import * as React from "react";
import styled from "../themes";
import { TableOfPostContents } from "../types";

type TableOfContentsProps = {
  data: TableOfPostContents;
  slug: string;
};
function TableOfContents({ data, slug }: TableOfContentsProps) {
  return (
    <Container>
      {data.map((item, i) => (
        <li key={i}>
          <Link to={`/posts/${slug}/${item.url}`}>{item.title}</Link>
          {!!item.items && <TableOfContents data={item.items} slug={slug} />}
        </li>
      ))}
    </Container>
  );
}

const Container = styled.ol`
  list-style: none;
`;

export default TableOfContents;
