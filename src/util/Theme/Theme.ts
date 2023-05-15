import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"Inter", "sans-serif", "Arial"`,
    fontSize: 12,
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
      marginBottom: "1.5rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: "2.5rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
    },
    caption: {
      fontWeight: 300,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },
});

export default theme;
