import { Box } from "@mui/material";

export default function GlobalLayout({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: {
          xs: 420, 
          sm: 480,  
          md: 600,  
        },
        margin: "0 auto",
        padding: 2,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
}
