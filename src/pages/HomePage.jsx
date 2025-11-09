
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
//מציג את הלוגו עד שהטעינה מסתיימת
  useEffect(() => {
    if (!loading && onLoaded) {
      onLoaded();
    }
  }, [loading, onLoaded]);

  return (
    <div className="">
      <main>
        <Header name="חני" />
        <VendorFilter onSearch={setSearchQuery} />
        <Box sx={{ pb: 8 }}>
        <VendorList vendores={vendors} loading={loading} error={error} />
        </Box>
        <Navigation />
      </main>
    </div>
  );
}
