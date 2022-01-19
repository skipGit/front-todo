import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { toDoReducer } from "./toDo/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ todos: toDoReducer });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
