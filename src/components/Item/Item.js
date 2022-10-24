import React from "react";
import Styled from "styled-components";

const Container = Styled.li`
  background-color: #FAFAFA;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.15);

& > p {
  margin: 24px 0 24px 24px;
  width: calc(100% - 120px);
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")}
}

& > span {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  font-size: 24px;
  font-weight: bold;
  /* background-color: #CCC; */
}

& > span:first-child {
  position: absolute;
  left: 12px;
  color: ${(props) => (props.completed ? "#4caf50" : "black")}
}

& > span:nth-child(3) {
  position: absolute;
  top: -24px;
  right: 0;
  &:hover {
  color: red;
  }
}
`;

function Item({ text, completed, onComplete, onDelete }) {
  return (
    <Container completed={completed}>
      <span onClick={onComplete}>&#10004;</span>
      <p>{text}</p>
      <span onClick={onDelete}>X</span>
    </Container>
  );
}

export { Item };
