import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#b29df3",
    },
    secondary: {
      main: "#d823a1",
    },
  },
  typography: {
    button: {
      fontFamily: "Open Sans",
      fontSize: "0.7rem",
      fontWeight: 700,
    },
    fontFamily: "Roboto",
    fontWeightLight: 300,
    fontSize: 18,
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});
