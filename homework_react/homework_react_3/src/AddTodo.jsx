import { memo, useRef} from "react";


export const AddTodo = memo(({ setTodos }) => {

  const text = useRef("")

  // не трогать
  console.log("rerender AddTodo");
  //
  return (
    <div className="add_todo">
      <input
        id="text"
        type="text"
        ref={text}
      />
      <button
        onClick={() => {
          setTodos((prev) => [
            ...prev,
            { id: Date.now(), text: text.current.value, completed: false },
          ]);
          text.current.value = "";
        }}
      >
        Add new todo
      </button>
    </div>
  );
});
