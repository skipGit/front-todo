import { theme } from "./assets/theme";
import { ThemeProvider } from "@mui/material";
import ToDoList from "./templates/to-do-list/ToDoList";
import AddNewItemForm from "./templates/to-do-list/add-new-item-form/AddNewItemForm";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AddNewItemForm />
      <ToDoList />
    </ThemeProvider>
  );
};

export default App;
