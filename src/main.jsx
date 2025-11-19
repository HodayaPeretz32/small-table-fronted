import './i18n'; 
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ThemeProvider } from "@mui/material";
import muiTheme from "./theme/muiTheme";
// import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
