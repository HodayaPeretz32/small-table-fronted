// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import PackagePopup from "./PackagePopup";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../app/features/cartSlice";
// import muiTheme from "../../theme/muiTheme";
// export default function PackageCard({ pkg }) {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);
//   const [openPopup, setOpenPopup] = useState(false);
//   const [selectedItems, setSelectedItems] = useState({});
//   const [guestCount, setGuestCount] = useState(pkg.min_guests || 1);

//   const isInCart = cartItems.some((item) => item.id === pkg.id);
//   const isCustomizable = pkg.packageCategories && pkg.packageCategories.length > 0;

//   const handleCardClick = () => setOpenPopup(true);

//   const calculateTotalPrice = () => {
//     let extra = 0;
//     pkg.packageCategories?.forEach((cat) => {
//       const selected = selectedItems[cat.id] || [];
//       selected.forEach((itemId) => {
//         const item = cat.items.find((i) => i.id === itemId);
//         if (item?.extra_price_per_person) extra += item.extra_price_per_person;
//       });
//     });
//     return (pkg.price_per_person + extra) * guestCount;
//   };

//   const handleSavePopup = ({ currentSelections, guests }) => {
//     setSelectedItems(currentSelections);
//     setGuestCount(guests);
//     dispatch(addToCart({ ...pkg, currentSelections, guests_count: guests }));
//     setOpenPopup(false);
//   };

//   return (
//     <>
//       <Card
//         tabIndex={0}
//         onClick={handleCardClick}
//         sx={{
//           height: "100px",
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "flex-start",
//           width: "calc(100% - 20px)",
//           m: "8px auto",
//           p: 1.5,
//           borderRadius: 2,
//           cursor: "pointer",
//           transition: "0.2s",
//           backgroundColor: isInCart ? muiTheme.palette.primary.main : "#fff",
//           color: isInCart ? "#fff" : "inherit",
//           '&:hover': { boxShadow: "0 2px 10px rgba(0,0,0,0.1)" },
//         }}
//       >
//         <CardMedia
//           component="img"
//           sx={{ width: 100, height: 100, borderRadius: 2, objectFit: "cover", mr: 2 }}
//           image={pkg.image}
//           alt={pkg.name}
//         />

//         <CardContent sx={{ flex: 1, p: 0 }}>
//           <Typography variant="h6" sx={{ color: isInCart ? "#fff" : "inherit" }}>
//             {pkg.name}
//           </Typography>

//           <Typography variant="body2" sx={{ color: isInCart ? "#fff" : "text.secondary" }}>
//             {pkg.description}
//           </Typography>

//           <Typography variant="body1" sx={{ mt: 0.5, fontWeight: "bold", color: isInCart ? "#fff" : "inherit" }}>
//             סה"כ מחיר: ₪{calculateTotalPrice()}
//           </Typography>
//         </CardContent>
//       </Card>

//       {isCustomizable && (
//         <PackagePopup
//           open={openPopup}
//           onClose={() => setOpenPopup(false)}
//           packageData={{ ...pkg, currentSelections: selectedItems, min_guests: guestCount }}
//           onSave={handleSavePopup}
//         />
//       )}
//     </>
//   );
// }



// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import PackagePopup from "./PackagePopup";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../app/features/cartSlice";
// import muiTheme from "../../theme/muiTheme";

// export default function PackageCard({ pkg }) {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);
//   const [openPopup, setOpenPopup] = useState(false);
//   const [selectedItems, setSelectedItems] = useState({});
//   const [guestCount, setGuestCount] = useState(pkg.min_guests || 1);
//   const [savedPrice, setSavedPrice] = useState(pkg.price_per_person);

//   const isInCart = cartItems.some((item) => item.id === pkg.id);
//   const isCustomizable = pkg.packageCategories && pkg.packageCategories.length > 0;

//   const handleCardClick = () => setOpenPopup(true);

//   const calculateTotalPrice = () => {
//     let extra = 0;
//     pkg.packageCategories?.forEach((cat) => {
//       const selected = selectedItems[cat.id] || [];
//       selected.forEach((itemId) => {
//         const item = cat.items.find((i) => i.id === itemId);
//         if (item?.extra_price_per_person) extra += item.extra_price_per_person;
//       });
//     });
//     return (pkg.price_per_person + extra) * guestCount;
//   };

