import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { toDoReducer } from "./toDo/reducer";

const rootReducer = combineReducers({ todos: toDoReducer });

export const store = createStore(rootReducer, composeWithDevTools());
