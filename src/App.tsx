import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import Routes from "./pages/Routes/Routes";
import theme from './util/Theme/Theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
