import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#efefef",
      paper: "#ffffff",
    },
    text: {
      primary: "#2e2e2e",
      secondary: "#555555",
    },
    primary: {
      main: "#2884FF",
    },
    secondary: {
      main: "#A66FF0",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h2: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
