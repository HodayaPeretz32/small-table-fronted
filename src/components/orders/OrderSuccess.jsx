import { Box, Typography, Button } from "@mui/material";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";

export default function OrderSuccess({ onClose, onViewStatus }) {
  return (
    <Box sx={{position: "fixed",top: 0,left: 0,width: "100vw",height: "100vh",
        backgroundColor: "rgba(0,0,0,0.3)",backdropFilter: "blur(4px)",  display: "flex", alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      {/* קופסת הפופ-אפ */}
      <Box
        sx={{width: 330, bgcolor: "#FFFFFF",
          borderRadius: "24px",textAlign: "center",
          px: 3,py: 4,boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{width: 95,height: 95,borderRadius: "50%",
            backgroundColor: "#EAD4D8", display: "flex",alignItems: "center",
            justifyContent: "center",mx: "auto",mb: 3,
          }}
        >
          <Box
            sx={{width: 75,height: 75,borderRadius: "50%",
              backgroundColor: "#691C2B", display: "flex",
              alignItems: "center",justifyContent: "center",
            }}
          >
            <ShoppingCartCheckoutRoundedIcon sx={{ color: "#FFFFFF", fontSize: 36 }} />
          </Box>
        </Box>

        <Typography sx={{ fontWeight: 700, fontSize: 20, mb: 1 }}>
          Order Place Successfully
        </Typography>

        <Typography sx={{ fontSize: 14, color: "#A9B1BA", mb: 3 }}>
          You have successfully made order
        </Typography>

        <Button
          variant="contained" fullWidth
          onClick={onViewStatus}
          sx={{
            backgroundColor: "#691C2B",borderRadius: "30px",
            height: 52,textTransform: "none",fontSize: 16,mb: 2,
            "&:hover": { backgroundColor: "#541621" },
          }}
        >
          View Order Status
        </Button>

        <Button
          onClick={onClose}
          sx={{color: "#691C2B", textTransform: "none",
            fontWeight: 600,fontSize: 16,}}
        > Go to Home
        </Button>
      </Box>
    </Box>
  );
}
