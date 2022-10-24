import React from "react";
import { Counter } from "../components/Counter/Counter";
import { Searcher } from "../components/Searcher/Searcher";
import { List } from "../components/List/List";
import { Item } from "../components/Item/Item";
import { NewItemButton } from "../components/NewItemButton/NewItemButton";

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <Counter total={totalTodos} completed={completedTodos} />
      <Searcher searchValue={searchValue} setSearchValue={setSearchValue} />
      <List>
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
      <NewItemButton />
    </>
  );
}

export { AppUI };
