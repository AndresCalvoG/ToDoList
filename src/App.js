import React, { useState } from "react";
import { Counter } from "./components/Counter/Counter";
import { Searcher } from "./components/Searcher/Searcher";
import { List } from "./components/List/List";
import { Item } from "./components/Item/Item";
import { NewItemButton } from "./components/NewItemButton/NewItemButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tormar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todotext = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todotext.includes(searchText);
    });
  }

  return (
    <>
      <Counter total={totalTodos} completed={completedTodos} />
      <Searcher searchValue={searchValue} setSearchValue={setSearchValue} />
      <List>
        {searchedTodos.map((todo) => (
          <Item key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </List>
      <NewItemButton />
    </>
  );
}

export default App;
