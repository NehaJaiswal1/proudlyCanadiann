// Thankyou.js
import React from 'react';
import { Typography, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Thankyou.css';

function Thankyou() {
  return (
    <div className="thankyou-page">
      <Container>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          <div className='shadow-md shadow-cyan-200 rounded-lg p-10' style={{ textAlign: 'center' }}>
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                <span style={{ fontWeight: 'bold', color: '#14532d' }}>Thank you!</span>
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
              <span style={{ fontWeight: 'bold', color: '#4b5563' }}>
                Thank you for Choosing Proudly Canadian!</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="center" paragraph>
              <span style={{ fontWeight: 'bold', color: '#4b5563' }}>
                Please enjoy our services by logging into your account.</span>
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
              >
                Login
              </Button>
            </Grid>
          </div>
        </Grid>
      </Container>

      <div className="glitter-container">
        {[...Array(50)].map((_, index) => (
          <div key={index} className="glitter" style={{ '--index': index }} />
        ))}
      </div>
    </div>
  );
}

export default Thankyou;
