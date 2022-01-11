import React, { useState } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditIcon from "@mui/icons-material/Edit";
import TaskIcon from "@mui/icons-material/Task";

import { useDispatch } from "react-redux";
import { useToDoItemClasses } from "./to-do-item.style";
import {
  deleteToDoAction,
  toggleToDoAction,
} from "../../../store/toDo/actions";
import EditToDoForm from "./edit-form/EditToDoForm";

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
        <Card>
          <CardContent className={classes.content}>
            <Typography
              className={isCompleted ? classes.typo_isCompleted : classes.typo}
              align="left"
              onClick={() => console.log(editMode)}
            >
              {title}
            </Typography>
            <IconButton onClick={handleEdit}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={handleComplete}>
              <TaskIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteSharpIcon fontSize="small" />
            </IconButton>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default ToDoItem;
