import { theme } from "./assets/theme";
import { ThemeProvider } from "@mui/material";
import ToDoList from "./templates/to-do-list/ToDoList";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToDoList />
    </ThemeProvider>
  );
};

export default App;
