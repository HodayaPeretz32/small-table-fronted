import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/usersApi";
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
  Alert,
  CircularProgress,
  InputAdornment,
  IconButton,
  Container,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { setAuthToken } from "../../api/axios";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setMessageType("error");
      setMessage("יש למלא שם משתמש וסיסמה");
      return;
    }

    setLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const response = await loginUser({
        username: formData.username,
        password: formData.password,
      });

      if (response.data.access) {
        // שמירת טוקנים
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
        setAuthToken(response.data.access);
      }

      localStorage.setItem("username", formData.username);

      setMessage("התחברת בהצלחה! ✓");
      setMessageType("success");
      setFormData({ username: "", password: "", rememberMe: false });

      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      setMessageType("error");
      const detail = error.response?.data?.detail;

      if (detail === "No active account found with the given credentials") {
        setMessage("שם משתמש או סיסמה שגויים");
      } else if (error.response?.status === 401) {
        setMessage("אין הרשאה להתחבר");
      } else if (error.response) {
        setMessage("שגיאה בהתחברות. בדקי את הפרטים");
      } else {
        setMessage("שגיאת שרת, נסי שוב מאוחר יותר");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            padding: "32px",
          }}
        >
          <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333", marginBottom: "8px" }}>
              Log In
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Please sign in to your existing account
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <TextField
              fullWidth
              type="text"
              name="username"
              label="USERNAME"
              placeholder="your_username"
              value={formData.username}
              onChange={handleChange}
              disabled={loading}
              variant="outlined"
              size="small"
              required
            />

            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              name="password"
              label="PASSWORD"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              variant="outlined"
              size="small"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" size="small">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  size="small"
                />
              }
              label={<Typography variant="caption">Remember me</Typography>}
            />

            {message && <Alert severity={messageType}>{message}</Alert>}

            <Button
              fullWidth
              onClick={handleLogin}
              disabled={loading}
              variant="contained"
              sx={{ backgroundColor: "#5c1a2f", color: "white", padding: "12px", fontWeight: "bold" }}
            >
              {loading ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CircularProgress size={20} color="inherit" />
                  LOGGING IN...
                </Box>
              ) : (
                "LOG IN"
              )}
            </Button>
          </Box>

          <Box sx={{ textAlign: "center", marginTop: "24px" }}>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Don't have an account?{" "}
              <Link onClick={() => navigate("/signup")} sx={{ color: "#0066cc", fontWeight: "bold", cursor: "pointer" }}>
                SIGN UP
              </Link>
            </Typography>
          </Box>

          <Box sx={{ marginTop: "32px", display: "flex", justifyContent: "center", gap: "16px" }}>
            <IconButton sx={{ backgroundColor: "#1f77f2", color: "white" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ backgroundColor: "#1da1f2", color: "white" }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ backgroundColor: "#000", color: "white" }}>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
