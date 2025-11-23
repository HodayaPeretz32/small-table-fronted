import { useSelector, useDispatch } from "react-redux";
import {Box, Button, Card, IconButton, CardContent, CardMedia, Divider, TextField, Typography} from "@mui/material"
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {increaseQty,decreaseQty,setTip} from "../app/features/cartSlice";
import { useNavigate } from "react-router-dom";
import {useState } from "react";
import Navigation from "../components/layout/Navigation"
import { calculateDeliveryFee, calculateSubtotal, calculateTotal } from "../utils/orderCalculations";

export default function CartPage() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const cartTip = useSelector((state) => state.cart.tip);
  const [tipValue,setTipValue]=useState(cartTip || "");
  const subtotal = calculateSubtotal(cartItems);
  const delivery = calculateDeliveryFee(cartItems);
  const total = calculateTotal(cartItems, cartTip);
  
  const handleAddTip = () =>{
    dispatch(setTip(Number(tipValue)));
  }
  const handleOrderSummary =()=> navigate("/summary");

  return (
  <>
    <Box sx={{width:"100%",mt:2,px:2,display:"flex",flexDirection: "column", }}
    >
        <Typography
          sx={{fontSize: 22,fontWeight: 700,mb: 3,textAlign:"center"}}>
          Cart
        </Typography>

        {cartItems.length === 0 && (
          <Typography sx={{ textAlign: "center", mt: 3, color: "#888" }}>
            Your cart is empty
          </Typography>
        )}

        {cartItems.map((item) => (
          <Card key={item.id}
            sx={{borderRadius: "20px",backgroundColor: "#FFFFFF",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
              display: "flex",alignItems: "center",p: 2,mb: 2,
            }}
          >
            <Box
              component="img"
              src={item.image}
              sx={{width: 70,height: 70,borderRadius: "12px",objectFit: "cover",  mr: 2}}
            />
            <Box sx={{ flexGrow: 1, textAlign: "left" }}>
              <Typography sx={{ fontWeight: 700, fontSize: "16px", mb: "2px" }}>
                {item.name}
              </Typography>

              <Typography sx={{ color: "#868686", fontSize: "10px" }}>
                {item.restaurant}
              </Typography>

              <Typography
                sx={{color: "#8C1C2B",fontWeight: 700,
                  fontSize: "18px",mt: "8px"}}
              >
                $ {item.price}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <IconButton
                onClick={() => dispatch(decreaseQty(item.id))}
                sx={{
                  width: 26,height: 26, borderRadius: "8px",backgroundColor: "#F2F2F2",
                  "& svg": { fontSize: "16px", color: "#6E6E6E" },
                  "&:hover": { backgroundColor: "#540C14" },
                }}
              >
                <RemoveIcon />
              </IconButton>

              <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                {item.qty}
              </Typography>

              <IconButton
                onClick={() => dispatch(increaseQty(item.id))}
                sx={{width: 26,height: 26,borderRadius: "8px",
                  backgroundColor: "#6B0F1A", color: "white",
                  "&:hover": { backgroundColor: "#540C14" },
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>
          </Card>
        ))}

        {/* ADD TIP */}
        <Box sx={{mt:12}}>
        <Typography
          sx={{
            fontSize: "11px",fontWeight: 400,letterSpacing: "0.5px",
            color: "#32343E",mb: "5px",textAlign: "left",}}
        >
          ADD TIP
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 3 ,}}>
          <TextField
            type="number"
            label="Enter amount"
            size="small"
            value={tipValue}
            onChange={(e) => setTipValue(e.target.value)}
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
                borderRadius: "12px",
                backgroundColor: "#F4F6F8",
                height: 46,
              },
            }}
          />

          <Button
            variant="contained"
            sx={{backgroundColor: "#6B0F1A",textTransform: "none",
              borderRadius: "12px", width: 72, height: 46}}
            onClick={handleAddTip}
          > Add</Button>
        </Box>
        </Box>

        {/* Subtotal / Delivery / Total */}
        <Box
          sx={{mb: 3,display: "flex", flexDirection: "column",gap: "15px",mt:3}}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
              Subtotal
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
              $ {subtotal}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
              Delivery Fee
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
              $ {delivery}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between",color: "#691C2B" }}>
            <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
              Total
            </Typography>
            <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
              $ {total}
            </Typography>
          </Box>
      </Box>
    </Box>

       <Box sx={{ width: "100%",mt:7}}>
       <Box
          sx={{backgroundColor: "#691C2B",borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",py: "20px",px: "20px"
          }}
        >
          <Box
            sx={{display: "flex",justifyContent: "space-between",color: "white" }}
          >
            <Box textAlign={"left"}>
              <Typography sx={{ fontSize: "14px" }}>Total</Typography>
              <Typography sx={{ fontSize: "22px", fontWeight: 700 }}>
                ${total}
              </Typography>
            </Box>

            <Button onClick={handleOrderSummary}
              sx={{backgroundColor: "#8C4A54",color: "white",borderRadius: "40px",
                px: 4,py: 1.5,fontWeight: 700,textTransform: "none",
                fontSize: "15px",
                "&:hover": { backgroundColor: "#7A3E48" }
              }}
            >
              Check Out
            </Button>
          </Box>
        </Box>
      </Box>
      <Navigation/>
  </>
);
}
