import React from "react";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import CheckIcon from "@mui/icons-material/Check";

import { useDispatch, useSelector } from "react-redux";
import { useToDoItemClasses } from "./to-do-item.style";
import { deleteToDoAction } from "../../../store/toDo/actions";

const ToDoItem = () => {
  const classes = useToDoItemClasses();
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
