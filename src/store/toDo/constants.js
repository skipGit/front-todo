export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const initialState = {
  todos: [
    { id: 1, message: "first test todo", isCompleted: false },
    { id: 2, message: "second test todo", isCompleted: false },
    { id: 3, message: "third test todo", isCompleted: false },
  ],
};
