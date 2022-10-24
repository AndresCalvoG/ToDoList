import React from "react";
import Styled from "styled-components";

const Header = Styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin: 0;
  padding: 4.8rem;
`;
function Counter() {
  return <Header>Has completado 2 de 3 items de ToDoList</Header>;
}

export { Counter };
