import { theme } from "./assets/theme";
import { ThemeProvider } from "@mui/material";
import ToDoItem from "./templates/to-do-list/to-do-item/ToDoItem";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToDoItem />
    </ThemeProvider>
  );
};

export default App;
