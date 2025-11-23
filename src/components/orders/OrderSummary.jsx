import {Box, Button, Card, CardContent, CardMedia, Divider, IconButton, TextField, Typography} from "@mui/material"
import { useState } from "react";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { calculateDeliveryFee, calculateSubtotal, calculateTotal } from "../../utils/orderCalculations";
import { setTip } from "../../app/features/cartSlice";
import { useDispatch } from "react-redux";

  export default function OrderSummary() {

    const cartItems = useSelector((state) => state.cart.items);
    const cartTip = useSelector((state) => state.cart.tip);
    const [tipValue,setTipValue]=useState(cartTip || "");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const subtotal = calculateSubtotal(cartItems);
    const delivery = calculateDeliveryFee(cartItems);
    const total = calculateTotal(cartItems, cartTip);
    const handleAddTip = () => {
      dispatch(setTip(Number(tipValue) || 0));
    };

  const handleBack = () => navigate(-1);
  const handleOrderNow = () => {navigate("/address");};

  const firstImage = cartItems[0]?.image;
  const firstTitle = "My Order";


    return(
        <Box sx={{width:"100%",mx:"auto",mt:2,gap:3}}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <IconButton size="small" onClick={handleBack}>
            <ArrowBackIosNewIcon />
            </IconButton>

            <Typography variant="h6" fontWeight="bold" sx={{ml:1}} >Order Summary</Typography>
          </Box>
            <Card sx={{width: "100%",borderRadius: "16px", boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",mb:3,textAlign:"left" ,overflow: "hidden"}}>
                <CardMedia component="img" src={firstImage} alt={firstTitle} 
                 sx={{width: "100%",height: 160,objectFit:"cover",borderRadius: "16px 16px 0 0",mb:2}} 
                />
                <CardContent sx={{ p: 2 }}>
                  <Typography sx={{fontWeight: 600,fontSize: 16,mb: 1}}>
                    {firstTitle}</Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                       {cartItems.map((item) => (
                   <Typography
                      key={item.id}
                      sx={{fontSize: 12,color: "#8E8E93",mb:0.3}}
                    >
                     {item.name}
                   </Typography>
             ))}
          </Box>
        </CardContent>
      </Card>

        {/* PRICE SECTION */}
            <Box sx={{ width: "100%", mb: 3 }}>
             <Box sx={{ display: "flex", justifyContent: "space-between", mb:2 }}>
               <Typography sx={{fontSize:14}}>Subtotal</Typography>
             <Typography sx={{fontSize:14}}>${subtotal}</Typography>
            </Box>
           <Box sx={{display: "flex", justifyContent: "space-between", mb:2 }}>
              <Typography sx={{fontSize:14}}>Delivery Fee</Typography>
              <Typography sx={{fontSize:14}}>${delivery}</Typography>
             </Box>
             <Box sx={{display: "flex", justifyContent: "space-between", mb:2,color:"#691C2B"}}>
               <Typography sx={{fontSize:15,fontWeight:600}}>Total</Typography>
               <Typography sx={{fontSize:15,fontWeight:600 }}>${total}</Typography>
             </Box>
           </Box>

        { /* ADD TIP*/}
           <Typography sx={{fontSize: "11px",fontWeight: 400,letterSpacing: "0.5px",color: "#32343E",mb: "5px",textAlign:"left"}}>
           ADD TIP
           </Typography>
           <Box sx={{ display:"flex", alignItems:"center",mb:3}}>
             <TextField type="number" label="Enter amount"
              value={tipValue}
              onChange={(e)=>setTipValue(e.target.value)}
               inputProps={{
                min: 0,
                step: "5"
              }}
              onKeyDown={(e) => {
                if (e.key === "-" )e.preventDefault();
              }}
              sx={{
                flexGrow: 1,
                mr: 1,
                "& .MuiOutlinedInput-root": {
                  height: 48,
                  backgroundColor: "#F4F6F8",
                  borderRadius: "12px",
                },
              }}/>
            <Button variant="contained"
             sx={{backgroundColor:"#6B0F1A",borderRadius:"12px", width: 72, height: 46,fontSize:14, textTransform: "none",
              "&:hover": { backgroundColor: "#520B13",}
             }}
             onClick={handleAddTip}
             >
              Add
            </Button>
           </Box>
           {/* ACTION BUTTONS */}
           <Box sx={{display:"flex",gap:2,mt:5}}>
            <Button fullWidth variant="outlined"
             sx={{ borderRadius:"12px",color: "#6B0F1A",borderColor: "#6B0F1A",fontWeight:600,height:62,fontSize: 16, textTransform: "none"}}>
             Add to Card
            </Button>

            <Button fullWidth variant="contained"
             onClick={handleOrderNow}
             sx={{borderRadius:"12px",backgroundColor: "#6B0F1A",fontWeight: 600,height:62,fontSize: 16, textTransform: "none",
              "&:hover": { backgroundColor: "#520B13" }
              }}>
              Order Now
            </Button>
           </Box>
        </Box>
    );
  }
