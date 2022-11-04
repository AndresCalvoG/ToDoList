import React, { useState, useEffect } from "react";
import Styled from "styled-components";

const App = Styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.6rem;

  & > div{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

function UseState({ name }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <div>
      <h1>Eliminar {name}</h1>
      <p>Por favor, escribe el codigo de seguridad</p>
      {error && <p>Error: el codigo es incorrecto</p>}
      {loading && <p>Cargando...</p>}
      <input placeholder="Codigo de seguridad" />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    };
  }
  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h1>Eliminar {this.props.name}</h1>
        <p>Por favor, escribe el codigo de seguridad</p>
        {this.state.error && <p>Error: el codigo es incorrecto</p>}
        {this.state.loading && <p>Cargando...</p>}
        <input placeholder="Codigo de seguridad" />
        <button onClick={() => this.setState({ loading: true })}>
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
