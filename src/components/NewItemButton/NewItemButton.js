import React from "react";
import Styled from "styled-components";

const Button = Styled.button`
  background-color: #61DAFA;
  box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 50px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  font-weight: bold;
  color: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;

  transform: rotate(0);
  transition: .3s ease;

  &:hover {
  transform: rotate(224deg);
}
`;

const addItem = () => {};

function NewItemButton() {
  return <Button onClick={addItem}>+</Button>;
}

export { NewItemButton };
