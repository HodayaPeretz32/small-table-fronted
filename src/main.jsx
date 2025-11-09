import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "@mui/material";
import muiTheme from "./theme/muiTheme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
