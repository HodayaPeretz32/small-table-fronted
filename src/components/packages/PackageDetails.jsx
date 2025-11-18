// import { Box, Typography, Button } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import PackageCard from "./PackageCard";
// import { usePackageDetails } from "../../app/hooks/usePackageDetails";

// export default function PackageDetails() {
//   const { vendor, selectedPackages, setSelectedPackages, navigate } = usePackageDetails();

//   if (!vendor) {
//     return <Typography>לא נמצאו חבילות לספק זה</Typography>;
//   }

//   return (
//     <Box sx={{ p: 3 }}>
//       <Button
//         onClick={() => navigate("/")}
//         sx={{
//           mb: 2,
//           textTransform: "none",
//           fontWeight: 500,
//           color: "black",
//           display: "flex",
//           alignItems: "center",
//           gap: 1,
//           background: "transparent",
//           boxShadow: "none",
//           "&:hover": { backgroundColor: "transparent" },
//         }}
//       >
//         <Box
//           sx={{
//             backgroundColor: "#f5f5f5",
//             borderRadius: "50%",
//             width: 32,
//             height: 32,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <ArrowBackIcon fontSize="small" />
//         </Box>
//         <Typography sx={{ fontSize: "16px" }}>חזור</Typography>
//       </Button>

//       <Typography variant="h5" sx={{ mb: 2, direction: "rtl", textAlign: "right" }}>
//         {vendor.vendorName} – רשימת חבילות
//       </Typography>

//       <Box sx={{ display: "flex", flexWrap: "wrap" }}>
//         {vendor.packages.map((pkg) => (
//           <PackageCard
//             key={pkg.id}
//             pkg={pkg}
//             selectedPackages={selectedPackages}
//             setSelectedPackages={setSelectedPackages}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// }
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PackageCard from "./PackageCard";
import { usePackageDetails } from "../../app/hooks/usePackageDetails";

export default function PackageDetails() {
  const { vendor, navigate } = usePackageDetails();

  if (!vendor) {
    return <Typography>לא נמצאו חבילות לספק זה</Typography>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Button
        onClick={() => navigate("/")}
        sx={{
          mb: 2,
          textTransform: "none",
          fontWeight: 500,
          color: "black",
          display: "flex",
          alignItems: "center",
          gap: 1,
          background: "transparent",
          boxShadow: "none",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: "50%",
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowBackIcon fontSize="small" />
        </Box>
        <Typography sx={{ fontSize: "16px" }}>חזור</Typography>
      </Button>

      <Typography variant="h5" sx={{ mb: 2, direction: "rtl", textAlign: "right" }}>
        {vendor.vendorName} – רשימת חבילות
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {vendor.packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </Box>
    </Box>
  );
}
