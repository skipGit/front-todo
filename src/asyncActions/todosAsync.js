import { showToDosAction } from "../store/toDo/actions";

export const fetchAllTodos = () => {
  return (dispatch) => {
    fetch("http://localhost:5000/todos")
      .then((response) => response.json())
      .then((json) => dispatch(showToDosAction(json)));
  };
};

