import { useState } from "react";
import { useTodos } from "../Context/TodoContext";

const AddTodo = () => {
    const [todo, setTodo] = useState<string>('');
    const { handleAddTodo } = useTodos();

  const addOnList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      handleAddTodo(todo);
      setTodo('');
  };

  return (
    <div className="">
      <form action="" onSubmit={addOnList}>
        <input
          type="text"
          value={todo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
          className="border-2 "
        />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
