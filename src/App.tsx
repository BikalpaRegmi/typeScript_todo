import { NavLink } from 'react-router-dom';
import './App.css';
import AddTodo from './Components/AddTodo';
import Todo from './Components/Todo';


const App = () => {
  return (
    <div className="md:ml-60">
      <span className="flex text-3xl  h-12 gap-5  mt-12 md:w-[75%] bg-yellow-100 justify-center ">
        <p className="text-blue-800 mt-2  font-bold">
          Todo app with TYPESCRIPT{" "}
        </p>
        <img
          className="py-1 mt-1"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
          alt=""
        />
      </span>

      <ul className="flex justify-around md:w-[75%] mt-1">
        <NavLink to={"/"} className="hover:underline active:bg-violet-100">
          ALL
        </NavLink>
        <NavLink
          to={"/?todos=active"}
          className="hover:underline active:bg-violet-100"
        >
          ACTIVE
        </NavLink>
        <NavLink
          to={"/?todos=completed"}
          className="hover:underline active:bg-violet-100"
        >
          COMPLETED
        </NavLink>
      </ul>

      <AddTodo />
      <Todo />
    </div>
  );
}

export default App

