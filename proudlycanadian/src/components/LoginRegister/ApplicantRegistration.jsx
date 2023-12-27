
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import pagetitle from '../../images/page-title.jpg';
import { TextField, Button, Container, Grid, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useNavigate } from 'react-router';
import Alert from '@mui/material/Alert';


function ApplicantRegistration() {
    const [showRegistrationError, setShowRegistrationError] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileno: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [passwordMismatchError, setPasswordMismatchError] = useState('');
    const [agreeTermsError, setAgreeTermsError] = useState('');
    const [mobileNoError, setMobileNoError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name == 'mobileno' && !/^\d*$/.test(value)) {
            setMobileNoError('please enter numbers only');
            return;
        }


        setFormData({
            ...formData,
            [name]: value,
        });

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
        if (!agreeTerms) {
            setAgreeTermsError('Please agree to the terms and conditions');
            return;
        }


        try {
            const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(response);

            const responseData = await response.json();
            console.log('Registration successful:', responseData)
            if (response.status === 201 || response.status === 200) {
                navigate('/thankyou');
            }
            else if (response.status === 400 || responseData.error == 'Applicant already registered with us ...') {

                setShowRegistrationError(true);
            }

        } catch (error) {
            console.error('An error occurred during registration:', error);

        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <div style={{ height: '100px' }}></div>
            <div>
                <div >
               
                    <Container style={{
                        padding: '30px', borderRadius: '8px', width: '450px', margin: 'auto', height: '90%',
                        boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.2), -2px 2px 10px rgba(0, 0, 0, 0.1)'
                    }}>
                         {showRegistrationError && (
                            <Alert severity="error" onClose={() => setShowRegistrationError(false)}>
                                Applicant already registered with us. Please login instead.
                            </Alert>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className='text-gray-500 font-bold text-center text-xl mb-10'>
                                Applicant Registration
                            </div>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="First Name"
                                        name="firstName"
                                        fullWidth
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Last Name"
                                        name="lastName"
                                        fullWidth
                                        required
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
                                        required
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
                                        required
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
                                        required
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
                                        required
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

        </div>
    );
}

export default ApplicantRegistration;