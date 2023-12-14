
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import pagetitle from '../../images/page-title.jpg';
import { TextField, Button, Container, Grid, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';


function EmployerLogin() {
    const [formData, setFormData] = useState({
       
        email: '',
        password: ''
    });


    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleChange = (e) => {
        const { email, value } = e.target;
        setFormData({
            ...formData,
            [email]: value,
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
            <div>
                <div style={{ backgroundImage: `url(${pagetitle})`, height: '500px', position: 'relative', opacity: 0.3 }}>
                    <p className='font-bold text-white text-center text-3xl' style={{ position: 'absolute', top: '50%', left: '50%' }}>Sign Up</p>
                </div>
                <div >
                    <Container  className='shadow-lg shadow-blue-900 p-8' maxWidth="sm" style={{ marginTop: '20px' }}>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h5" component="div" gutterBottom>
                                Welcome Employer
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
                                        <Link href="/signin">Forget Password?</Link>
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
