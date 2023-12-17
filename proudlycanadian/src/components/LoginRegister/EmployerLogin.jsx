import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import pagetitle from '../../images/page-title.jpg';
import { TextField, Button, Container, Grid, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useNavigate } from 'react-router';


function EmployerLogin() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
       
        email: '',
        password: ''
    });


    const [agreeTerms, setAgreeTerms] = useState(false);
    const [loginMessage, setLoginMessage] = useState(null);

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
    console.log("Formdata", formData)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/signIn', {
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
            setLoginMessage(responseData.message);
            navigate('/employers/job/listing');

            // You can add further logic here based on the response, such as redirecting or updating state.
        } catch (error) {
            console.error('Error submitting form:', error);
            setLoginMessage(`Authentication failed: ${error.message}`);
        }
    };

    const register=()=>{
        navigate("/employers/auth/registration")
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ height: '100px' }}></div>

            <div>
                
                <div >
                    <Container  className='shadow-lg shadow-blue-900 p-8' maxWidth="sm" style={{ marginTop: '20px' }}>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h5" component="div" gutterBottom>
                                Welcome Employer
                                {loginMessage && (
                <div className="text-xs text-red-700">
                    {loginMessage}
                </div>
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
                                    <Button className='shadow-lg shadow-blue-700' type="submit" variant="contained" color="primary" fullWidth >
                                        SignIn
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button className='shadow-lg shadow-blue-700' type="submit" variant="contained" color="primary" fullWidth onClick={register}>
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