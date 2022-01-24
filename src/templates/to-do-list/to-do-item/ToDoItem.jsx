import React, { useState } from "react";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { useToDoItemClasses } from "./to-do-item.style";
import EditToDoForm from "./edit-form/EditToDoForm";
import ToDoContent from "./to-do-content/ToDoContent";
import { deleteTodo, toggleTodo } from "../../../asyncActions/todosAsync";

const ToDoItem = ({ title, isCompleted, id }) => {
  const classes = useToDoItemClasses();
  const dispatch = useDispatch();
  const [toggleMode, setToggleMod] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = () => {
    setToggleMod(!toggleMode);
    dispatch(toggleTodo(id, toggleMode));
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  return (
    <Container className={classes.container} maxWidth="md">
      {editMode ? (
        <EditToDoForm
          id={id}
          editMode={editMode}
          setEditMode={setEditMode}
          title={title}
        />
      ) : (
        <ToDoContent
          isCompleted={isCompleted}
          title={title}
          handleEdit={handleEdit}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      )}
    </Container>
  );
};

export default ToDoItem;
