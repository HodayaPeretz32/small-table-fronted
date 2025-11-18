import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import LoadingPage from "./pages/LoadingPage";
import PackageDetails from "./components/packages/PackageDetails"; 

export default function AppRoutes() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* עמוד הלוגו יוצג מעל הכול כשהאתר טוען */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <LoadingPage />
        </div>
      )}

      {/* עמוד הבית נטען ברקע */}
      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s ease" }}>        <Routes>
          <Route path="/" element={<HomePage onLoaded={() => setIsLoading(false)} />} />
           <Route path="/profile" element={<ProfilePage />} />
           <Route path="/cart" element={<CartPage />} />
            <Route path="/packages/:vendorId" element={<PackageDetails />} />
        </Routes>
      </div>
      
    </>
  );
}
