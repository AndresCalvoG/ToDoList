import React from "react";
import { Counter } from "../components/Counter/Counter";
import { Searcher } from "../components/Searcher/Searcher";
import { List } from "../components/List/List";
import { Item } from "../components/Item/Item";
import { NewItemButton } from "../components/NewItemButton/NewItemButton";
import { Context } from "../context/index";
import { Modal } from "../components/Modal/Modal";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { TodosError } from "../components/TodosError/TodosError";
import { TodosLoading } from "../components/TodosLoading/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos/EmptyTodos.js";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(Context);
  return (
    <>
      <Counter />
      <Searcher />
      <List>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <EmptyTodos />}
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
      <NewItemButton setOpenModal={setOpenModal} />

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
