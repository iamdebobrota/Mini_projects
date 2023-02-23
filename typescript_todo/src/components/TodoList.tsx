import React from 'react'
import './style.css'
import {TodoType} from "./constraint"
import SingleTodo from './SingleTodo';
import './style.css'

interface Props {
   todos: TodoType[];
    setTodos : React.Dispatch<React.SetStateAction<TodoType[]>>;
    completedTodos: TodoType[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}
const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (

<div className='container'>
  <div className="todos">
    <span className='todos_heading'>Active Tasks</span>

    {todos.map((todo)=>(
      <SingleTodo todo= {todo} 
      todos={todos} key={todo.id}
      setTodos={setTodos} />
    ))}
  </div>
  <div className="todos remove">
  <span className='todos_heading'>Completed Tasks</span>
{todos.map((todo)=>(
  <SingleTodo todo= {todo} 
  todos={todos} key={todo.id}
  setTodos={setTodos} />
))}
  </div>
</div>
  )
}

export default TodoList
