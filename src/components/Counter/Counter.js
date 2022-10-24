import React from "react";
import Styled from "styled-components";

const Header = Styled.h1`
  font-size: 2.4rem;
  text-align: center;
`;
function Counter() {
  return <Header>Has completado 2 de 3 items</Header>;
}

export { Counter };
