// import VendorCard from './VendorCard';
// import { useState, useEffect } from 'react';



// export function useProviders(query = '') {
//   const [providers, setProviders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let cancelled = false;

//     const fetchProviders = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // מדמה קריאת API
//         await new Promise((r) => setTimeout(r, 600));

//         const q = query.trim().toLowerCase();
//         const filtered = MOCK_VENDORS.filter((p) => {
//           if (!q) return true;
//           return (
//             p.business_name.toLowerCase().includes(q) ||
//             p.address.toLowerCase().includes(q) 
//           )
         
//         });

//         if (!cancelled) setProviders(filtered);
//       } catch (e) {
//         if (!cancelled) setError('שגיאה בטעינת ספקים');
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     };

//     fetchProviders();

//     return () => {
//       cancelled = true;
//     };
//   }, [query]);

//   return { providers, loading, error };
// }









// import { Box, CircularProgress } from "@mui/material";

// export default function VendorList({ vendores, loading, error }) {
//   if (error) {
//     return (
//       <Box sx={{ textAlign: "center", color: "error.main", py: 4 }}>
//         {error}
//       </Box>
//     );
//   }

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
//         <CircularProgress color="primary" />
//       </Box>
//     );
//   }

//   if (!vendores?.length) {
//     return (
//       <Box sx={{ textAlign: "center", color: "text.secondary", py: 6 }}>
//         לא נמצאו ספקים
//       </Box>
//     );
//   }

//   return (
//     // <Box sx={{ mb: "23px", px: 2 }}>
//      <Box sx={{ p: 2, width: "calc(100vw - 10.5%)", mb: "23px" }}>
//       {vendores.map((vendore) => (
//         <VendorCard key={vendore.id} vendore={vendore} />
//       ))}
//     </Box>
//   );
// }



// import { Box, CircularProgress } from "@mui/material";
// import VendorCard from './VendorCard';
// import { useVendorList } from "../../app/hooks/useVendorList";

// export default function VendorList({ searchQuery = '' }) {
//   const { providers, loading, error } = useVendorList(searchQuery);

//   if (error) {
//     return (
//       <Box sx={{ textAlign: "center", color: "error.main", py: 4 }}>
//         {error}
//       </Box>
//     );
//   }

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
//         <CircularProgress color="primary" />
//       </Box>
//     );
//   }

//   if (!providers?.length) {
//     return (
//       <Box sx={{ textAlign: "center", color: "text.secondary", py: 6 }}>
//         לא נמצאו ספקים
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ p: 2, width: "calc(100vw - 10.5%)", mb: "23px" }}>
//       {providers.map((vendore) => (
//         <VendorCard key={vendore.id} vendore={vendore} />
//       ))}
//     </Box>
//   );
// }







import VendorCard from './VendorCard';
import { Box, CircularProgress } from "@mui/material";

export default function VendorList({ vendores, loading, error }) {
  if (error) {
    return (
      <Box sx={{ textAlign: "center", color: "error.main", py: 4 }}>
        {error}
      </Box>
    );
  }

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (!vendores?.length) {
    return (
      <Box sx={{ textAlign: "center", color: "text.secondary", py: 6 }}>
        לא נמצאו ספקים
      </Box>
    );
  }

  return (
    <Box sx={{ mb: "23px", px: 2 }}>
      {vendores.map((vendore) => (
        <VendorCard key={vendore.id} vendore={vendore} />
      ))}
    </Box>
  );
}

