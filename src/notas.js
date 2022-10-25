/*
Clase 1: principios de diseño: 
  1) framework o libreria
    *Abstracciones comunes
    *interoperabilidad:
  3)Cambios al core: 
    *Estabildad
    *Valvulas de escape
    *Experiencia de desarrollo
  2)prioridades: 
    *implementacion
    *optimizado para instrumentacion
    *DogFooding

  3) El trabajo de React
    *Planificacion
    *Configuracion

  4)Mi trabajo
    *Depuracion
    *Composicion

  Donde va el estado
  *maxima cercania ala relevancia
  *statefull vs stateless

  composicion de componentes: 
*/

/*
import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const numero = 4;
  return <Context.Provider value={{ numero }}>{children}</Context.Provider>;
}

function Otro() {
  const { numero } = React.useContext(Context);
  return <h1>numero: {numero}</h1>;
}
function Otro2() {
  const { numero } = React.useContext(Context);
  return <h1>numero 2: {numero}</h1>;
}

function App() {
  return (
    <Provider>
      <Otro />
      <Otro2 />
    </Provider>
  );
}

export default App;
*/
