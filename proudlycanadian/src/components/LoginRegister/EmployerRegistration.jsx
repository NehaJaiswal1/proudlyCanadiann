
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import pagetitle from '../../images/page-title.jpg';
import { TextField, Alert, AlertTitle, Button, Container, Grid,
     Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useNavigate } from 'react-router';


function EmployerRegistration() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        companyName: '',
        category: '',
        organizationType: '',
        country: '',
        province: '',
        city: '',
        postalCode: '',
        address: '',
        phoneNumber: '',
        website: '',
        companyDescription: '',
    });

    const [apiResponseMessage, setApiResponseMessage] = useState('');

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
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setApiResponseMessage('Password and Confirm Password do not match.');
            return;
        }
        
        try {
            const response = await
             fetch('https://job-portal-website-by5i.onrender.com/job-Portal/Employee/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log('API Response:', response);

            const responseData = await response.json();
            console.log('Parsed API Response:', responseData);

            setApiResponseMessage(responseData.message);

            if (responseData.error) {

                alert(responseData.error);
            } else {

                setApiResponseMessage(responseData.message);

                if (responseData.message && responseData.accessToken) {
                    navigate('/thankyou');
                }
            }
        } catch (error) {


            console.error('Error submitting form:', error);
            alert('Error in submitting form');

        }

    };
    // useEffect(() => {
    //     if () {
    //       const timer = setTimeout(() => {
    //         navigate('/employers/auth/login');
    //       }, 3000); 
      
    //       return () => clearTimeout(timer); 
    //     }
    //   }, [successMessage, navigate]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ height: '100px' }}></div>
            <div>

                <div className='mt-10 mb-10'>
                    <Container className='shadow-xl shadow-blue-950 p-8  rounded-3xl' maxWidth="sm" style={{ marginTop: '20px' }}>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h6" component="div" gutterBottom className='font-semibold '>
                                Employer Registration
                            </Typography>

                            
                            <Grid container spacing={2}>
                            {apiResponseMessage && <Alert severity="error">
                                 <strong>{apiResponseMessage}</strong>
                            </Alert>}
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="First Name"
                                        name="firstName"
                                        fullWidth
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Last Name"
                                        name="lastName"
                                        fullWidth
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        name="email"
                                        fullWidth
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        name="password"
                                        fullWidth
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Confirm Password"
                                        type="password"
                                        name="confirmPassword"
                                        fullWidth
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        Company Information
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Company Name"
                                        name="companyName"
                                        fullWidth
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Category"
                                        name="category"
                                        fullWidth
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Organisation Type"
                                        name="organizationType"
                                        fullWidth
                                        value={formData.organizationType}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Country"
                                        name="country"
                                        fullWidth
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Province"
                                        name="province"
                                        fullWidth
                                        value={formData.province}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="City"
                                        name="city"
                                        fullWidth
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Postal Code"
                                        name="postalCode"
                                        fullWidth
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Address"
                                        name="address"
                                        fullWidth
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Phone Number"
                                        name="phoneNumber"
                                        fullWidth
                                        value={formData.phoneNumber}
                                        onChange={(e) => {
                                            
                                            const numericValue = e.target.value.replace(/[^0-9]/g, '');
                                            
                                            setFormData({
                                                ...formData,
                                                phoneNumber: numericValue,
                                            });
                                        }}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Website"
                                        name="website"
                                        fullWidth
                                        value={formData.website}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
                                    />
                                </Grid>


                                <Grid item xs={12}>
                                    <TextField
                                        label="Company Desription"
                                        type="text"
                                        name="companyDescription"
                                        fullWidth
                                        value={formData.companyDescription}
                                        onChange={handleChange}
                                        required
                                        InputProps={{
                                            style: {
                                                fontSize: '12px', padding: '1px',
                                                borderRadius: '10px'
                                            },
                                        }}
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
                                                required
                                            />
                                        }
                                        label="I agree to the terms and conditions"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary"
                                        fullWidth>

                                        Register
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2" align="center">

                                        Already have an account? <Link href="/signin">Sign In Now</Link>
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

export default EmployerRegistration;