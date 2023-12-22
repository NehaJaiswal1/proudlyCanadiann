
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { TextField, Button, Container, Grid, Typography, Link, Alert, AlertTitle } from '@mui/material';


import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext/AuthContext';

function EmployerLogin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const auth = useAuth();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loginMessage, setLoginMessage] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('employerToken');
    const storedEmailId = localStorage.getItem('employerEmailId');

    if (storedToken && storedEmailId) {
      auth.saveAuthData({ token: storedToken, emailId: storedEmailId });
     
    }
  }, [auth, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/signIn', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('API Response:', responseData);
  
      if (responseData.loggedInFrom === "Employee") {
        const comingToken = responseData.accessToken;
        const comingEmailId = responseData.email;
        auth.saveAuthData({ token: comingToken, emailId: comingEmailId });
  
        localStorage.setItem('employerToken', comingToken);
        localStorage.setItem('employerEmailId', comingEmailId);
  
        setSuccessMessage('Successfully Logged In!');
        setErrorMessage(null); 
      } else {
        setLoginMessage('Invalid login for employer.');
        setSuccessMessage(null); 
        setErrorMessage('Error logging in. Please check your credentials.');
      }
  
    } catch (error) {
      setSuccessMessage(null); 
      setErrorMessage('Error submitting the form. Please try again.');
      console.error('Error submitting form:', error);
    }
  };
  
  
  useEffect(() => {
    if (successMessage == 'Successfully Logged In!') {
      const timer = setTimeout(() => {
        navigate('/employers/job/listing');
      }, 3000); 
  
      return () => clearTimeout(timer); 
    }
  }, [successMessage, navigate]);
  
  const register = () => {
    navigate("/employers/auth/registration");
  };
  
 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ height: '100px' }}></div>

      <div>
        <div >
          <Container className='shadow-lg shadow-blue-900 p-8' maxWidth="sm" style={{ marginTop: '20px' }}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h5" component="div" gutterBottom>
                Welcome Employer

                {successMessage && (
                  <Alert >
                    
                     <strong>{successMessage}</strong>
                  </Alert>
                )}
                {errorMessage && (
                  <Alert severity="error">
                 
                  <strong>{errorMessage}</strong>
                </Alert>
                )}
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button className='shadow-lg shadow-blue-700' type="submit" variant="contained" color="primary" fullWidth>
                    SignIn
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button className='shadow-lg shadow-blue-700' type="button" variant="contained" color="primary" fullWidth onClick={register}>
                    Register
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" align="center">
                  <Link href="/forgot_password">Forget Password?</Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EmployerLogin;
