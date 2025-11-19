import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, CardContent, Divider, IconButton, Typography } from "@mui/material";

export default function OrderAddressSelection() {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const [selectedId,setSelectedId]=useState(null);

  const iconMap = {
    Home: <HomeRoundedIcon sx={{ color: "white" }} />,
    Office: <BusinessCenterRoundedIcon sx={{ color: "white" }} />,
    Favorites: <FavoriteRoundedIcon sx={{ color: "white" }} />,
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
  const handleAddNew =()=> navigate("/newAddress");

  const handleSelectAddress =(id) =>{
    setSelectedId(id)
    navigate("/paymentMethod")
    //כרגע רק במשתנה יש לשמור את זה בצורה נכונה 
  }

  return (
    <Box   sx={{maxWidth: 375,mx: "auto",mt:-20, px: 10}}>
      <Box sx ={{display:"flex", alignItems: "center",mb:3}}>
        <IconButton onClick={handleBack}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography sx={{fontWeight: 400}}>
          Order Summary
        </Typography>
      </Box>
      <Box sx={{width:335,display: "flex",flexDirection:"column",mx:"auto",gap: "20px"}}>
      {addresses.map((item) => {
          const isSelected = item.id === selectedId;
          return (
            <Box key={item.id} sx={{display:"flex",alignItems:"center",width:335,height:61,mx:"auto",
              backgroundColor: isSelected ? "#F9F5F2" : "white",
              cursor: "pointer",
              transition: "0.2s ease", "&:hover": { backgroundColor: "#fafafa" } }}
             onClick={()=>handleSelectAddress(item.id)}>
              <Avatar sx={{ bgcolor: "#691C2B",color:"#691C2B",width:"30px",height:"30px", mr: "8px" }}>
                {iconMap[item.label]}
              </Avatar>
              <Box sx={{textAlign:"left",px: 1.5,display:"flex",flexDirection: "column", width: "100%",borderBottom: "1px solid #E0E0E0",pb:"10px"}} >
              <Typography fontWeight={600} sx={{lineHeight: "20px",mb:"5px"}}>{item.label}</Typography>
              <Typography color="text.secondary" sx={{fontSize:13,lineHeight: "18px"}}noWrap>{item.address}</Typography>
              </Box>
            </Box>
          );
        })}

        <Button fullWidth variant='outlined' onClick={handleAddNew}
         sx={{height:60,borderRadius:"12px",borderStyle:"dashed",borderWidth:"2px",
          fontWeight:600,textTransform: "none", fontSize:"16px",justifyContent: "center",alignItems:"center",
          "&:hover": {
           backgroundColor: "rgba(105, 28, 43, 0.04)",
           borderColor: "#691C2B",
           },
         }}
        >Add New</Button>
      </Box>
    </Box>
  );
}
