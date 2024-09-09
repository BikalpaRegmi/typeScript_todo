import React from 'react'
import './App.css';
import AddTodo from './Components/AddTodo';


const App = () => {
  return (
    <div className="ml-60">
 
        <span className="flex text-3xl  h-12 gap-5   mt-12 w-[75%] bg-yellow-100 justify-center ">
          <p className="text-blue-800 mt-2  font-bold">
            Todo app with TYPESCRIPT{" "}
          </p>
          <img
            className="py-1 mt-1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            alt=""
          />
        </span>

        <AddTodo />
      
    </div>
  );
}

export default App

