import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  IconButton
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function VendorCard({ vendore }) {
  return (
    <Link
      to={`/packages?vendorId=${vendore.id}`}
      style={{ textDecoration: "none", display: "block", width: "100%" }}
    >
      <Card
        sx={{
          width: "100%",
          borderRadius: 3,
          overflow: "hidden",
          position: "relative",
          mb: 2,
          boxShadow: 4,
        }}
      >
        <CardMedia
          component="img"
          image={vendore.image}
          alt={vendore.name}
          sx={{
            width: "100%",
            height: 180,
            objectFit: "cover",
          }}
        />

        {/* שכבת טקסט על התמונה */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "rgba(0,0,0,0.45)",
            color: "white",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
              {vendore.day || ""}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {vendore.name}
            </Typography>
          </Box>
          <IconButton
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              color: "white",
              "&:hover": { bgcolor: "rgba(255,255,255,0.4)" },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Card>
    </Link>
  );
}
