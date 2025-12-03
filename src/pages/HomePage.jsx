import { useState, useEffect } from "react";
import Navigation from "../components/layout/Navigation";
import VendorFilter from "../components/vendors/VendorFilter";
import VendorList from "../components/vendors/VendorList";
import { useVendorList } from "../app/hooks/useVendorList";
import { Box } from "@mui/material";
import Header from "../components/layout/Header";

export default function HomePage({ onLoaded }) {
  const [searchQuery, setSearchQuery] = useState("");
  const { providers: vendors, loading, error } = useVendorList(searchQuery);
  const [minimumDelayPassed, setMinimumDelayPassed] = useState(false);
  const [username, setUsername] = useState("משתמש"); // ברירת מחדל

  // נוודא שהלוגו יוצג לפחות שניה
  useEffect(() => {
    const timer = setTimeout(() => setMinimumDelayPassed(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // קריאת שם המשתמש מ-localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) setUsername(storedName);
  }, []);

  // כשטעינת הנתונים הסתיימה וגם הדקה המינימלית חלפה — נסמן שהלוגו יכול להיעלם
  useEffect(() => {
    if (!loading && minimumDelayPassed && onLoaded) {
      onLoaded();
    }
  }, [loading, minimumDelayPassed, onLoaded]);

  return (
    <div className="">
      <main>
        <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, bgcolor: "white" }}>
          <Header name={username} />
          <VendorFilter onSearch={setSearchQuery} />
        </Box>
        <Box sx={{ pb: 8, mt: 21 }}>
          <VendorList vendores={vendors} loading={loading} error={error} />
        </Box>
        <Navigation />
      </main>
    </div>
  );
}
