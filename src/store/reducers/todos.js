import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../actionsTypes/actionTypes";
import { initialState } from "../initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const todo = {
        id: new Date(),
        message: action.payload.message,
        isCompleted: false,
      };
      state.push(todo);
    };
    case TOGGLE_TODO: {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].isCompleted = !action.payload.isCompleted;
    };
    case DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.payload.id)
    }
    default:
      return state;
  }
};
