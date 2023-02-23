import { ReducerType, TodoType } from "../components/constraint";
import * as types from "./actionType";
import axios from "axios";
import { Dispatch } from "redux";


// get todo
export const getTodoAction =
  () => (dispatch: ({ type, payload }: ReducerType) => Dispatch) => {
    dispatch({ type: types.TODO_LOADING });
    return axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        console.log(res);
        dispatch({ type: types.GET_TODO_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.TODO_FAILURE });
      });
  };
  // post todo
export const postTodoAction =
  (todos: TodoType) =>
  (dispatch: ({ type, payload }: ReducerType) => Dispatch) => {
    dispatch({ type: types.TODO_LOADING });
    return axios
      .post("http://localhost:8080/todos", todos)
      .then((res) => {
        // console.log(res);
        dispatch({ type: types.POST_TODO_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.TODO_FAILURE });
      });
  };
  // delete todo
export const deleteTodoAction =
  (id: number) =>
  (dispatch: ({ type, payload }: ReducerType) => Dispatch) => {
    dispatch({ type: types.TODO_LOADING });
    return axios
      .delete(`http://localhost:8080/todos${id}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: types.DELETE_TODO_SUCCESS});
      })
      .catch((err) => {
        dispatch({ type: types.TODO_FAILURE });
      });
  };
