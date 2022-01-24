import {
  showToDosAction,
  addToDoAction,
  deleteToDoAction,
  editToDoAction,
  toggleToDoAction,
} from "../store/toDo/actions";
import axios from "axios";

export const fetchAllTodos = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/todos")
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          dispatch(showToDosAction(res.data));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postTodo = (titleToPost) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/todos", {
        title: titleToPost,
      })
      .then((res) => dispatch(addToDoAction(res.data.title)))
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/todos/${id}`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(deleteToDoAction(id));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const patchTodo = (id, titlePatched) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:5000/todos/${id}`, {
        title: titlePatched,
      })
      .then((res) => {
        console.log(res);
        dispatch(editToDoAction({ id, title: titlePatched }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const toggleTodo = (id, isCompleted) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:5000/todos/${id}/completed`, {
        isCompleted: isCompleted,
      })
      .then((res) => {
        console.log(res);
        dispatch(toggleToDoAction({ id, isCompleted: isCompleted }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
