import { useState } from "react";
import TodoList from "./TodoList.jsx";
import { Filters } from "./Filters.jsx";
import { AddTodo } from "./AddTodo.jsx";
import { DarkMode } from "./DarkMode.jsx";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);
  const [text, setText] = useState("");

  const handleTodoClick = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // не трогать
  console.log("rerender App");
  //

  return (
    <div className="container">
      <Filters tab={tab} setTab={setTab} />
      <DarkMode isDark={isDark} setIsDark={setIsDark} />
      <AddTodo setTodos={setTodos} setText={setText} text={text} />

      <TodoList
        todos={todos}
        tab={tab}
        handleTodoClick={handleTodoClick}
        theme={isDark ? "dark" : "light"}
      />
    </div>
  );
}
