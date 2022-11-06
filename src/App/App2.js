import React, { useState, useEffect } from "react";
import Styled from "styled-components";

const CODE = "paradigma";
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
const Container = Styled.div`
  width: "100%";
  height: "50vh";
`;

function UseState({ name }) {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === CODE) {
          setState({ ...state, error: false, loading: false, confirmed: true });
        } else {
          setState({ ...state, error: true, loading: false });
        }
      }, 3000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <Container>
        <h1>Eliminar {name}</h1>
        <p>Por favor, escribe el codigo de seguridad</p>
        {state.error && !state.loading && <p>Error: el codigo es incorrecto</p>}
        {state.loading && <p>Cargando...</p>}
        <input
          value={state.value}
          onChange={(e) => setState({ ...state, value: e.target.value })}
          placeholder="Codigo de seguridad"
        />
        <button
          onClick={() => {
            setState({ ...state, loading: true });
          }}
        >
          Comprobar
        </button>
      </Container>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <Container>
        <p>Confirmacion, ¿Seguro desea eliminar?</p>
        <button
          onClick={() => {
            setState({ ...state, deleted: true });
          }}
        >
          Si, eliminar
        </button>
        <button
          onClick={() => {
            setState({ ...state, confirmed: false, value: "" });
          }}
        >
          No, regresar
        </button>
      </Container>
    );
  } else {
    return (
      <Container>
        <p>Eliminacion</p>
        <button
          onClick={() => {
            setState({ ...state, confirmed: false, deleted: false, value: "" });
          }}
        >
          Resetear, ir a inicio
        </button>
      </Container>
    );
  }
}

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      value: "",
    };
  }
  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        if (this.state.value === CODE) {
          this.setState({ error: false });
        } else {
          this.setState({ error: true });
        }
        this.setState({ loading: false });
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h1>Eliminar {this.props.name}</h1>
        <p>Por favor, escribe el codigo de seguridad</p>
        {this.state.error && !this.state.loading && (
          <p>Error: el codigo es incorrecto</p>
        )}
        {this.state.loading && <p>Cargando...</p>}
        <input
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          placeholder="Codigo de seguridad"
        />
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
