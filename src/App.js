import { theme } from "./assets/theme";
import { ThemeProvider } from "@mui/material";
import ToDoItem from "./components/ToDoItem";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToDoItem />
    </ThemeProvider>
  );
};

export default App;
