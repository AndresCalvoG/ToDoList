import React from "react";
import Styled from "styled-components";
import { useStorageListener } from "./useStorageListener";

const Alert = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  top:0;
  background: rgba(0,0,0,0.5);
  z-index: 2;

  div{
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: rgba(0,0,0,0.8);
    color: white;
    h1{
      text-align: center;
    }
    button{
      width: 20rem;
      height: 5rem;
      font-size: 2.5rem;
      font-weight: bold;
      margin-top: 1rem;
      background: lightblue;
      cursor: pointer;
      &:hover{
        border-color: rgba(0,0,256,0.6);
      }
    }
  }
`;

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <Alert>
        <div>
          <h1>!Al parecer hay cambios desde otra ventana</h1>
          <button onClick={() => toggleShow()}>Recargar</button>
        </div>
      </Alert>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
