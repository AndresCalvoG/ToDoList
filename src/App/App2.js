import React from "react";
import Styled from "styled-components";

const App = Styled.div`
  width: 100vw;
  
`;

function UseState() {
  return (
    <div>
      <h1>Eliminar UseState</h1>
      <p>Por favor, escribe el codigo de seguridad</p>
      <input placeholder="Codigo de seguridad" />
      <button>Comprobar</button>
    </div>
  );
}

class ClassState extends React.Component {
  render() {
    return (
      <div>
        <h1>Eliminar ClassState</h1>
        <p>Por favor, escribe el codigo de seguridad</p>
        <input placeholder="Codigo de seguridad" />
        <button>Comprobar</button>
      </div>
    );
  }
}

function App2() {
  return (
    <App>
      <UseState />
      <ClassState />
    </App>
  );
}

export default App2;
