import { ADD_TODO } from "./constants";
import { DELETE_TODO } from "./constants";
import { TOGGLE_TODO } from "./constants";

export const addToDoAction = (payload) => ({ type: ADD_TODO, payload });
export const deleteToDoAction = (payload) => ({ type: DELETE_TODO, payload });
export const toggleToDoAction = (payload) => ({ type: TOGGLE_TODO, payload });
