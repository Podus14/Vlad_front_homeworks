export const AddTodo = ({ setTodos, setText, text }) => {
  // не трогать
  console.log("rerender AddTodo");
  //
  return (
    <div className="add_todo">
      <input
        id="text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos((prev) => [
            ...prev,
            { id: Date.now(), text, completed: false },
          ]);
          setText("");
        }}
      >
        Add new todo
      </button>
    </div>
  );
};
