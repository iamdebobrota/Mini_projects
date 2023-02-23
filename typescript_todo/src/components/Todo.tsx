import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import TodoList from "./TodoList";
import { InitialStateType, ReducerType, State, TodoType } from "./constraint";
import "./style.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getTodoAction, postTodoAction } from "../redux/action";
import { Dispatch } from "redux";

const Todo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch: Dispatch<any> = useDispatch();
  const {isLoading, isError, todos}: InitialStateType=useSelector((state: State)=>state.todoReducer)
  const [todosAr, setTodosAr] = useState<TodoType[]>([]);

  const [completedTodos, setCompletedTodos] = useState<TodoType[]>([]);

  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const obj = { id: Date.now(), todo, isDone: false };
    
    if (todo) {
      dispatch(postTodoAction(obj));
      setTodosAr([...todos]);
      console.log(todos)
      setTodo("");
    }
  };
  // console.log(todos);
  const handleGetdata = () => {
    dispatch(getTodoAction())
  };

  useEffect(() => {
    handleGetdata()
  }, [])
  
  return (
    <div className="App">
      <span className="heading">Task List</span>
      <InputField todo={todo}
       setTodo={setTodo} 
       handleAdd={handleAdd} />

      <TodoList
        todos={todos}
        setTodos={setTodosAr}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
};

export default Todo;
