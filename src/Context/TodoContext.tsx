import { createContext, ReactNode, useContext, useState } from "react";

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
};

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
    const [todos , setTodos] = useState<Todo[]>([])
    
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

    return <todosContext.Provider value={{todos,handleAddTodo}}>
        {children}
    </todosContext.Provider>
}

export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if (!todosConsumer) throw new Error('useTodos used outside of Provider');
    return todosConsumer;
}