import React from "react";
import { Counter } from "../components/Counter/Counter";
import { Searcher } from "../components/Searcher/Searcher";
import { List } from "../components/List/List";
import { Item } from "../components/Item/Item";
import { NewItemButton } from "../components/NewItemButton/NewItemButton";
import { useTodos } from "../customHooks/useTodos";
import { Modal } from "../components/Modal/Modal";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { TodosError } from "../components/TodosError/TodosError";
import { TodosLoading } from "../components/TodosLoading/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos/EmptyTodos.js";
import { EmptySearch } from "../components/EmptySearch/EmptySearch";
import { Header } from "../components/Header/Header";
import { ChangeAlertWithStorageListener } from "../components/ChangeAlert/ChangeAlert";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <Header loading={loading}>
        <Counter totalTodos={totalTodos} completedTodos={completedTodos} />
        <Searcher searchValue={searchValue} setSearchValue={setSearchValue} />
      </Header>
      <List
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError error={error} />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <EmptySearch searchText={searchText} />
        )}
        render={(todo) => (
          <Item
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {/* {(todo) => (
          <Item
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */}
      </List>
      <NewItemButton setOpenModal={setOpenModal} />

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
    </>
  );
}

export default App;
