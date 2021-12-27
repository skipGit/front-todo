import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { toDoReducer } from "./toDo/reducer";

export const store = createStore(toDoReducer, composeWithDevTools());
