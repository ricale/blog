import * as React from "react";
import styled from "../themes";

type ListPageHeaderProps = {
  title: string;
  note?: string;
};
function ListPageHeader({ title, note }: ListPageHeaderProps) {
  return (
    <Container>
      <h1>{title}</h1>
      {!!note && <Note>{`(${note})`}</Note>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;

  margin: 40px;
`;
const Note = styled.p`
  margin-bottom: 8px;
  font-size: 0.875rem;
`;

export default ListPageHeader;
