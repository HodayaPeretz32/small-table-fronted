import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, CardContent, IconButton, Typography } from "@mui/material";

export default function OrderAddressSelection() {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const [selectedId,setSelectedId]=useState(null);

  const iconMap = {
    Home: <HomeIcon sx={{ color: "#6B0F1A" }} />,
    Office: <BusinessIcon sx={{ color: "#6B0F1A" }} />,
    Favorites: <FavoriteIcon sx={{ color: "#6B0F1A" }} />,
  };

  // דוגמת קריאה לשרת (כרגע נתוני דמה)
  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        label: "Home",
        address: "PV2M+H46, No.8, Residency Area, 200 Road",
      },
      {
        id: 2,
        label: "Office",
        address: "Sapphire House, 402 A, B, C, Sapna Sangeeta",
      },
      {
        id: 3,
        label: "Favorites",
        address: "New York",
      },
    ];
    setAddresses(dummyData);
  }, []);

  const handleBack = () => navigate(-1);
  const handleAddNew =()=> navigate("/checkout");

  const handleSelectAddress =(id) =>{
    setSelectedId(id);
    //כרגע רק במשתנה יש לשמור את זה בצורה נכונה 
  }

  const handleContinue=()=>{
    if(selectedId) navigate("/checkout")
  }

  return (
    <Box   sx={{
      maxWidth: 360,
      mx: "auto",
      mt: 3,
      px: 2    }}>
      <Box sx ={{display:"flex", alignItems: "center",mb:3}}>
        <IconButton onClick={handleBack}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography sx={{fontWeight: 400}}>
          Order Summary
        </Typography>
      </Box>
      <Box sx={{width:335,display: "flex",flexDirection:"column",gap:"48px",mx:"auto"}}>
      {addresses.map((item) => {
          const isSelected = item.id === selectedId;
          return (
            <card key={item.id} sx={{display:"flex",alignItems:"center",  boxShadow: "none",
              border: isSelected
                ? "2px solid #6B0F1A"
                : "1px solid #E0E0E0",
              backgroundColor: isSelected ? "#F9F5F2" : "white",
              cursor: "pointer",
              transition: "0.2s ease"}}
             onClick={()=>handleSelectAddress(item.id)}>
              <Avatar>
                {iconMap[item.label]}
              </Avatar>
              <CardContent>
              <Typography fontWeight={600}>{item.label}</Typography>
              <Typography>{item.address}</Typography>
              </CardContent>
            </card>
          );
        })}

        <Button fullWidth onClick={handleAddNew}>Add New</Button>


      </Box>

    </Box>
   
  );
}
