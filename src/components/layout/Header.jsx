import { useEffect, useState } from "react";
import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LoginIcon from "@mui/icons-material/Login"; // אייקון התחברות
import { useNavigate } from "react-router-dom";
import muiTheme from "../../theme/muiTheme";

export default function Header({ name = "משתמש" }) {
  const [hour, setHour] = useState(null);
  const navigate = useNavigate();

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
        gap: 1
      }}
    >
      {/* ICONS - ABSOLUTE RIGHT */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
          position: "absolute",
          top: 10,
          right: 16
        }}
      >
        <IconButton aria-label="calendar">
          <CalendarMonthRoundedIcon sx={{ color: "#6C1B3D" }} />
        </IconButton>

        <IconButton aria-label="notifications">
          <NotificationsNoneRoundedIcon sx={{ color: "#6C1B3D" }} />
        </IconButton>

        {/* LOGIN/SIGNUP ICON עם Tooltip */}
        <Tooltip title="התחברות / הרשמה" arrow placement="bottom">
          <IconButton
            aria-label="login-signup"
            onClick={() => navigate("/login")} // או /signup לפי הצורך
          >
            <LoginIcon sx={{ color: "#6C1B3D" }} />
          </IconButton>
        </Tooltip>
      </Box>

      {/* LOCATION */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 3 }}>
        <LocationOnRoundedIcon sx={{ fontSize: "18px", color: "#6C1B3D" }} />
        <Box>
          <Typography
            variant="caption"
            sx={{ color: "#000", display: "block", fontSize: "15px", lineHeight: 1 }}
          >
            Location
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "13px", color: "#000" }}>
              ישראל
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "#000" }}>▼</Typography>
          </Box>
        </Box>
      </Box>

      {/* GREETING */}
     <Box>
  <Typography
    variant="h6"
    sx={{
      fontWeight: 600,
      color: "#222",
      position: "absolute",
      top: 70,
      right: 16,
      direction: "rtl",
      textAlign: "right"
    }}
  >
    היי {name},{" "}
    <Typography
      component="span"
      sx={{
        color: "primary.main",
        fontWeight: 700,
        direction: "ltr" // שם באנגלית יוצג נכון
      }}
    >
      {getGreeting(hour)}
    </Typography>
  </Typography>
</Box>

    </Box>
  );
}
