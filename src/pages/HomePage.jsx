import { useState, useEffect } from "react";
import Navigation from "../components/layout/Navigation";
import VendorFilter from "../components/vendors/VendorFilter";
import VendorList from "../components/vendors/VendorList";
import { useProviders } from "../components/vendors/VendorList";
import { Box } from "@mui/material";
import Header from "../components/layout/Header";
export default function HomePage({ onLoaded }) {
  const [searchQuery, setSearchQuery] = useState("");
  const { providers: vendors, loading, error } = useProviders(searchQuery);

  // ברגע שהטעינה האמיתית הסתיימה — נסמן לאפליקציה להסתיר את הלוגו
  useEffect(() => {
    if (!loading && onLoaded) {
      onLoaded();
    }
  }, [loading, onLoaded]);

  return (
    <div className="">
      <main>
        <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,bgcolor:"white"}}>
        <Header name="חני" />
        <VendorFilter onSearch={setSearchQuery} />
        </Box>
        <Box sx={{ pb: 8,mt:21 }}>
        <VendorList vendores={vendors} loading={loading} error={error} />
        </Box>
        <Navigation />
      </main>
    </div>
  );
}
