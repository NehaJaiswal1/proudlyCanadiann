
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import pagetitle from '../../images/page-title.jpg';
import { TextField, Button, Container, Grid, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';



function PasswordReset() {
    const [formData, setFormData] = useState({
       
        email: ''
    });

    const handleChange = (e) => {
        const { email, value } = e.target;
        setFormData({
            ...formData,
            [email]: value,
        });
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
        <div >
            <Container  className='shadow-lg shadow-blue-900 p-8' maxWidth="sm" style={{ marginTop: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h5" component="div" gutterBottom>
                        Forgot Password
                       
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
                       
                        
                        
                        <Grid item xs={12} >
                            <Button className='shadow-lg shadow-blue-700' type="submit" variant="contained" color="primary" fullWidth>
                                Recover Password
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" align="center">
                                <Link href="/signin">LogIn?</Link>
                            </Typography>
                        </Grid>
                    </Grid>

                </form>
            </Container>
        </div>
    </div>
    <Footer />
</div>
  )
}

export default PasswordReset
