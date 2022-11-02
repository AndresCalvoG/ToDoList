import React from "react";
import Styled from "styled-components";

const Container = Styled.p`
  width: 90%
  height: 6rem;
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 2rem;
`;

function EmptyTodos() {
  return <Container>Crea un nuevo ToDo..</Container>;
}

export { EmptyTodos };
