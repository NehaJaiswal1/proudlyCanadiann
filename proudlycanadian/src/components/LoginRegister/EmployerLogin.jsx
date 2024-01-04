
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { TextField, Button, Container, Grid, Typography, Link, Alert, AlertTitle } from '@mui/material';


import { useNavigate } from 'react-router';
import { useAuth } from '../AuthContext/AuthContext';

const EmployerLogin = ({ onClose }) => {
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
        setErrorMessage("Please Check Your Credentials before logging");
        setSuccessMessage(null);
      }

      const responseData = await response.json();
      console.log('API Response:', responseData);

      if (responseData.loggedInFrom == "Employee") {
        const comingToken = responseData.accessToken;
        const comingEmailId = responseData.email;
        auth.saveAuthData({ token: comingToken, emailId: comingEmailId });

        localStorage.setItem('employerToken', comingToken);
        localStorage.setItem('employerEmailId', comingEmailId);

        setSuccessMessage('Successfully Logged In!');
        navigate('/employers/job/listing');
        setErrorMessage(null);

      }
      if (responseData.loggedInFrom == "Applicant") {
        const comingToken = responseData.accessToken;
        const comingEmailId = responseData.email;
        auth.saveAuthData({ token: comingToken, emailId: comingEmailId });

        localStorage.setItem('employerToken', comingToken);
        localStorage.setItem('employerEmailId', comingEmailId);
        setSuccessMessage('Successfully Logged In!');
        navigate('/applicant/job');
        setErrorMessage(null);
      }
      if (response.status == 404 || response.error == 'Please Enter Valid Information {Email or password is incorrect}') {
        setErrorMessage("Please check your credentials or try again later");
        setSuccessMessage(null);
      }

    } catch (error) {
      setSuccessMessage(null);
      setErrorMessage('Error submitting the form. Please try again later');
      console.error('Error submitting form:', error);
    }
    onClose();
  };

  const register = () => {
    navigate("/employers/auth/registration");
  };
  const registerApplicant =()=>{
    navigate('/auth/registration')
  };

  return (
    <div >
      <div>
        <div>
          <Container style={{
            padding: '30px', borderRadius: '8px', width: '400px', margin: 'auto', height: '90%',
            boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.2), -2px 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <form onSubmit={handleSubmit}>
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
              <div className='text-center text-lg mb-8 font-bold text-gray-500 border-b-2 p-2'>
                Login To Proudly Canadian
              </div>
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
                <Grid item xs={12} container justifyContent="flex-end">
                  <Typography variant="body2" align="center">
                    <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => navigate('/forgot_password')}>
                      Forget Password?
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button className='shadow-lg shadow-blue-700' type="submit" variant="contained" color="primary" fullWidth>
                    Log In
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    Don't have an account?
                    <Link onClick={register} className='text-xs'> Employer</Link>
                    <Link onClick={registerApplicant} className='text-xs'> Applicant</Link>
                  </div>
                </Grid>
              </Grid>
            </form>
          </Container>
        </div>
      </div>

    </div>
  );
}

export default EmployerLogin;