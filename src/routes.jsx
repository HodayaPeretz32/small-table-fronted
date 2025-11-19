import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import OrderSummary from "./components/orders/OrderSummary";
import NewAddressForm from "./components/orders/NewAddressForm";
import PaymentMethod from "./components/orders/PaymentMethod";
import OrderSuccess from "./components/orders/OrderSuccess";
import OrderAddressSelection from "./components/orders/OrderAddressSelection";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/summary" element={<OrderSummary/>} />
        <Route path="/address" element={<OrderAddressSelection />} />
        <Route path="/newAddress" element={<NewAddressForm />} />
        <Route path="/paymentMethod" element={<PaymentMethod />} />
        <Route path="/OrderSuccess" element={<OrderSuccess />} />
      </Routes>
    </Router>
  );
}
