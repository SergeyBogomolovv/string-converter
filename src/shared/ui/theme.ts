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
    divider: "#e0e0e0",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#828282",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "2rem",
    },
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
    borderRadius: 8,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 16,
          fontWeight: 700,
        },
        contained: {
          backgroundColor: "#fff",
          color: "#000",
        },
      },
    },
  },
});

export default theme;
