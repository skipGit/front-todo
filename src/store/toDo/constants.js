export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const initialState = {
  todos: [
    { id: 1, title: "first test todo", isCompleted: false },
    { id: 2, title: "second test todo", isCompleted: false },
    { id: 3, title: "third test todo", isCompleted: false },
  ],
};
