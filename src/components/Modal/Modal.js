import React from "react";
import ReactDom from "react-dom";
import Styled from "styled-components";

const Container = Styled.div`
  background: rgba(32,35,41,.8);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
function Modal({ children }) {
  return ReactDom.createPortal(
    <Container>{children}</Container>,
    document.getElementById("portal")
  );
}

export { Modal };
