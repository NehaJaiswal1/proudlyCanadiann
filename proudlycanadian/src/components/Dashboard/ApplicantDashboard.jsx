

import React, { useState } from 'react';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import { Container, Grid, Paper, Typography, Button, styled, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';


function ApplicantDashboard() {
  const navigate = useNavigate();


  const handleLogout = () => {
    navigate('/');
  };

  

  const StyledButton = styled(Button)({
    marginBottom: 8,
    width: '90%',
    fontFamily: 'serif',
    fontSize: '12px',
    borderRadius: '10px',
    backgroundColor: 'rgb(30 58 138)',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px',
    boxShadow: '2px 2px 2px rgb(30 58 140)',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
  });

  return (
    <div>
    <Navbar />
    <div style={{ height: '120px' }}></div>

    <Container>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}>
          <Paper style={{ padding: 16, height: '100%' }}>
            <div className='flex justify-center'>
          <FontAwesomeIcon icon={faGoogle}  size='4x'   className="mr-2 bg-yellow-600 rounded-full p-5  text-center  text-blue-950 shadow-2xl shadow-yellow-900 flex" /> 
          </div>

            <div className='mt-5 '>
              <StyledButton variant="outlined" >
                Profile
              </StyledButton>
            </div>
            <div>
              <StyledButton variant="outlined" >
                Active Jobs
              </StyledButton>
            </div>
            <div>
              <StyledButton variant="outlined" >
                Messages
              </StyledButton>
            </div>
            
            <div>
              <StyledButton variant="outlined" >
                Company Profile
              </StyledButton>
            </div>
            <div>
              <StyledButton variant="outlined" >
                Post A New job
              </StyledButton>
            </div>
            <div>
              <StyledButton variant="outlined" >
                My Packages
              </StyledButton>
            </div>
            <div>
              <StyledButton variant="outlined">
                ShortListed Resume
              </StyledButton>
            </div>
            <div>
              <StyledButton variant="outlined" >
                Change Password
              </StyledButton>
            </div>
            <div>
              <StyledButton variant="outlined" onClick={handleLogout}>
                Logout
              </StyledButton>
            </div>
          </Paper>
        </Grid>

        {/* Right card with 2/3 width */}
        <Grid item xs={12} sm={8}>
          
        </Grid>
      </Grid>
    </Container>
    <Footer />
  </div>
  )
}

export default ApplicantDashboard