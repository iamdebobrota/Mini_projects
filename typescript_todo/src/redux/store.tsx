import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";
  import {  TodoReducer } from "./reducer";
  import thunk from "redux-thunk";
  
  declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
  const composeEnhancers: any =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const rootReducer = combineReducers({
   todoReducer: TodoReducer
  });
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  