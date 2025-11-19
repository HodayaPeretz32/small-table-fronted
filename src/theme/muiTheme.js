import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
    palette: {
        primary: {
          main: "#6B0F1A", 
        },
        secondary: {
          main: "#FFFFFF",
        },
      },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

export default muiTheme;