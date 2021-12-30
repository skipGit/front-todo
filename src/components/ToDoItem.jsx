import React from "react";
import {
  Card,
  Typography,
  Container,
  IconButton,
  CardContent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import CheckIcon from "@mui/icons-material/Check";
import { useStyles } from "./to-do-item.style";
import { deleteToDoAction } from "../store/toDo/actions";

const ToDoItem = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Container className={classes.container} maxWidth="md">
      <Card>
        <CardContent className={classes.content}>
          <Typography className={classes.typo} align="left">
            Lorem ipsum dolor sit amet
          </Typography>
          <IconButton>
            <CheckIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <DeleteSharpIcon fontSize="small" />
          </IconButton>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ToDoItem;
