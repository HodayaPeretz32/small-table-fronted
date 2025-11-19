import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: "20px 20px 0 0",
        overflow: "hidden",
        zIndex: 10,
      }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="home"
          value="/"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="cart"
          value="/cart"
          icon={<ShoppingCartIcon />}
        />
        <BottomNavigationAction
          label="profile"
          value="/profile"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
