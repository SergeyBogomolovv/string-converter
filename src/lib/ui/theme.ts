import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#828282",
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
          fontWeight: 600,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 16,
          fontWeight: 600,
          fontSize: 16,
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
