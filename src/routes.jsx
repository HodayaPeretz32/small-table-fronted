// import { useState } from "react";
// import HomePage from "./pages/HomePage";
// import ProfilePage from "./pages/ProfilePage";
// import LoadingPage from "./pages/LoadingPage";
// import PackageDetails from "./components/packages/PackageDetails"; 
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CartPage from "./pages/CartPage";
// import OrderSummary from "./components/orders/OrderSummary";
// import NewAddressForm from "./components/orders/NewAddressForm";
// import PaymentMethod from "./components/orders/PaymentMethod";
// import OrderSuccess from "./components/orders/OrderSuccess";
// import OrderAddressSelection from "./components/orders/OrderAddressSelection";
// import Login from "./components/user/Login";

// export default function AppRoutes() {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <>
//       {/* עמוד הלוגו יוצג מעל הכול כשהאתר טוען */}
//       {isLoading && (
//         <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
//           <LoadingPage />
//         </div>
//       )}

//       {/* עמוד הבית נטען ברקע */}
//       <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s ease" }}>    
//         <Router>
//         <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path="/" element={<HomePage onLoaded={() => setIsLoading(false)} />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/packages/:vendorId" element={<PackageDetails />} />
//         <Route path="/summary" element={<OrderSummary/>} />
//         <Route path="/address" element={<OrderAddressSelection />} />
//         <Route path="/newAddress" element={<NewAddressForm />} />
//         <Route path="/paymentMethod" element={<PaymentMethod />} />
//         <Route path="/OrderSuccess" element={<OrderSuccess />} />
//         </Routes>
//         </Router>
//       </div>
      
//     </>
//   );
// }








































// import { useState } from "react";
// import HomePage from "./pages/HomePage";
// import ProfilePage from "./pages/ProfilePage";
// import LoadingPage from "./pages/LoadingPage";
// import PackageDetails from "./components/packages/PackageDetails"; 
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CartPage from "./pages/CartPage";
// import OrderSummary from "./components/orders/OrderSummary";
// import NewAddressForm from "./components/orders/NewAddressForm";
// import PaymentMethod from "./components/orders/PaymentMethod";
// import OrderSuccess from "./components/orders/OrderSuccess";
// import OrderAddressSelection from "./components/orders/OrderAddressSelection";
// import Login from "./components/user/Login";
// import SignUp from "./components/user/Signup";

// export default function AppRoutes() {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <>
   

//       {/* עמוד הבית נטען ברקע */}
//         <Router>
//         <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/SignUp" element={<SignUp />} />

//         <Route path="/" element={<HomePage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/packages/:vendorId" element={<PackageDetails />} />
//         <Route path="/summary" element={<OrderSummary/>} />
//         <Route path="/address" element={<OrderAddressSelection />} />
//         <Route path="/newAddress" element={<NewAddressForm />} />
//         <Route path="/paymentMethod" element={<PaymentMethod />} />
//         <Route path="/OrderSuccess" element={<OrderSuccess />} />
//         </Routes>
//         </Router>
      
//     </>
//   );
// }


































import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import Login from "./components/user/Login";
import SignUp from "./components/user/SignUp";
import PackageDetails from "./components/packages/PackageDetails";
import OrderSummary from "./components/orders/OrderSummary";
import NewAddressForm from "./components/orders/NewAddressForm";
import PaymentMethod from "./components/orders/PaymentMethod";
import OrderSuccess from "./components/orders/OrderSuccess";
import OrderAddressSelection from "./components/orders/OrderAddressSelection";
import LoadingPage from "./pages/LoadingPage";
import GlobalLayout from "./components/layout/GlobalLayout";

export default function AppRoutes() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* מסך טעינה */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <LoadingPage />
        </div>
      )}

      {/* האפליקציה עצמה */}
      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s ease" }}>
        <GlobalLayout>
          <Routes>
            <Route path="/login" element={<Login onLoaded={() => setIsLoading(false)} />} />
            <Route path="/signup" element={<SignUp onLoaded={() => setIsLoading(false)} />} />
            <Route path="/" element={<HomePage onLoaded={() => setIsLoading(false)} />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/packages/:vendorId" element={<PackageDetails />} />
            <Route path="/summary" element={<OrderSummary />} />
            <Route path="/address" element={<OrderAddressSelection />} />
            <Route path="/newAddress" element={<NewAddressForm />} />
            <Route path="/paymentMethod" element={<PaymentMethod />} />
            <Route path="/OrderSuccess" element={<OrderSuccess />} />
          </Routes>
        </GlobalLayout>
      </div>
    </Router>
  );
}
