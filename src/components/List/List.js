import React from "react";
import Styled from "styled-components";

const Container = Styled.section`
  & > ul {
  margin: 0;
  padding: 0 0 56px 0;
  list-style: none;
  }
`;

function List(props) {
  return (
    <Container>
      <ul>{props.children}</ul>
    </Container>
  );
}

export { List };
