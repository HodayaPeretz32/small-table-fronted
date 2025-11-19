import { useSelector, useDispatch } from "react-redux";
import {Box, Button, Card, IconButton, CardContent, CardMedia, Divider, TextField, Typography} from "@mui/material"
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {increaseQty,decreaseQty} from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import {useState } from "react";
import { calculateDeliveryFee, calculateSubtotal, calculateTotal } from "../utils/orderCalculations";

export default function CartPage() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const [tip,setTip]=useState("");
  const [appliedTip, setAppliedTip] = useState(0);
  const subtotal = calculateSubtotal(cartItems);
  const delivery = calculateDeliveryFee(cartItems);
  const total = calculateTotal(cartItems, appliedTip);
    
  const handleAddTip = () =>{
    setAppliedTip(Number(tip) || 0);
  }

  const handleOrderSummary =()=> navigate("/summary");

  return (
  <>
    <Box
      sx={{
        maxWidth: 375,mx: "auto",px: "20px",}}
    >
        <Typography
          sx={{fontSize: 22,fontWeight: 700,mb: 3}}>
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
              src={item.img}
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
                  width: 26,height: 26, borderRadius: 2,backgroundColor: "#F2F2F2",
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
                sx={{width: 26,height: 26,borderRadius: 2,
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
        <Box sx={{marginTop:6}}>
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
            value={tip}
            onChange={(e) => setTip(e.target.value)}
            sx={{
              flexGrow: 1,
              mr: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                backgroundColor: "#F4F6F8",
                height: 46,
              },
            }}
          />

          <Button
            variant="contained"
            sx={{backgroundColor: "#6B0F1A",textTransform: "none",
              borderRadius: 3, width: 72, height: 46}}
            onClick={handleAddTip}
          > Add</Button>
        </Box>
        </Box>

        {/* Subtotal / Delivery / Total */}
        <Box
          sx={{mb: 3,display: "flex", flexDirection: "column",gap: "15px",}}
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

<Box sx={{ maxWidth: 375, mx: "auto" }}>
  <Box
    sx={{
      backgroundColor: "#691C2B",borderTopLeftRadius: "30px",
      borderTopRightRadius: "30px",py: "20px",px: "20px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <Box textAlign={"left"}>
        <Typography sx={{ fontSize: "14px" }}>Total</Typography>
        <Typography sx={{ fontSize: "22px", fontWeight: 700 }}> $ {total}</Typography>
      </Box>

      <Button
        onClick={handleOrderSummary}
        sx={{backgroundColor: "#8C4A54",color: "white",borderRadius: "40px",
          px: 4,py: 1.5,fontWeight: 700,
          textTransform: "none",fontSize: "15px",
          "&:hover": { backgroundColor: "#7A3E48" },
        }}
      >
        Check Out
      </Button>
    </Box>
  </Box>
</Box>
  </>
);
}