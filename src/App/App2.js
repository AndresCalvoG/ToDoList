import React, { useState } from "react";
import Styled from "styled-components";

const App = Styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

function UseState({ name }) {
  const [error, setError] = useState(false);

  return (
    <div>
      <h1>Eliminar {name}</h1>
      <p>Por favor, escribe el codigo de seguridad</p>
      {error && <p>Error: el codigo es incorrecto</p>}
      <input placeholder="Codigo de seguridad" />
      <button onClick={() => setError(!error)}>Comprobar</button>
    </div>
  );
}

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  render() {
    return (
      <div>
        <h1>Eliminar {this.props.name}</h1>
        <p>Por favor, escribe el codigo de seguridad</p>
        {this.state.error && <p>Error: el codigo es incorrecto</p>}
        <input placeholder="Codigo de seguridad" />
        <button onClick={() => this.setState({ error: !this.state.error })}>
          Comprobar
        </button>
      </div>
    );
  }
}

function App2() {
  return (
    <App>
      <UseState name="Use State" />
      <ClassState name="Class State" />
    </App>
  );
}

export default App2;
