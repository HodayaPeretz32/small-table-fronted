import { useState } from 'react';
import { createUser } from '../../api/usersApi';
import { useNavigate } from 'react-router-dom';
import {
  Box, TextField, Button, Typography, Alert, CircularProgress,
  InputAdornment, IconButton, Container
} from '@mui/material';
import { Visibility, VisibilityOff, ArrowBack } from '@mui/icons-material';
import { setAuthToken } from '../../api/axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setMessageType('');

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      setMessageType('error');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setMessage('Password must be at least 6 characters');
      setMessageType('error');
      setLoading(false);
      return;
    }

    try {
      const response = await createUser({
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      });

      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        setAuthToken(response.data.token);
      }

      setMessage('Account created successfully! ✓');
      setMessageType('success');

      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      setMessageType('error');
      setMessage(error.response?.data?.detail || 'Sign up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: 'white', borderRadius: 2, boxShadow: 3, p: 4 }}>
          <Button startIcon={<ArrowBack />} onClick={() => navigate('/login')} sx={{ mb: 2 }}>Back</Button>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>Sign Up</Typography>

          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField name="first_name" label="First Name" value={formData.first_name} onChange={handleChange} required />
            <TextField name="last_name" label="Last Name" value={formData.last_name} onChange={handleChange} required />
            <TextField name="username" label="Username" value={formData.username} onChange={handleChange} required />
            <TextField name="email" label="Email" value={formData.email} onChange={handleChange} required />
            <TextField name="phone" label="Phone" value={formData.phone} onChange={handleChange} />

            <TextField
              name="password" label="Password" type={showPassword ? 'text' : 'password'} value={formData.password} onChange={handleChange} required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              name="confirmPassword" label="Confirm Password" type={showConfirmPassword ? 'text' : 'password'} value={formData.confirmPassword} onChange={handleChange} required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            {message && <Alert severity={messageType}>{message}</Alert>}

            <Button onClick={handleSignUp} disabled={loading} variant="contained">
              {loading ? <CircularProgress size={20} /> : 'Sign Up'}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;

