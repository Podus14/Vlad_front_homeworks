import { useMemo, memo} from "react";

// не трогать
function filterTodos(todos, tab) {
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {}

  return todos.filter((todo) => {
    if (tab === "all") {
      return true;
    } else if (tab === "active") {
      return !todo.completed;
    } else if (tab === "completed") {
      return todo.completed;
    }
  });
}
//

const TodoList = memo(({ todos, theme, tab, handleTodoClick }) => {
  const todos_length = todos.length
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);

  // не трогать
  console.log("rerender TodoList");
  //

  return (
    <div className={theme}>
      Todo list
      <ul>
        {visibleTodos.map((todo, i) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            i={i}
            handleTodoClick={handleTodoClick}
          />
        ))}
      </ul>
    </div>
  );
});

const TodoListItem = memo(({ todo, i, handleTodoClick }) => {
  // не трогать
  console.log("rerender TodoListItem");
  //
  return (
    <li
      className={todo.completed ? "completed" : ""}
      onClick={() => handleTodoClick(todo.id)}
    >
      {i + 1}. {todo.text}
    </li>
  );
});

export default TodoList;
