import { theme } from "./assets/theme";
import { ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>
    </ThemeProvider>
  );
};

export default App;
