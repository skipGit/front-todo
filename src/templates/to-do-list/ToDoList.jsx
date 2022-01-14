import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./to-do-item/ToDoItem";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { selectToDoArr } from "../../store/selectors";

const ToDoList = () => {
  const todos = useSelector(selectToDoArr);

  return (
    <Container>
      {todos.length > 0 ? (
        <Container>
          {todos.map((todo) => (
            <ToDoItem
              id={todo.id}
              key={todo.id}
              title={todo.title}
              isCompleted={todo.isCompleted}
            />
          ))}
        </Container>
      ) : (
        <Container maxWidth="sm">
          <CardContent>
            <Typography variant="h2">There no todos</Typography>
          </CardContent>
        </Container>
      )}
    </Container>
  );
};

export default ToDoList;
