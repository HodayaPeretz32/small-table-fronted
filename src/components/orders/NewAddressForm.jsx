import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function NewAddressForm() {
  const {register,handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Data:", data)
    navigate("/paymentMethod")
    // כאן תתבצע שליחה לשרת
  };

  const handleBack = () => navigate(-1);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{width: 335,margin: "0 auto",mt: 4,display: "flex",flexDirection: "column",gap: 2.5,}}
    >
      <Box sx ={{display:"flex", alignItems: "center",mb:3}}>
        <IconButton onClick={handleBack}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography sx={{fontWeight: 400}}>
          Order Summary
        </Typography>
      </Box>

      <TextField label="Name for the Order*" variant="outlined" fullWidth
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
        InputLabelProps={{
            sx: {
              fontWeight: 500, color: "#ADA4A5",},
        }}
        InputProps={{
          sx: {backgroundColor: "#F7F8F8", borderRadius: "12px",height: 66,
            "& fieldset": { border: "none" },},
        }}
      />

      <TextField label="Phone Number*" type="tel" variant="outlined" fullWidth
        {...register("phone", {required: "Phone is required",
          pattern: {
            value: /^[0-9]{9,10}$/,
            message: "Invalid phone number",
          },
        })}
        onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        InputLabelProps={{
            sx: {
              fontWeight: 500, color: "#ADA4A5",},
        }}
        InputProps={{
          sx: {backgroundColor: "#F7F8F8",borderRadius: "12px",height: 66,
            "& fieldset": { border: "none" },
          },
        }}
      />

      <TextField label="Email id*" type="email" variant="outlined" fullWidth
        {...register("email", {required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
        InputLabelProps={{
            sx: {
              fontWeight: 500, color: "#ADA4A5",},
        }}
        InputProps={{
          sx: {backgroundColor: "#F7F8F8",borderRadius: "12px",height: 66,
            "& fieldset": { border: "none" }, },
        }}
      />

      <TextField
        label="Address 1*" variant="outlined" fullWidth
        {...register("address1", { required: "Address is required" })}
        error={!!errors.address1}
        helperText={errors.address1?.message}
        InputLabelProps={{
            sx: {
              fontWeight: 500, color: "#ADA4A5",},
        }}
        InputProps={{
          sx: { backgroundColor: "#F7F8F8",borderRadius: "12px",height: 66,
            "& fieldset": { border: "none" },},
        }}
      />

      <TextField label="Address 2*" variant="outlined" fullWidth
        {...register("address2", { required: "Address is required" })}
        error={!!errors.address2}
        helperText={errors.address2?.message}
        InputLabelProps={{
            sx: {
              fontWeight: 500, color: "#ADA4A5",},
        }}
        InputProps={{
          sx: {backgroundColor: "#F7F8F8",borderRadius: "12px",height: 66,
            "& fieldset": { border: "none" }, },
        }}
      /> 

     <TextField label="City*" variant="outlined" fullWidth
        {...register("City", { required: "City is required" })}
        error={!!errors.City}
        helperText={errors.City?.message}
        InputLabelProps={{
            sx: {
              fontWeight: 500, color: "#ADA4A5",},
        }}
        InputProps={{
          sx: {backgroundColor: "#F7F8F8",borderRadius: "12px",height: 66,
            "& fieldset": { border: "none" }},
        }}
      />    

     <TextField label="State*" variant="outlined" fullWidth
      {...register("State", { required: "State is required" })}
      error={!!errors.State} helperText={errors.State?.message}
      InputLabelProps={{
        sx: {
          fontWeight: 500, color: "#ADA4A5",},
       }}
      InputProps={{
        sx: {backgroundColor: "#F7F8F8",borderRadius: "12px",height: 66,
          "& fieldset": { border: "none" }},
      }}
    />

      <TextField label="Pincode*" type="number" fullWidth
        {...register("pincode", {
          required: "Pincode is required",
          minLength: { value: 5, message: "Must be 5 digits" },
        })}
        error={!!errors.pincode}
        helperText={errors.pincode?.message}
        InputLabelProps={{
            sx: {
              fontWeight: 500, color: "#ADA4A5",},
        }}
        InputProps={{
          sx: { backgroundColor: "#F7F8F8", borderRadius: "12px",height: 66,
            "& fieldset": { border: "none" },
            "& input[type=number]": {
        MozAppearance: "textfield",
      },
      "& input[type=number]::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
      "& input[type=number]::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },}
        }}
      />

      <Button
        endIcon={<MyLocationIcon sx={{ fontSize: 18 }} />}
        sx={{ textTransform: "none", fontWeight: 600,alignSelf: "center",
        }}>
        Use My Location
      </Button>

      <Button
        type="submit" variant="contained" fullWidth
        sx={{ borderRadius: "12px", height: 48,
           textTransform: "none", fontWeight: 500,
          "&:hover": { backgroundColor: "#551622" },
        }}
      > ADD
      </Button>
    </Box>
  );
}
