import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDoAction } from "../../../store/toDo/actions";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";

import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useAddNewItemFormClasses } from "./add-new-item-form.style";

const AddNewItemForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const classes = useAddNewItemFormClasses();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      dispatch(
        addToDoAction(inputValue)
      );
    }
    setInputValue("");
  };

  return (
    <Container className={classes.container} maxWidth="md">
      <FormControl required={true}>
        <Input
          type="text"
          placeholder="add to do"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></Input>
        <IconButton onClick={handleSubmit} fontSize="small">
          <AddCircleIcon />
        </IconButton>
      </FormControl>
    </Container>
  );
};

export default AddNewItemForm;
