import React from "react";
import { Counter } from "../components/Counter/Counter";
import { Searcher } from "../components/Searcher/Searcher";
import { List } from "../components/List/List";
import { Item } from "../components/Item/Item";
import { NewItemButton } from "../components/NewItemButton/NewItemButton";
import { Context } from "../context/index";

function AppUI() {
  return (
    <>
      <Counter />
      <Searcher />
      <Context.Consumer>
        {({ error, loading, searchedTodos, completeTodo, deleteTodo }) => (
          <List>
            {error && <p>Desesperate..</p>}
            {loading && <p>Cargando...</p>}
            {!loading && !searchedTodos.length && <p>Crea un todo</p>}
            {searchedTodos.map((todo) => (
              <Item
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </List>
        )}
      </Context.Consumer>
      <NewItemButton />
    </>
  );
}

export { AppUI };
