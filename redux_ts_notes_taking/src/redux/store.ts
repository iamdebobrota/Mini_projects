import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { ArticleAction, ArticleState, DispatchType } from "../constraints/type";

export const store: Store<ArticleState, ArticleAction> & {
    dispatch: DispatchType;
  } = createStore(reducer, applyMiddleware(thunk));
  