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
      <form action="" className="flex mt-5 gap-1" onSubmit={addOnList}>
        <input
                  type="text"
                  placeholder="Type here"
          value={todo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
          className="border-2 text-xl ml-9  w-[60%] pl-3"
        />
        <button type="submit" className="border-2 px-5 text-xl bg-yellow-900 text-white hover:bg-orange-800 rounded-xl"> Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
