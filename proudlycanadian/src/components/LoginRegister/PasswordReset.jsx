
import React, {  useState, useEffect  } from 'react';
import { useContext } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import pagetitle from '../../images/page-title.jpg';
import { TextField, Button, Container, Grid, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext.jsx';



function PasswordReset() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const { authData, saveAuthData } = useAuth();
  const navigate = useNavigate();
  // const { setAuthData } = useAuth();


    const[putEmail, setPutEmail]=useState('')
  const [formData, setFormData] = useState({
    email: '',
  });
  console.log("putEmail", putEmail)
  console.log("email",formData.email)

  const [secondFormData, setSecondFormData]=useState({
    email:putEmail,
    otp:'',
  })

  console.log(secondFormData)
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChange1=(e)=>{
    const {name, value} = e.target;
    setSecondFormData({
        ...secondFormData,
        [name]:value,
    })
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch ('https://job-portal-website-by5i.onrender.com/Job-Portal/send-OTP',{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData),
    });
        console.log("response:     ", response)
      
        const responseData = await response.json()
        console.log( responseData)
        // setSuccessMessage('Password updated successfully');
       if(!response.ok) {
        console.log('Failed to send:', response.statusText);
      }
      console.log('Form submitted:', formData);
      setSecondFormData({
      ...secondFormData,
      email: formData.email,
    });
    setButtonClicked(true);

    } catch (error) {
      console.log('An error occurred:', error.message);
    }
  };

  const fullSubmit = async (e)=>{
    e.preventDefault();
    try {
        const response = await fetch ('https://job-portal-website-by5i.onrender.com/Job-Portal/verify-OTP',{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(secondFormData),
    });
        console.log("response:     ", response)
      
        const responseData = await response.json()
        console.log( responseData)
        // setSuccessMessage('Password updated successfully');
       if(!response.ok) {
        console.log('Failed to send:', response.statusText);
      }
      console.log('Form submitted:', secondFormData);
      setSecondFormData({
      ...secondFormData,
      email: formData.email,
    });

    if (responseData.status == true) {
      
      saveAuthData({ token: responseData.token, emailId: formData.email });
      navigate('/updatepassword');
    }

    } catch (error) {
      console.log('An error occurred:', error.message);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ height: '100px' }}></div>
      <div>
        <div>
          <Container className='shadow-lg shadow-blue-900 p-8' maxWidth="sm" style={{ marginTop: '20px' }}>
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
                <Grid item xs={12}>
                  <Button
                    className='shadow-lg shadow-blue-700'
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Get Verification Code
                  </Button>
                </Grid>
                {buttonClicked && (
                  <Grid item xs={12}>
                    {/* New input box */}
                    <TextField
                      label="OTP"
                      type="text"
                      name="otp"
                      fullWidth
                      value={secondFormData.otp}
                        onChange={handleChange1}
                      // Add onChange handler for the new password field
                    />
                  </Grid>
                )}
                {buttonClicked && (
                  <Grid item xs={12}>
                    {/* Submit button for the new input box */}
                    <Button
                      className='shadow-lg shadow-blue-700'
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={fullSubmit}
                    >
                      Submit
                    </Button>
                  </Grid>
                )}
                
                <Grid item xs={12}>
                  <Typography variant="body2" align="center">
                    <Link href="/employers/auth/login">LogIn?</Link>
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

export default PasswordReset;