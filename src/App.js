import { Counter } from "./components/Counter/Counter";
import { Searcher } from "./components/Searcher/Searcher";
import { List } from "./components/List/List";
import { Item } from "./components/Item/Item";
import { NewItemButton } from "./components/NewItemButton/NewItemButton";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tormar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  return (
    <>
      <Counter />
      <Searcher />
      <List>
        {todos.map((todo) => (
          <Item key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </List>
      <NewItemButton />
    </>
  );
}

export default App;
