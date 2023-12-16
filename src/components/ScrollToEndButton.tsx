import React from "react";
import styled from "../themes";

function ScrollToEndButton() {
  const scrollTo = (top: number) => {
    window.scrollTo({ top, behavior: "smooth" });
  };
  const onClickScrollToBottom = () => scrollTo(document.body.scrollHeight);
  const onClickScrollToTop = () => scrollTo(0);
  return (
    <Container>
      <ScrollButton onClick={onClickScrollToBottom}>▼</ScrollButton>
      <ScrollButton onClick={onClickScrollToTop}>▲</ScrollButton>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  @media (max-width: 500px) {
    bottom: ${(props) => props.theme.dimens.margin}px;
    right: ${(props) => props.theme.dimens.margin}px;
  }

  display: flex;
  flex-direction: row;
`;

const ScrollButton = styled.button`
  padding: ${(props) => props.theme.dimens.gutter}px
    ${(props) => props.theme.dimens.margin}px;
  border: 0;

  background-color: ${(props) => props.theme.colors.scrollToButton};
  color: ${(props) => props.theme.colors.onScrollToButton};
  opacity: 0.8;

  cursor: pointer;
`;

export default ScrollToEndButton;
