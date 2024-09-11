import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type TodosProviderProps = {
    children: ReactNode;
}

export type Todo = {
    id: string,
    task: string;
    isCompleted: boolean;
    createdAt: Date;
}

export type TodosContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
    handleDelete: (id: string) => void;
};

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const storedItems = localStorage.getItem('todos');
        return storedItems ? JSON.parse(storedItems) : [];
    })
    
    const handleAddTodo = (task:string) => {
        const newTodo: Todo =
        {
            id: Date.now().toString(),
            task: task,
            isCompleted: false,
            createdAt: new Date(),
        };
        setTodos([...todos, newTodo]); 
    }
    
     const toggleTodoAsCompleted = (id: string) => {
       setTodos((prevTodos) =>
         prevTodos.map((todo) =>
           todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
         )
       );
     };
    
    const handleDelete = (id:string) => {
        setTodos(todos.filter((curval) => curval.id !== id));
    }

 

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
   

    return <todosContext.Provider value={{todos,handleAddTodo,toggleTodoAsCompleted,handleDelete}}>
        {children}
    </todosContext.Provider>
}

export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if (!todosConsumer) throw new Error('useTodos used outside of Provider');
    return todosConsumer;
}