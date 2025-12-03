import {Box,Typography,Card,CardContent,IconButton,Radio,Button,Divider,} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PaymentIcon from "@mui/icons-material/Payment";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { clearCart } from "../../app/features/cartSlice";
import { useState } from "react";
import OrderSuccess from "./OrderSuccess";
  
  export default function PaymentMethod() {

    const [selected, setSelected] = useState("cash");
    const navigate = useNavigate();
    const [showSuccess, setShowSuccess] = useState(false);
    const dispatch = useDispatch();

    const handleBack = () => navigate(-1);

    const handleChange = (value) => {
      //לעדכן כאן בצורה נכונה
      setSelected(value);
      dispatch(clearCart());
    };    
    const handleConfirmPayment = async () => {  
      dispatch(clearCart());
      setShowSuccess(true);
    };
  
    return (
      <>
          {showSuccess && (
         <OrderSuccess
        onClose={() => {
          setShowSuccess(false); 
          navigate("/"); 
        }}
      
        onViewStatus={() => {
          setShowSuccess(false); 
          navigate("/order-status");
        }}
      />
    )}
      <Box
        sx={{width:"100%",mx: "auto", display: "flex",flexDirection: "column",
        gap: 3,mt: 3,px:2}}
        >
        <Box sx ={{display:"flex", alignItems: "center",mb:3}}>
        <IconButton onClick={handleBack}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography sx={{fontWeight: 400}}>Order Summary</Typography>
      </Box>  

      <Box>
        <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 1 ,textAlign:"left"}}>Cash</Typography>
        <Card 
        sx={{borderRadius: "12px",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
            border: "1px solid #F0F0F0",cursor: "pointer",width:"100%",height:45,display: "flex",
            alignItems: "center",justifyContent: "space-between",px: 2,
          }}>
            <Box 
                sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <AccountBalanceWalletIcon sx={{color: "#691C2B" }}/>
                <Typography sx={{ fontWeight: 700}}>Cash</Typography>
              </Box>
              <Radio 
                checked={selected === "cash"}
                onChange={() => handleChange("cash")}
                />
          </Card>
        </Box>
        
        <Box>
        <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 1 ,textAlign:"left"}}>Credit & Debit Card</Typography>
        <Card 
          sx={{borderRadius: "12px",backgroundColor: "#FFFFFF",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
            border: "1px solid #F0F0F0",cursor: "pointer",width: "100%",height: 45,display: "flex",
            alignItems: "center",justifyContent: "space-between",px: 2,
          }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <CreditCardIcon sx={{ color: "#691C2B" }} />
              <Typography sx={{ fontWeight: 700}}>Add Card</Typography>
            </Box>
            <IconButton size="small">
              <ArrowForwardIosIcon sx={{ fontSize: 16, color: "#691C2B" }}/>
            </IconButton>
          </Card>
        </Box>
  
        {/* More Payment Options */}
        <Box>
        <Typography sx={{ fontWeight: 700, fontSize: 14, mb: 1 ,textAlign:"left"}}>More Payment Options</Typography>
          <Box 
          sx={{ display: "flex", flexDirection: "column" }}>
            {[
              { name: "Bit", icon: <PhoneAndroidIcon /> },
              { name: "Google Pay", icon: <GoogleIcon /> },
              { name: "Paytm", icon: <PaymentIcon /> },
            ].map((option) => (
              <Card
                key={option.name}
                sx={{borderRadius: "12px",backgroundColor: "#FFFFFF",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                    border: "1px solid #F0F0F0",cursor: "pointer",width: "100%",height: 45,display: "flex",
                    alignItems: "center",justifyContent: "space-between",px: 2,
                  }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    {option.icon}
                    <Typography sx={{ fontWeight: 700}}>{option.name}</Typography>
                  </Box>
                  <Radio
                    checked={selected === option.name}
                    onChange={() => handleChange(option.name)}
                  />
              </Card>
            ))}
          </Box>
        </Box>
      <Button
        type="submit" variant="contained" fullWidth
        sx={{ borderRadius: "12px", height: 60,
           textTransform: "none", fontWeight: 500,
          "&:hover": { backgroundColor: "#551622" },
        }}
        onClick={handleConfirmPayment}
        >CONFIRM PAYMENT
      </Button>
    </Box>
    </>
    );
  }
  