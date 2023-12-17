import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import pagetitle from '../../images/page-title.jpg';
import { TextField, Button, Container, Grid, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';


function ApplicantRegistration() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileno:'',
        password: '',
        confirmPassword: ''
    });

    const [agreeTerms, setAgreeTerms] = useState(false);
    const [passwordMismatchError, setPasswordMismatchError] = useState('');
    const [agreeTermsError, setAgreeTermsError] = useState('');
    const [mobileNoError, setMobileNoError] = useState('');
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        if(name=='mobileno' && !/^\d*$/.test(value)  ){
            setMobileNoError('please enter numbers only');
            return;
        }
        
       
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear password mismatch error when either password or confirm password is updated
        setPasswordMismatchError('');
        setAgreeTermsError('');
        setMobileNoError('');
    };

    const handleCheckboxChange = () => {
        setAgreeTerms(!agreeTerms);
        setAgreeTermsError('')
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            setPasswordMismatchError('Password and Confirm Password do not match');
            return;
        }
        if(!agreeTerms) {
             setAgreeTermsError('Please agree to the terms and conditions');
             return;
        }
        
        // console.log('Form submitted:', formData);

        try {
            const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            const responseData = await response.json();
            console.log('Registration successful:', responseData)
        } catch (error) {
            console.error('An error occurred during registration:', error);
            // Handle the error, e.g., show an error message to the user
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
                                Register Applicant
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="First Name"
                                        name="firstName"
                                        fullWidth
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Last Name"
                                        name="lastName"
                                        fullWidth
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        name="email"
                                        fullWidth
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="mobile No"
                                        type="mobileno"
                                        name="mobileno"
                                        fullWidth
                                        value={formData.mobileno}
                                        onChange={handleChange}
                                    />
                                    {mobileNoError && (
                                    <Typography color="error" variant="body2" gutterBottom>
                                        {mobileNoError}
                                    </Typography>
                                )}
                                </Grid>
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
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={agreeTerms}
                                            onChange={handleCheckboxChange}
                                            name="agreeTerms"
                                            color="primary"
                                            helperText={setAgreeTermsError}
                                        />
                                    }
                                    label="I agree to the terms and conditions"
                                />
                                {/* Display error message for agree terms */}
                                {agreeTermsError && (
                                    <Typography color="error" variant="body2" gutterBottom>
                                        {agreeTermsError}
                                    </Typography>
                                )}
                                </Grid>

                                <Grid item xs={12}>
                                    <Button className='shadow-lg shadow-blue-700' type="submit" variant="contained" color="primary" fullWidth>
                                        Register
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

export default ApplicantRegistration;