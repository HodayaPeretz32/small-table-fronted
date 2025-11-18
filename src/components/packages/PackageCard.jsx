// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Checkbox,
//   Box,
//   Button,
// } from "@mui/material";
// import PackagePopup from "./PackagePopup";
// import { usePackageCard } from "../../app/hooks/usePackageCard";

// export default function PackageCard({ pkg, selectedPackages, setSelectedPackages }) {
//   const { openPopup, setOpenPopup, handleChange, handleKeyDown, isCustomizable } = 
//     usePackageCard(pkg, selectedPackages, setSelectedPackages);

//   return (
//     <>
//       <Card
//         tabIndex={0}
//         onKeyDown={handleKeyDown}
//         sx={{
//           height: "100px",
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "flex-start",
//           width: "100%",
//           m: "8px auto",
//           p: 1.5,
//           border: selectedPackages.includes(pkg.id)
//             ? "2px solid #1976d2"
//             : "1px solid #ccc",
//           borderRadius: 2,
//           cursor: "pointer",
//           transition: "0.2s",
//           '&:hover': { boxShadow: "0 2px 10px rgba(0,0,0,0.1)" },
//           '&:focus': { boxShadow: '0 0 0 3px rgba(21,156,228,0.4)' },
//         }}
//       >
//         <CardMedia
//           component="img"
//           sx={{
//             width: 100,
//             height: 100,
//             borderRadius: 2,
//             objectFit: "cover",
//             mr: 2,
//           }}
//           image={pkg.image}
//           alt={pkg.name}
//         />

//         <CardContent sx={{ flex: 1, p: 0 }}>
//           <Typography variant="h6">{pkg.name}</Typography>
//           <Typography variant="body2" color="text.secondary">
//             {pkg.description}
//           </Typography>
//           <Typography variant="body1" sx={{ mt: 0.5, fontWeight: "bold" }}>
//             ₪{pkg.price}
//           </Typography>

//           {isCustomizable && (
//             <Button
//               variant="outlined"
//               size="small"
//               sx={{ mt: 1, textTransform: "none" }}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setOpenPopup(true);
//               }}
//             >
//               התאמה אישית
//             </Button>
//           )}
//         </CardContent>

//         <Box sx={{ ml: 2 }}>
//           <Checkbox
//             checked={selectedPackages.includes(pkg.id)}
//             onChange={handleChange}
//             inputProps={{ "aria-label": `בחר חבילה ${pkg.name}` }}
//           />
//         </Box>
//       </Card>

//       {isCustomizable && (
//         <PackagePopup
//           open={openPopup}
//           onClose={() => setOpenPopup(false)}
//           packageData={pkg}
//         />
//       )}
//     </>
//   );
// }





import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Checkbox,
  Box,
  Button,
} from "@mui/material";
import PackagePopup from "./PackagePopup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../app/features/cartSlice";

export default function PackageCard({ pkg }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [openPopup, setOpenPopup] = useState(false);

  const isInCart = cartItems.some((item) => item.id === pkg.id);

  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    if (isInCart) {
      dispatch(removeFromCart(pkg.id));
    } else {
      dispatch(addToCart(pkg));
    }
  };

  const isCustomizable = pkg.packageCategories && pkg.packageCategories.length > 0;

  return (
    <>
      <Card
        tabIndex={0}
        sx={{
          height: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          m: "8px auto",
          p: 1.5,
          border: isInCart ? "2px solid #1976d2" : "1px solid #ccc",
          borderRadius: 2,
          cursor: "pointer",
          transition: "0.2s",
          '&:hover': { boxShadow: "0 2px 10px rgba(0,0,0,0.1)" },
          '&:focus': { boxShadow: '0 0 0 3px rgba(21,156,228,0.4)' },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 100,
            height: 100,
            borderRadius: 2,
            objectFit: "cover",
            mr: 2,
          }}
          image={pkg.image}
          alt={pkg.name}
        />

        <CardContent sx={{ flex: 1, p: 0 }}>
          <Typography variant="h6">{pkg.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {pkg.description}
          </Typography>
          <Typography variant="body1" sx={{ mt: 0.5, fontWeight: "bold" }}>
            ₪{pkg.price}
          </Typography>

          {isCustomizable && (
            <Button
              variant="outlined"
              size="small"
              sx={{ mt: 1, textTransform: "none" }}
              onClick={(e) => {
                e.stopPropagation();
                setOpenPopup(true);
              }}
            >
              התאמה אישית
            </Button>
          )}
        </CardContent>

        <Box sx={{ ml: 2 }}>
          <Checkbox
            checked={isInCart}
            onChange={handleCheckboxChange}
            inputProps={{ "aria-label": `בחר חבילה ${pkg.name}` }}
          />
        </Box>
      </Card>

      {isCustomizable && (
        <PackagePopup
          open={openPopup}
          onClose={() => setOpenPopup(false)}
          packageData={pkg}
          onSave={(customSelections) => {
            // שמירה של ההתאמות האישיות בתוך הסל
            dispatch(addToCart({ ...pkg, currentSelections: customSelections }));
            setOpenPopup(false);
          }}
        />
      )}
    </>
  );
}

