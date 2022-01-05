import React, { useState } from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditIcon from "@mui/icons-material/Edit";
import TaskIcon from "@mui/icons-material/Task";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

import { useDispatch } from "react-redux";
import { useToDoItemClasses } from "./to-do-item.style";
import {
  deleteToDoAction,
  toggleToDoAction,
  editToDoAction,
} from "../../../store/toDo/actions";

const ToDoItem = ({ message, isCompleted, id }) => {
  const [edited, setEdited] = useState(message);
  const classes = useToDoItemClasses();
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(deleteToDoAction(id));
  };

  const handleComplete = () => {
    dispatch(toggleToDoAction(id));
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const submitEdit = () => {
    dispatch(editToDoAction({ id, message: edited }));
    setIsEditing(!isEditing);
  };

  return (
    <Container className={classes.container} maxWidth="md">
      {isEditing ? (
        <Card>
          <FormControl>
            <CardContent>
              <Input
                value={edited}
                onChange={(event) => setEdited(event.target.value)}
              ></Input>
              <IconButton onClick={submitEdit}>
                <CheckCircleSharpIcon></CheckCircleSharpIcon>
              </IconButton>
            </CardContent>
          </FormControl>
        </Card>
      ) : (
        <Card>
          <CardContent className={classes.content}>
            <Typography
              className={isCompleted ? classes.typo_isCompleted : classes.typo}
              align="left"
              onClick={() => console.log(isEditing)}
            >
              {message}
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
