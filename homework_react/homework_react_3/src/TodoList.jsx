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

const TodoList = ({ todos, theme, tab, handleTodoClick }) => {
  const visibleTodos = filterTodos(todos, tab);

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
};

const TodoListItem = ({ todo, i, handleTodoClick }) => {
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
};

export default TodoList;
