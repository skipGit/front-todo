import React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import CheckIcon from "@mui/icons-material/Check";

import { useDispatch } from "react-redux";
import { useToDoItemClasses } from "./to-do-item.style";
import {
  deleteToDoAction,
  toggleToDoAction,
} from "../../../store/toDo/actions";

const ToDoItem = ({ message, isCompleted, id }) => {
  const classes = useToDoItemClasses();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteToDoAction(id));
  };

  const handleComplete = () => {
    dispatch(toggleToDoAction(id));
  };

  return (
    <Container className={classes.container} maxWidth="md">
      <Card>
        <CardContent className={classes.content}>
          <Typography
            className={isCompleted ? classes.typo_isCompleted : classes.typo}
            align="left"
          >
            {message}
          </Typography>
          <IconButton onClick={handleComplete}>
            <CheckIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteSharpIcon fontSize="small" />
          </IconButton>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ToDoItem;
