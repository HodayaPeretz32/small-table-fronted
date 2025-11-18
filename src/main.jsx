// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// import { ThemeProvider } from "@mui/material";
// import muiTheme from "./theme/muiTheme";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <ThemeProvider theme={muiTheme}>
//       <App />
//     </ThemeProvider>
//   </StrictMode>
// );



import './i18n'; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./app/store";

import { ThemeProvider } from "@mui/material";
import muiTheme from "./theme/muiTheme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
