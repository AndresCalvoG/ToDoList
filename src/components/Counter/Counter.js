import React from "react";
import Styled from "styled-components";

const Header = Styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin: 0;
  padding: 4.8rem;
  opacity: ${(props) => (props.loading ? "25%" : "100%")};
`;
function Counter({ totalTodos, completedTodos, loading }) {
  return (
    <Header loading={loading}>
      Has completado {completedTodos} de {totalTodos} items de ToDoList
    </Header>
  );
}

export { Counter };
