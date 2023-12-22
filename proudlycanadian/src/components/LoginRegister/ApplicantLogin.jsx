import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import pagetitle from '../../images/page-title.jpg';
import { TextField, Button, Container, Grid, Typography, Checkbox, FormControlLabel, Link, ToggleButton, ToggleButtonGroup } from '@mui/material';

function ApplicantLogin() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
       
    });

    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = () => {
        setAgreeTerms(!agreeTerms);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData);
        
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ height: '100px' }}></div>
            <div>
                <div>
                    <Container className='shadow-lg shadow-blue-900 p-8' maxWidth="sm" style={{ marginTop: '20px' }}>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h5" component="div" gutterBottom>
                                Welcome Applicant
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
                                    <Button className='shadow-lg shadow-blue-700' type="submit" variant="contained" color="primary" fullWidth>
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

export default ApplicantLogin;
