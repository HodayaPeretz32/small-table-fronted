import {Box, Button, Card, CardContent, CardMedia, Divider, TextField, Typography} from "@mui/material"
import image from "../../assets/Frame 11712759421.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

  export default function OrderSummary() {
    
    const addOns = [
      { id: 1, name: "Moong Dal Halwa", size: "8 Oz", price: 9, img: "/images/halwa1.jpg" },
      { id: 2, name: "Monday Day 01", size: "20 Oz njn", price: 16, img: "/images/halwa2.jpg" },
      { id: 3, name: "Gajar Ka Halwa", size: "16 Oz", price: 16, img: "/images/gajar.jpg" },
      { id: 4, name: "Dahi Bhalla", size: "24 Oz", price: 15, img: "/images/dahi.jpg" },
    ];

    const subtotal = 14;
    const delivery = 1;
    const [tip,setTip]=useState("");
    const [total,setTotal]=useState(subtotal + delivery);
    const navigate = useNavigate();

    const handleAddTip = () =>{
      const newTotal=subtotal + delivery +(Number(tip)||0);
      setTotal(newTotal)
    }

    const handleOrderNow = () => {
      navigate("/checkout");
      console.log("njknk");
    };


    return(
        <Box sx={{maxWidth:375 ,margin:"0 auto",padding:2}}>
          {/* <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <IconButton size="small">
            <ArrowBackIosNewIcon />
            </IconButton>
            <Typography variant="h6" fontWeight="bold" sx={{ml:1}} >order Summary</Typography>
          </Box> */}
            <Card sx={{borderRadius: 2, boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",mb:3,textAlign:"left" ,overflow: "hidden",width:"335px"}}>
                <CardMedia  sx={{height: 140,objectFit:"cover",borderRadius: 4 ,mx:"auto",mt:1.5}} component="img" image={image} alt="dish"
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">{addOns[1].name}</Typography>
                  <Typography variant="body2" color="#9DB2BF" >{addOns[1].size}</Typography>
                  <Typography variant="body2" color="#9DB2BF">{addOns[1].price}</Typography>
                  <Typography variant="body2" color="#9DB2BF">{addOns[1].price}$</Typography>
                </CardContent>
            </Card>
            
            <Box sx={{ mb:3 ,color:"#691C2B",display:"flex",flexDirection: "column", gap:"15px",width:"334.05px",letterSpacing: "0.5px"}}>
            <Box sx={{ display: "flex", justifyContent: "space-between", gap:1.2 }}>
              <Typography sx={{fontSize:"14px",fontWeight:500}}>Subtotal</Typography>
              <Typography sx={{fontSize:"14px",fontWeight:500}}>${subtotal}</Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between", gap:1.2 }}>
              <Typography sx={{fontSize:"14px",fontWeight:500}}>Delivery Fee</Typography>
              <Typography sx={{fontSize:"14px",fontWeight:500}}>${delivery}</Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between",letterSpacing: "0.64px"}}>
              <Typography sx={{fontSize:"15px",fontWeight:600}}>Total</Typography>
              <Typography sx={{fontSize:"15px",fontWeight:600}}>${total}</Typography>
            </Box>
            </Box>

           { /* ADD TIP*/}
           <Typography sx={{fontSize: "11px",fontWeight: 400,letterSpacing: "0.5px",color: "#32343E",mb: "5px",textAlign:"left"}}>
            ADD TIP
           </Typography>
           <Box sx={{ display:"flex", alignItems:"center",mb:3}}>
            <TextField type="number" label="Enter amount"
             variant="outlined" size="small" value={tip}
               inputProps={{
                min: 0,
                step: "5"
              }}
              onKeyDown={(e) => {
                if (e.key === "-" )e.preventDefault();
              }}
             onChange={(e)=>setTip(e.target.value)}
             sx={{flexGrow:1, mr:1, "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              backgroundColor: "#F4F6F8",
              width:252,height:46
            },}}/>
            <Button variant="contained"
             sx={{backgroundColor:"#6B0F1A", borderRadius:2,px:2,width:72,height:46,
              "&:hover": { backgroundColor: "#520B13" }
             }}
             onClick={handleAddTip}
             >
              Add
            </Button>
           </Box>
           {/* ACTION BUTTONS */}
           <Box sx={{display:"flex",gap:2}}>
            <Button fullWidth variant="outlined"
             sx={{ borderRadius:"12px",color: "#6B0F1A",borderColor: "#6B0F1A",fontWeight:700,width:157.5,height:62}}>
             Add to Card
            </Button>
            <Button fullWidth variant="contained"
             onClick={handleOrderNow}
             sx={{borderRadius:"12px",backgroundColor: "#6B0F1A",fontWeight: 700,width:157.5,height:62,
              "&:hover": { backgroundColor: "#520B13" }
              }}>
              Order Now
            </Button>
           </Box>
        </Box>
    );
  }
  