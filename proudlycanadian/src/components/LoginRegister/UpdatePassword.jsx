
import React, { useState,useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import pagetitle from '../../images/page-title.jpg';
import { TextField, Button, Container, Grid, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
import {useAuth} from '../AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom';


function UpdatePassword() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    const { authData } = useAuth();
    const navigate = useNavigate();
    // const token = authData.token
    
    const [formData, setFormData] = useState({
       
        password: '',
        confirmPassword: ''
    });

    
    const [passwordMismatchError, setPasswordMismatchError] = useState('');
    
    const handleChange = (e) => {
        const { name, value } = e.target;
       
        setFormData({
            ...formData,
            [name]: value,
        });

        setPasswordMismatchError('');
       
    };

   

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (formData.password !== formData.confirmPassword) {
          setPasswordMismatchError('Password and Confirm Password do not match');
          return;
        }
      
        try {
          const requestBody = {
            token: authData.token,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
          };
      
          const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/update-Password', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
          });
      
          const responseData = await response.json();
          if (responseData.status == true) {
            navigate('/employers/auth/login');
          }
         
          console.log('response data:', responseData);
        } catch (error) {
          console.error('An error occurred during registration:', error);
        }
      };
      
      
      

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ height: '100px' }}></div>
            <div>
                <div >
                    <Container  className='shadow-lg shadow-blue-900 p-8' maxWidth="sm" style={{ marginTop: '20px' }}>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h5" component="div" gutterBottom>
                                Type New Password
                            </Typography>
                            <Grid container spacing={2}>
                               
                                <Grid item xs={12} sm={6}>
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
                                <TextField
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            fullWidth
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={!!passwordMismatchError}
                            helperText={passwordMismatchError}
                        />
                    </Grid>
                    

                                <Grid item xs={12}>
                                    <Button className='shadow-lg shadow-blue-700' type="submit" variant="contained" color="primary" 
                                    onClick={handleSubmit}
                                    fullWidth>
                                        Update Password
                                    </Button>
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

export default UpdatePassword;