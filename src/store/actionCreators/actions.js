import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../actionsTypes/actionTypes";

export const addTodo = (message) => ({
  type: ADD_TODO,
  payload: { message },
});

export const toggleTodo = (id, isCompleted) => ({
  type: TOGGLE_TODO,
  payload: { id, isCompleted },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});
