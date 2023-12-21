
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar.jsx';
import Footer from "../Footer.jsx";
import { Container, Grid, Paper, Typography, Button, styled, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { hotJobs } from '../../Data/HotJobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faLocation, faMapMarker, faTags, faIndustry, faClock, faEye, faPen, faUser, faUpload, faPaperPlane, faImage, faEnvelope, faBuilding, faThLarge, faUserAlt, faMessage, faPerson, faAdd, faUserCircle, faUserPlus, faTasks, faTasksAlt, faFile, faLock, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../AuthContext/AuthContext.jsx'



function ProfileInformation({ handleClose, handleInputChange }) {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const { authData } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  useEffect(() => {
    console.log(authData.token)
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://job-portal-website-by5i.onrender.com/job-Portal/Employee/Employee-Profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${authData.token}`,
          },
        });
        console.log(response)
        if (response.ok) {
          const data = await response.json();
          console.log('Response data as object:', data);
          // const jsonDataString = JSON.stringify(data);
          // console.log('Response data as string:', jsonDataString);

          setFormData({
            firstName: data.result.firstName,
            lastName: data.result.lastName,
            email: data.result.email,
            phoneNumber: data.result.mobileNo

          });
          setProfileData(data);
        } else {
          console.error('Failed to fetch profile data:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred while fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);





  return (
    // <form onSubmit={handleSubmit}>
    <form>
      <Typography variant="h6" style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
        Personal Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            name="firstName"
            fullWidth
            value={`${formData.firstName} `}
            // onChange={handleInputChange}
            required
            InputProps={{
              readOnly: true,
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
            value={`${formData.lastName}`}

            // onChange={handleInputChange}
            required
            InputProps={{
              readOnly: true,
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
            value={`${formData.email}`}
            // onChange={handleInputChange}
            required
            InputProps={{
              readOnly: true,
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            value={`${formData.phoneNumber}`}
            // onChange={handleInputChange}
            required
            InputProps={{
              readOnly: true,
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
          <Button type="submit" variant="contained" color="primary"
            fullWidth onClick={handleClose}>

            Save
          </Button>
        </Grid>

      </Grid>

    </form>
  );
}

function CompanyProfileForm({ handleClose }) {
  const handleCompanyLogoChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected company logo:', file);
  };

  return (
    <form>
      <Typography variant="h6" style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faBuilding} style={{ marginRight: '8px' }} />
        Company Details
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="Company Name" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="company-logo-upload"
            type="file"
            onChange={handleCompanyLogoChange}
          />
          <label htmlFor="company-logo-upload" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button
              variant="outlined"
              component="span"
              startIcon={<FontAwesomeIcon icon={faUpload} />}
              style={{ marginTop: '15px' }}
            >
              Upload
            </Button>
          </label>
        </Grid>

        <Grid item xs={6}>
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Organisation Type" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Founded Date" type="date" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Phone" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Website" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Category" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="No. of Employees" type="number" variant="outlined" fullWidth margin="normal" />
        </Grid>
      </Grid>

      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={handleClose}
        style={{
          backgroundColor: 'rgb(30 58 138)',
          borderRadius: '20px',
          marginTop: '25px',
          boxShadow: '2px 2px 2px rgb(30 58 140)',
        }}
      >
        Save
      </Button>
    </form>
  );
}


function EmployerDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const [displayContent, setDisplayContent] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');



  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  }

  const handleProfilePictureSubmit = (event) => {
    event.preventDefault();

  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  // Add candidate form Data
  const [candidateFormData, setCandidateFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
  });

  const handleCandidateInputChange = (e) => {
    setCandidateFormData({
      ...candidateFormData,
      [e.target.name]: e.target.value,
    });

    console.log(candidateFormData)


  };

  const handleCandidateSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match before submitting the form
    if (candidateFormData.password !== candidateFormData.confirmPassword) {
      console.error('Password and Confirm Password do not match');
      return;
    }

    const data = {

      firstName: candidateFormData.firstName,
      lastName: candidateFormData.lastName,
      email: candidateFormData.email,
      phone: candidateFormData.phone,
      password: candidateFormData.password,
      address: candidateFormData.address,
    };

    try {

      const response = await fetch('https://job-portal-website-by5i.onrender.com/job-Portal/Employee/candidateSignUp-By-Employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {

        console.log('Candidate added successfully');
      } else {

        console.error('Error adding candidate:', response.statusText);
      }
    } catch (error) {

      console.error('Error adding candidate:', error.message);
    }
  };


  const [messageFormData, setMessageFormData] = useState({
    recipient: '',
    message: '',
    document: null,
  });


  const [passwordFormData, setPasswordFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDropdownChange = (e) => {
    setMessageFormData((prevData) => ({ ...prevData, recipient: e.target.value }));
  };

  const handleMessageChange = (e) => {
    setMessageFormData((prevData) => ({ ...prevData, message: e.target.value }));
  };

  const handleDocumentUpload = (e) => {
    setMessageFormData((prevData) => ({ ...prevData, document: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/update-Password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(passwordFormData),
      });

      if (response.ok) {
        setSuccessMessage('Password updated successfully');

      } else {
        console.error('Failed to update password:', response.statusText);
        setSuccessMessage('Please try again later');
      }
    } catch (error) {
      console.error('An error occurred while updating password:', error);

    }
  };


  const handleLogout = () => {
    logout();
    localStorage.removeItem('employerToken');
    localStorage.removeItem('employerEmailId');
    navigate('/');

  };

  const handleSendMessage = () => {

    console.log('Message sent:', messageFormData);
  };

  const handleButtonClick = (content) => {
    setDisplayContent(content);
    if (content === 'Profile Picture') {
      setIsProfileOpen(true);
    } else {
      setIsProfileOpen(false);
    }
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };


  const handlePackage = () => {
    navigate('/employers');
  }

  const StyledButton = styled(Button)({
    marginBottom: 8,
    width: '100%',
    fontFamily: 'serif',
    fontSize: '12px',
    // borderRadius: '10px',
    // backgroundColor: 'rgb(30 58 138)',
    color: 'rgb(117, 117, 117)',
    fontWeight: 'bold',
    padding: '10px',
    // boxShadow: '2px 2px 2px rgb(30 58 140)',
    outline: 'none',
    borderBottom: '1px solid rgb(189, 189, 189)',
    '&:hover': {
      backgroundColor: 'rgb(30 58 138)',
      color: 'white',
    },
  });

  return (
    <div>
      <Navbar />
      <div style={{ height: '120px' }}></div>

      <Container>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={3} >
            <Paper style={{ padding: 16, height: '100%' }}>

              <form onSubmit={handleProfilePictureSubmit} className='text-center'>
                <div className="mb-4 " onClick={() => document.getElementById("profile-picture-upload").click()}>
                  <label htmlFor="profile-picture-upload" className="cursor-pointer">
                    <div
                      className="rounded-full overflow-hidden bg-gray-200 p-2 text-center"
                      style={{
                        backgroundImage: `url(${selectedImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        height: '120px',
                        width: '120px',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}
                    >
                      {!selectedImage && (
                        <FontAwesomeIcon icon={faUpload} size="2x" color="#3182ce" className='text-slate-500' />
                      )}
                    </div>
                  </label>
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="profile-picture-upload"
                    type="file"
                    onChange={handleProfilePictureChange}
                  />
                </div>
              </form>

              <div className='mt-5 '>
                <StyledButton onClick={() => handleButtonClick('Manage Jobs')}>
                  <FontAwesomeIcon icon={faTasksAlt} className='mr-3' />
                  Manage Jobs
                </StyledButton>
              </div>
              <div>
                <StyledButton onClick={() => handleButtonClick('Add Candidate')}>
                  <FontAwesomeIcon icon={faUserPlus} className='mr-2' />
                  Add Candidate
                </StyledButton>
              </div>
              <div>
                <StyledButton onClick={() => handleButtonClick('Messages')}>
                  <FontAwesomeIcon icon={faMessage} className='mr-2' />
                  Messages
                </StyledButton>
              </div>
              <div>
                <StyledButton onClick={() => handleButtonClick('Profile Picture')}>
                  <FontAwesomeIcon icon={faUserCircle} className='mr-2' />
                  Profile
                </StyledButton>
              </div>
              <div>
                <StyledButton onClick={() => handleButtonClick('Company Profile')}>
                  <FontAwesomeIcon icon={faUser} className='mr-2' />
                  Company Profile
                </StyledButton>
              </div>
              <div>
                <StyledButton onClick={() => handleButtonClick('Post A New job')}>
                  <FontAwesomeIcon icon={faAdd} className='mr-2' />
                  Post A New job
                </StyledButton>
              </div>
              <div>
                <StyledButton onClick={() => handleButtonClick('My Packages')}>
                  <FontAwesomeIcon icon={faTasks} className='mr-2' />
                  My Packages
                </StyledButton>
              </div>
              <div>
                <StyledButton >
                  <FontAwesomeIcon icon={faFile} className='mr-2' />
                  ShortListed Resume
                </StyledButton>
              </div>
              <div>
                <StyledButton onClick={() => handleButtonClick('Change Password')}>
                  <FontAwesomeIcon icon={faLock} className='mr-2' />
                  Change Password
                </StyledButton>
              </div>
              <div>
                <StyledButton onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOut} className='mr-2' />
                  Logout
                </StyledButton>
              </div>
            </Paper>
          </Grid>

          {/* Right card with 2/3 width */}
          <Grid item xs={12} sm={8}>
            <Paper style={{ padding: 16, height: '100%' }}>

              {isProfileOpen && (
                <ProfileInformation
                  handleClose={handleProfileClose}
                  formData={formData} 
                  handleInputChange={handleInputChange}
                />
              )}


              {displayContent === 'Company Profile' && (
                <CompanyProfileForm handleClose={() => setDisplayContent(null)} />
              )}
              {displayContent === 'Manage Jobs' && (
                <div className='mt-10'>
                  <Typography variant="h6" style={{ marginTop: '10px' }}>Manage Jobs</Typography>
                  <table className="min-w-full font-serif">
                    <thead>
                      <tr>
                        <th className="text-center p-3 border-b ">Title</th>
                        <th className="text-center p-3 border-b ">Application</th>
                        <th className="text-center p-3 border-b ">Date</th>
                        <th className="text-center p-3 border-b ">Status</th>
                        <th className="text-center p-3 border-b ">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotJobs.map((job) => (
                        <tr key={`${job.id}-${job.postedOn}`} className='mb-10 border-b'>
                          <td className="text-center p-3">{job.title}</td>
                          <td className="text-center p-3">{job.applications}</td>
                          <td className="text-center p-3">{job.date}</td>
                          <td className="text-center p-3  ">
                            <button className='bg-blue-900 rounded-full text-white p-3 text-xs font-bold'>{job.status}</button>
                          </td>
                          <td className="text-center p-3 space-x-4"><FontAwesomeIcon icon={faEye} /> <FontAwesomeIcon icon={faPen} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {/* Add Candidate Form */}
              {displayContent === 'Add Candidate' && (
                <form className='p-10  '>
                  <Typography variant="h6" style={{ marginTop: '10px', display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'rgb(117, 117, 117)' }} >
                    <FontAwesomeIcon icon={faUserPlus} className='mr-5' />
                    Add Candidate
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6} >
                      <TextField
                        label="First Name"
                        variant="outlined"
                        name="firstName"
                        value={candidateFormData.firstName}
                        onChange={handleCandidateInputChange}
                        required
                        fullWidth
                        margin="normal"
                        style={{ height: '50px' }}
                        InputProps={{ style: { borderRadius: '10px' } }}
                      />
                    </Grid>
                    <Grid item xs={6} >
                      <TextField
                        label="Last Name"
                        variant="outlined"
                        name="lastName"
                        value={candidateFormData.lastName}
                        onChange={handleCandidateInputChange}
                        required
                        fullWidth
                        margin="normal"
                        style={{ height: '50px' }}
                        InputProps={{ style: { borderRadius: '10px' } }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={candidateFormData.email}
                        onChange={handleCandidateInputChange}
                        required
                        fullWidth
                        margin="normal"
                        style={{ height: '50px' }}
                        InputProps={{ style: { borderRadius: '10px' } }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Phone"
                        variant="outlined"
                        name="phone"
                        value={candidateFormData.phone}
                        onChange={handleCandidateInputChange}
                        required
                        fullWidth
                        margin="normal"
                        style={{ height: '50px' }}
                        InputProps={{ style: { borderRadius: '10px' } }}
                      />

                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Password"
                        variant="outlined"

                        name="password"
                        value={candidateFormData.password}
                        onChange={handleCandidateInputChange}
                        required
                        fullWidth
                        margin="normal"
                        style={{ height: '50px' }}
                        InputProps={{ style: { borderRadius: '10px' } }}
                      />

                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Confirm Password"
                        variant="outlined"
                        name="confirmPassword"
                        value={candidateFormData.confirmPassword}
                        onChange={handleCandidateInputChange}
                        required
                        fullWidth
                        margin="normal"
                        style={{ height: '50px' }}
                        InputProps={{ style: { borderRadius: '10px' } }}
                      />

                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Address"
                        variant="outlined"
                        name="address"
                        value={candidateFormData.address}
                        onChange={handleCandidateInputChange}
                        required
                        fullWidth
                        margin="normal"
                        style={{ height: '50px' }}
                        InputProps={{ style: { borderRadius: '10px' } }}
                      />
                    </Grid>
                  </Grid>
                  {/* {!passwordMatch && (
        <p style={{ color: 'red', marginTop: '5px' }}>Password and Confirm Password do not match.</p>
      )} */}
                  <Button type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleCandidateSubmit}
                    style={{ backgroundColor: 'rgb(30 58 138)', borderRadius: '20px', marginTop: '25px', boxShadow: '2px 2px 2px rgb(30 58 140)' }}>
                    Submit
                  </Button>
                </form>
              )}
              {/* Messages Form */}
              {displayContent === 'Messages' && (
                <form className='p-10'>
                  <Typography variant="h6" style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
                    Messages
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormControl fullWidth variant="outlined" margin="normal">
                        <InputLabel id="recipient-label">Recipient</InputLabel>
                        <Select
                          labelId="recipient-label"
                          id="recipient"
                          value={messageFormData.recipient}
                          onChange={handleDropdownChange}
                          label="Recipient"
                          required
                        >
                          <MenuItem value="recipient1">Recipient 1</MenuItem>
                          <MenuItem value="recipient2">Recipient 2</MenuItem>
                          {/* Add more recipients as needed */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        name="message"
                        value={messageFormData.message}
                        onChange={handleMessageChange}
                        required
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <input
                        accept="application/pdf, application/msword"
                        style={{ display: 'none' }}
                        id="file-upload"
                        type="file"
                        onChange={handleDocumentUpload}
                      />
                      <label htmlFor="file-upload">
                        <IconButton color="primary" component="span">
                          <FontAwesomeIcon icon={faUpload} />
                        </IconButton>
                      </label>
                      {messageFormData.document && (
                        <span>{messageFormData.document.name}</span>
                      )}
                    </Grid>
                  </Grid>
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={handleSendMessage}
                    style={{ backgroundColor: 'rgb(30 58 138)', borderRadius: '20px', marginTop: '25px', boxShadow: '2px 2px 2px rgb(30 58 140)' }}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '8px' }} />
                    Send Message
                  </Button>
                </form>
              )}
              {displayContent === 'Post A New job' && (
                <form className='p-10  text-center'>
                  <Typography variant="h6" >
                    Please Click Below To Buy A Job Posting Package
                  </Typography>
                  <Button type="submit" onClick={handlePackage}
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: 'rgb(30 58 138)', borderRadius: '20px', marginTop: '25px', boxShadow: '2px 2px 2px rgb(30 58 140)' }}>
                    Packages & Plans
                  </Button>
                </form>
              )}


              {displayContent === 'My Packages' && (
                <form className='p-10  text-center'>
                  <Typography variant="h6" >
                    Please Click Below To Buy A Job Posting Package
                  </Typography>
                  <Button type="submit" onClick={handlePackage}
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: 'rgb(30 58 138)', borderRadius: '20px', marginTop: '25px', boxShadow: '2px 2px 2px rgb(30 58 140)' }}>
                    Packages & Plans
                  </Button>
                </form>
              )}

              {displayContent === 'Change Password' && (
                <form onSubmit={handleUpdate} className='p-10  '>

                  {successMessage && (
                    <div style={{ color: 'green', marginTop: '10px' }}>
                      {successMessage}
                    </div>
                  )}

                  <Typography variant="h6" style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
                    Update Password
                  </Typography>
                  <Grid container spacing={2} >
                    <Grid item xs={6}  >
                      <TextField
                        label="Old Password"
                        variant="outlined"
                        name="oldPassword"
                        value={formData.oldPassword}
                        onChange={handleCandidateInputChange}
                        required
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6} >
                      <TextField
                        label="New Password"
                        variant="outlined"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6} >
                      <TextField
                        label="Confirm New Password"
                        variant="outlined"
                        name="confirmNewPassword"
                        value={formData.confirmNewPassword}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        margin="normal"
                      />
                    </Grid>




                  </Grid>
                  <Button type="submit"
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: 'rgb(30 58 138)', borderRadius: '20px', marginTop: '25px', boxShadow: '2px 2px 2px rgb(30 58 140)' }}>
                    Update
                  </Button>
                </form>
              )}

            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default EmployerDashboard;
