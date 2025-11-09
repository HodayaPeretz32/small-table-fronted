
import  { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";


export default function Header({ name = "משתמש" }) {
  const [hour, setHour] = useState(null);

  useEffect(() => {
    const now = new Date();
    setHour(now.getHours());
  }, []);

  const getGreeting = (h) => {
    if (h === null) return ""; 
    if (h < 6) return "לילה טוב";
    if (h < 12) return "בוקר טוב";
    if (h < 18) return "צהריים טובים";
    return "ערב טוב";
  };

  return (
    <Box
      sx={{
        width: "100%",
        px: 2,
        pb: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,

      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1,  position: "absolute", top: 10, right: 16 }}>
        <IconButton aria-label="calendar">
          <CalendarMonthRoundedIcon sx={{ color: "#6C1B3D" }} />
        </IconButton>

        <IconButton aria-label="notifications">
          <NotificationsNoneRoundedIcon sx={{ color: "#6C1B3D" }} />
        </IconButton>
      </Box>

      <Box>
        <Typography variant="subtitle2" sx={{ color: "#666", mb: 0.3 }}>
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 600, color: "#222" }}>
          {getGreeting(hour)}
          {"\u00A0"}
          <Typography component="span" sx={{ fontWeight: 800, color: "#6C1B3D" }}>
            {name}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
