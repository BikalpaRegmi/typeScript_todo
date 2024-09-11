import { useTodos } from '../Context/TodoContext'
import { useSearchParams } from 'react-router-dom';
const Todo = () => {
    const { todos, toggleTodoAsCompleted, handleDelete } = useTodos();
    const [searchParams] = useSearchParams();

    const todosData = searchParams.get('todos')

    let filterData = todos;

    if (todosData === 'active') {
        filterData = filterData.filter((curval)=>!curval.isCompleted)
    }
    if (todosData === 'completed') {
        filterData = filterData.filter((curval) => curval.isCompleted);
    }

  return (
    <div>
          <ul className='ml-12'>
              {filterData.map((curval) => {
                  return (
                    <>
                      <li key={curval.id} className='flex gap-5 text-2xl'>
                              <input type="checkbox" onChange={()=>toggleTodoAsCompleted(curval.id)} id={`todo-${curval.id} `} checked={curval.isCompleted } />
                              <p>   {!curval.isCompleted ? curval.task : ( <span className='line-through'>{curval.task }</span> )} </p>
                              {curval.isCompleted && (
                                  <button className='border-2 hover:bg-red-700 text-sm h-7 mt-1  bg-red-950 text-white font-bold' onClick={()=>handleDelete(curval.id)}>Delete</button>
                              )}
                      </li>
                    </>
                  );
              })}
      </ul>
    </div>
  )
}

export default Todo
