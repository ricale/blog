import React, { ReactNode, useState } from "react";
import styled from "../themes";

const TRANSITION_DURATION = 0.2;

type CollabsibleProps = {
  title?: string;
  defaultOpen?: boolean;
  children: ReactNode;
};
function Collabsible({
  title = "열기",
  defaultOpen = false,
  children,
}: CollabsibleProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Container>
      <Header open={open} onClick={() => setOpen((st) => !st)}>
        <span>▲</span> {title}
      </Header>
      <Content open={open}>{children}</Content>
      <Footer open={open} onClick={() => setOpen((st) => !st)}>
        <span>✖</span> 닫기
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 16px;
`;

type HeaderProps = {
  open: boolean;
};
const Header = styled.div<HeaderProps>`
  padding-bottom: ${(p) => (p.open ? 16 : 0)}px;

  color: ${(p) => p.theme.colors[p.open ? "onBackground" : "inactiveText"]};
  user-select: none;
  cursor: pointer;
  transition: all ${TRANSITION_DURATION}s;

  & > span {
    display: inline-block;
    transform: rotate(${(p) => (p.open ? 180 : 0)}deg);
    transition: transform ${TRANSITION_DURATION}s;
  }
`;

type ContentProps = {
  open: boolean;
};
const Content = styled.div<ContentProps>`
  padding: 0 16px;
  max-height: ${(p) => (p.open ? 2000 : 0)}px;

  overflow: hidden;
  transition: max-height ${TRANSITION_DURATION}s;
`;

type FooterProps = {
  open: boolean;
};
const Footer = styled.div<FooterProps>`
  padding-bottom: ${(p) => (p.open ? 16 : 0)}px;
  max-height: ${(p) => (p.open ? 24 : 0)}px;

  user-select: none;
  cursor: pointer;
  overflow: hidden;
  color: ${(p) => p.theme.colors.inactiveText};
  transition: all ${TRANSITION_DURATION}s;
`;

export default Collabsible;
