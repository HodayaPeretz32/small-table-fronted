
import { ThemeProvider } from '@emotion/react';
import './App.css'
// import CartPage from "./pages/CartPage";
// import OrderSummaryPage from "./pages/OrderSummaryPage";
// import CheckoutPage from "./components/orders/CheckoutPage"
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
