import { createTheme } from "@mui/material/styles";
import themeConfig from "./themeConfig";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: themeConfig.colors.primary,
    },
    secondary: {
      main: themeConfig.colors.secondary,
    },
    text: {
      primary: themeConfig.colors.text,
    },
    background: {
      default: themeConfig.colors.background,
    },
  },
  typography: {
    fontFamily: themeConfig.fontFamily,
  },
  shape: {
    borderRadius: themeConfig.borderRadius,
  },
  components: {
    // כאן אפשר להגדיר עיצובים גלובליים לרכיבים של MUI
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: themeConfig.borderRadius,
          textTransform: "none", // מבטל אותיות גדולות אוטומטית
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: themeConfig.borderRadius,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

export default muiTheme;

