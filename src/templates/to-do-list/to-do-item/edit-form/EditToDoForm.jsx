import React, { useState } from 'react';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import { editToDoAction } from "../../../../store/toDo/actions";
import { useDispatch } from 'react-redux';

const EditToDoForm = ({editMode, setEditMode, id, title}) => {
    const [editedTitle, setEditedTitle] = useState(title);
    const dispatch = useDispatch();
    const submitEdit = () => {
        dispatch(editToDoAction({ id, title: editedTitle }));
        setEditMode(!editMode);
      };

    return (
        <Card>
          <FormControl>
            <CardContent>
              <Input
                value={editedTitle}
                onChange={(event) => setEditedTitle(event.target.value)}
              ></Input>
              <IconButton onClick={submitEdit}>
                <CheckCircleSharpIcon></CheckCircleSharpIcon>
              </IconButton>
            </CardContent>
          </FormControl>
        </Card>
    )
}

export default EditToDoForm;
