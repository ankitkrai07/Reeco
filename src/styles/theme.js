import { createTheme } from "@mui/material/styles";
import { fontFamily } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F5132",
      light: "#0A5C36",
      dark: "#18392B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff4081",
      light: "#ff79b0",
      dark: "#c60055",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "#fff",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "#fff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
      disabled: "#bdbdbd",
      hint: "#9e9e9e",
    },
    background: {
      paper: "#fff",
      default: "#f5f5f5",
    },
    action: {
      active: "#2196f3",
      hover: "#e3f2fd",
      hoverOpacity: 0.08,
      selected: "#e3f2fd",
      selectedOpacity: 0.16,
      disabled: "#e0e0e0",
      disabledBackground: "#bdbdbd",
    },
  },

  typography: {
    fontFamily: "Trebuchet MS, sans-serif",
  },
});

export default theme;
