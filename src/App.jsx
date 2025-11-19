import { ThemeProvider } from '@emotion/react';
import './App.css'
import muiTheme from './theme/muiTheme';
import AppRoutes from "./routes";
function App() {
  return (
    <>
    <ThemeProvider theme={muiTheme}>
      <AppRoutes/>
    </ThemeProvider>
    </>
  )
}

export default App
