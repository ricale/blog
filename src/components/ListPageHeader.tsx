import * as React from "react";
import styled from "../themes";

type ListPageHeaderProps = {
  title: string;
  subtitle?: string;
  note?: string | number;
};
function ListPageHeader({ title, subtitle, note }: ListPageHeaderProps) {
  return (
    <Container>
      {!!subtitle && <Subtitle>{subtitle}</Subtitle>}
      <TitleRow>
        <h1>{title}</h1>
        {!!note && <Note>{`(${note})`}</Note>}
      </TitleRow>
    </Container>
  );
}

const Container = styled.div`
  margin: 40px 0 45px;
  padding-left: 40px;

  @media (max-width: 500px) {
    padding-left: 20px;
  }
`;

const Subtitle = styled.p``;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;

  & > h1 {
    word-break: keep-all;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Note = styled.p`
  margin-bottom: 8px;
  font-size: 0.9375rem;
`;

export default ListPageHeader;