//   const handleSavePopup = ({ currentSelections, guests, price }) => {
//     setSelectedItems(currentSelections);
//     setGuestCount(guests);
//     setSavedPrice(price);
//     dispatch(addToCart({ ...pkg, currentSelections, guests_count: guests, price }));
//     setOpenPopup(false);
//   };

//   return (
//     <>
//       <Card
//         tabIndex={0}
//         onClick={handleCardClick}
//         sx={{
//           height: "100px",
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "flex-start",
//           width: "calc(100% - 20px)",
//           m: "8px auto",
//           p: 1.5,
//           borderRadius: 2,
//           cursor: "pointer",
//           transition: "0.2s",
//           backgroundColor: isInCart ? muiTheme.palette.primary.main : "#fff",
//           color: isInCart ? "#fff" : "inherit",
//           '&:hover': { boxShadow: "0 2px 10px rgba(0,0,0,0.1)" },
//         }}
//       >
//         <CardMedia
//           component="img"
//           sx={{ width: 100, height: 100, borderRadius: 2, objectFit: "cover", mr: 2 }}
//           image={pkg.image}
//           alt={pkg.name}
//         />

//         <CardContent sx={{ flex: 1, p: 0 }}>
//           <Typography variant="h6" sx={{ color: isInCart ? "#fff" : "inherit" }}>
//             {pkg.name}
//           </Typography>

//           <Typography variant="body2" sx={{ color: isInCart ? "#fff" : "text.secondary" }}>
//             {pkg.description}
//           </Typography>

//           <Typography variant="body1" sx={{ mt: 0.5, fontWeight: "bold", color: isInCart ? "#fff" : "inherit" }}>
//             סה"כ מחיר: ₪{savedPrice}
//           </Typography>
//         </CardContent>
//       </Card>

//       {isCustomizable && (
//         <PackagePopup
//           open={openPopup}
//           onClose={() => setOpenPopup(false)}
//           packageData={{ ...pkg, currentSelections: selectedItems, min_guests: guestCount }}
//           onSave={handleSavePopup}
//         />
//       )}
//     </>
//   );
// }


// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import PackagePopup from "./PackagePopup";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../app/features/cartSlice";
// import muiTheme from "../../theme/muiTheme";

// export default function PackageCard({ pkg }) {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);
//   const [openPopup, setOpenPopup] = useState(false);
//   const [selectedItems, setSelectedItems] = useState({});
//   const [guestCount, setGuestCount] = useState(pkg.min_guests || 1);
//   const [savedPrice, setSavedPrice] = useState((pkg.price_per_person || 0) * (pkg.min_guests || 1));

//   const isInCart = cartItems.some((item) => item.id === pkg.id);
//   const isCustomizable = pkg.packageCategories && pkg.packageCategories.length > 0;

//   const handleCardClick = () => setOpenPopup(true);

//   const calculateTotalPrice = () => {
//     let extra = 0;
//     pkg.packageCategories?.forEach((cat) => {
//       const selected = selectedItems[cat.id] || [];
//       selected.forEach((itemId) => {
//         const item = cat.items.find((i) => i.id === itemId);
//         if (item?.extra_price_per_person) extra += item.extra_price_per_person;
//       });
//     });
//     return (pkg.price_per_person + extra) * guestCount;
//   };

//   const handleSavePopup = ({ currentSelections, guests, price }) => {
//     setSelectedItems(currentSelections);
//     setGuestCount(guests);
//     setSavedPrice(price);
//     dispatch(addToCart({ ...pkg, currentSelections, guests_count: guests, price }));
//     setOpenPopup(false);
//   };

//   return (
//     <>
//       <Card
//         tabIndex={0}
//         onClick={handleCardClick}
//         sx={{
//           height: "100px",
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "flex-start",
//           width: "calc(100% - 20px)",
//           m: "8px auto",
//           p: 1.5,
//           borderRadius: 2,
//           cursor: "pointer",
//           transition: "0.2s",
//           backgroundColor: isInCart ? muiTheme.palette.primary.main : "#fff",
//           color: isInCart ? "#fff" : "inherit",
//           '&:hover': { boxShadow: "0 2px 10px rgba(0,0,0,0.1)" },
//         }}
//       >
//         <CardMedia
//           component="img"
//           sx={{ width: 100, height: 100, borderRadius: 2, objectFit: "cover", mr: 2 }}
//           image={pkg.image}
//           alt={pkg.name}
//         />

