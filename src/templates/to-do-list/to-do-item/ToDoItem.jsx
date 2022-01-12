import React, { useState } from "react";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import {
  deleteToDoAction,
  toggleToDoAction,
} from "../../../store/toDo/actions";
import { useToDoItemClasses } from "./to-do-item.style";
import EditToDoForm from "./edit-form/EditToDoForm";
import ToDoContent from "./to-do-content/ToDoContent";

const ToDoItem = ({ title, isCompleted, id }) => {
  const classes = useToDoItemClasses();
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const handleDelete = () => {
    dispatch(deleteToDoAction(id));
  };

  const handleComplete = () => {
    dispatch(toggleToDoAction(id));
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
