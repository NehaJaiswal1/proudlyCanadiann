import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import pagetitle from '../../images/page-title.jpg';
import { TextField, Button, Container, Grid, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useNavigate } from 'react-router';


function EmployerRegistration() {
    const navigate = useNavigate();
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
        console.log("some")
        try {
            const response = await fetch('https://job-portal-website-by5i.onrender.com/job-Portal/Employee/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            
            console.log("some")

            const responseData = await response.json();
            console.log('API Response:', responseData);
            if(responseData.message && responseData.accessToken ) navigate('/employers/auth/login')
            // You can add further logic here based on the response
        } catch (error) {
            console.error('Error submitting form:', error);
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
                                Register Employer
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
                                <Grid item xs={12}>
                                    <TextField
                                        label="Confirm Password"
                                        type="password"
                                        name="confirmPassword"
                                        fullWidth
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
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
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Category"
                                        name="category"
                                        fullWidth
                                        value={formData.category}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Organisation Type"
                                        name="organizationType"
                                        fullWidth
                                        value={formData.organizationType}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Country"
                                        name="country"
                                        fullWidth
                                        value={formData.country}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Province"
                                        name="province"
                                        fullWidth
                                        value={formData.province}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="City"
                                        name="city"
                                        fullWidth
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Postal Code"
                                        name="postalCode"
                                        fullWidth
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Address"
                                        name="address"
                                        fullWidth
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Phone Number"
                                        name="phoneNumber"
                                        fullWidth
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Website"
                                        name="website"
                                        fullWidth
                                        value={formData.website}
                                        onChange={handleChange}
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
                                            />
                                        }
                                        label="I agree to the terms and conditions"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button className='shadow-lg shadow-blue-700' type="submit" variant="contained" color="primary" fullWidth>
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