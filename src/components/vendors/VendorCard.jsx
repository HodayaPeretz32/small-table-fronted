import { useNavigate } from "react-router-dom";
import { Card, CardMedia, Typography, Box, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function VendorCard({ vendore }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        mb: 1.2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "all 0.2s",
        aspectRatio: "16 / 5",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          transform: "translateY(-2px)"
        }
      }}
      onClick={() => navigate(`/packages/${vendore.id}`)}
    >
      <CardMedia
        component="img"
        image={vendore.image ||  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"}  // תמונה ברירת מחדל
        alt={vendore.business_name}
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* GRADIENT OVERLAY - צללית מטושטשת */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100%",
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.85) 100%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          p: 2,
          color: "white",
          direction: "rtl",
          backdropFilter: "blur(0.5px)"
        }}
      >
        <IconButton
          sx={{
            bgcolor: "rgba(255,255,255,0.2)",
            color: "white",
            width: "20px",
            height: "20px",
            "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
            flexShrink: 0
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: "10px" }} />
        </IconButton>
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="caption" sx={{ opacity: 0.85, display: "block", mb: 0.5, fontSize: "9px" }}>
            {vendore.kashrut_level || ""}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "14px", lineHeight: 1 }}>
            {vendore.business_name}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}