import { useState, useEffect, useReducer } from "react";

const initialState = ({ initialValue }) => ({
  sincronized: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronized: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronized: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { sincronized, error, loading, item } = state;
  //Action Creators
  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (parsedItem) =>
    dispatch({ type: actionTypes.success, payload: parsedItem });
  const onSave = (newItem) =>
    dispatch({ type: actionTypes.save, payload: newItem });
  const onSincronize = () => dispatch({ type: actionTypes.sincronize });

  useEffect(() => {
    // Simulamos un segundo de delay de carga
    setTimeout(() => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch (error) {
        // En caso de un error lo guardamos en el estado
        onError(error);
      }
    }, 3000);
  }, [sincronized]);

  const saveItem = (newItem) => {
    // Manejamos la tarea dentro de un try/catch por si ocurre algún error
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      // En caso de algún error lo guardamos en el estado
      onError(error);
    }
  };

  const sincronize = () => {
    onSincronize();
  };

  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {
    item,
    saveItem,
    loading,
    error,
    sincronize,
  };
}

export { useLocalStorage };
