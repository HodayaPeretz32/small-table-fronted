import { TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function VendorFilter({ onSearch }) {
  return (
    <Box
      sx={{
        width:"calc(100vw - 10.5%)", // כל רוחב המסך
        px: 2, // רווח קטן מהצדדים
        mt: 4,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="חפש לפי עיר או סוג אירוע..."
        onChange={(e) => onSearch(e.target.value)}
        dir="rtl"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "grey.500", fontSize: 23 }} />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "7px",
            backgroundColor: "#f7f7f7",
            height: "60px",
            fontSize: "0.9rem",
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root fieldset": {
            border: "none",
          },
        }}
      />
    </Box>
  );
}