//         <CardContent sx={{ flex: 1, p: 0 }}>
//           <Typography variant="h6" sx={{ color: isInCart ? "#fff" : "inherit" }}>
//             {pkg.name}
//           </Typography>

//           <Typography variant="body2" sx={{ color: isInCart ? "#fff" : "text.secondary" }}>
//             {pkg.description}
//           </Typography>

//           <Typography variant="body1" sx={{ mt: 0.5, fontWeight: "bold", color: isInCart ? "#fff" : "inherit" }}>
//             סה"כ מחיר: ₪{savedPrice}
//           </Typography>
//         </CardContent>
//       </Card>

//       {isCustomizable && (
//         <PackagePopup
//           open={openPopup}
//           onClose={() => setOpenPopup(false)}
//           packageData={{ ...pkg, currentSelections: selectedItems, min_guests: guestCount }}
//           onSave={handleSavePopup}
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PackagePopup from "./PackagePopup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/features/cartSlice";
import muiTheme from "../../theme/muiTheme";

export default function PackageCard({ pkg }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [guestCount, setGuestCount] = useState(pkg.min_guests || 1);
  const [savedPrice, setSavedPrice] = useState((pkg.price_per_person || 0) * (pkg.min_guests || 1));

  const isInCart = cartItems.some((item) => item.id === pkg.id);
  const isCustomizable = pkg.packageCategories && pkg.packageCategories.length > 0;

  const handleCardClick = () => setOpenPopup(true);

  const calculateTotalPrice = () => {
    let extra = 0;
    pkg.packageCategories?.forEach((cat) => {
      const selected = selectedItems[cat.id] || [];
      selected.forEach((itemId) => {
        const item = cat.items.find((i) => i.id === itemId);
        if (item?.extra_price_per_person) extra += item.extra_price_per_person;
      });
    });
    return (pkg.price_per_person + extra) * guestCount;
  };

  const handleSavePopup = ({ currentSelections, guests, price }) => {
    setSelectedItems(currentSelections);
    setGuestCount(guests);
    setSavedPrice(price);
    dispatch(addToCart({ ...pkg, currentSelections, guests_count: guests, price }));
    setOpenPopup(false);
  };

  return (
    <>
      <Card
        tabIndex={0}
        onClick={handleCardClick}
        sx={{
          height: isMobile ? "85px" : "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          m: "8px 0",
          p: isMobile ? 1.2 : 1.5,
          borderRadius: 2,
          cursor: "pointer",
          transition: "0.2s",
          backgroundColor: isInCart ? muiTheme.palette.primary.main : "#fff",
          color: isInCart ? "#fff" : "inherit",
          '&:hover': { boxShadow: "0 2px 10px rgba(0,0,0,0.1)" },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: isMobile ? 75 : 100,
            height: isMobile ? 75 : 100,
            borderRadius: 2,
            objectFit: "cover",
            mr: isMobile ? 1 : 2,
            flexShrink: 0,
          }}
          image={pkg.image}
          alt={pkg.name}
        />

        <CardContent sx={{ flex: 1, p: 0 }}>
          <Typography
            variant="h6"
            sx={{
              color: isInCart ? "#fff" : "inherit",
              fontSize: isMobile ? "0.8rem" : "1.25rem",
              fontWeight: "bold",
              lineHeight: 1.2,
            }}
          >
            {pkg.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: isInCart ? "#fff" : "text.secondary",
              fontSize: isMobile ? "0.65rem" : "0.875rem",
              lineHeight: 1.2,
            }}
          >
            {pkg.description}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 0.5,
              fontWeight: "bold",
              color: isInCart ? "#fff" : "inherit",
              fontSize: isMobile ? "0.7rem" : "1rem",
            }}
          >
            סה"כ מחיר: ₪{savedPrice}
          </Typography>
        </CardContent>
      </Card>

      {isCustomizable && (
        <PackagePopup
          open={openPopup}
          onClose={() => setOpenPopup(false)}
          packageData={{ ...pkg, currentSelections: selectedItems, min_guests: guestCount }}
          onSave={handleSavePopup}
        />
      )}
    </>
  );
}