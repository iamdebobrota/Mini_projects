// import { Action } from "redux";
import { InitialStateType, ReducerType } from "../components/constraint";
import * as types from "./actionType";

const initState:InitialStateType={
    isLoading: false,
    isError: false,
    todos: [],
    username: ""
}

export const TodoReducer = (state:InitialStateType= initState, action:ReducerType)=>{

    switch (action.type) {
        case types.TODO_LOADING:
            return{
            ...state,
            isLoading: false,
        }
        case types.TODO_FAILURE:
            return{
            ...state,
            isLoading: false,
            isError: false
        }
        
    case types.EDIT_TODO_SUCCESS: 
    return {
        ...state,
        isLoading: false,
        isError: false,
        todos: action.payload
    }
    case types.POST_TODO_SUCCESS: 
    return {
        ...state,
        isLoading: false,
        isError: false,
        todos: action.payload
    }
    default : 
    return state;
    
    
    }
}