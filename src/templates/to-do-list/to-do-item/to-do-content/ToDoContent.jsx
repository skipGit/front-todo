import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditIcon from "@mui/icons-material/Edit";
import TaskIcon from "@mui/icons-material/Task";
import { useToDoItemClasses } from "../to-do-item.style";

const ToDoContent = ({
  isCompleted,
  title,
  handleEdit,
  handleComplete,
  handleDelete,
}) => {
  const classes = useToDoItemClasses();
  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography
          className={isCompleted ? classes.typoIsCompleted : classes.typo}
          align="left"
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
  );
};

export default ToDoContent;
