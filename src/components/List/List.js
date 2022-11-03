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
  const renderFunc = props.children || props.render;
  return (
    <Container>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      {!props.loading &&
        !props.error &&
        props.searchedTodos.map((todo) => renderFunc(todo))}
    </Container>
  );
}

export { List };
