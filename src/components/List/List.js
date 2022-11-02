import React from "react";
import Styled from "styled-components";

const Container = Styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > ul {
  margin: 0;
  padding: 0 0 56px 0;
  list-style: none;
  }
`;

function List(props) {
  return (
    <Container>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.searchedTodos.length && props.onEmptyTodos()}
      {props.searchedTodos.map((todo) => props.render(todo))}

      <ul>{props.children}</ul>
    </Container>
  );
}

export { List };
