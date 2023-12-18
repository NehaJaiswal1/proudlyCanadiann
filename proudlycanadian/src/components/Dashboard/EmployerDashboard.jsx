import React, { useState } from 'react';
import Navbar from '../Navbar.jsx';
import Footer from "../Footer.jsx";
import { Container, Grid, Paper, Typography, Button, styled, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { hotJobs } from '../../Data/HotJobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faLocation, faMapMarker, faTags, faIndustry, faClock, faEye, faPen, faUser, faUpload, faPaperPlane, faImage, faEnvelope, faBuilding } from '@fortawesome/free-solid-svg-icons';
import pc from '../../images/pc.png'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function ProfileInformation({ handleClose }) {

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected profile picture:', file);
  };

  return (
    <form>
      <Typography variant="h6" style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
        Personal Information
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.firstName}  // Provide the value prop here
            onChange={(e) => handleInputChange(e, 'firstName')}  // Update handleInputChange to include the field name
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.lastName}  // Provide the value prop here
            onChange={(e) => handleInputChange(e, 'lastName')}  // Update handleInputChange to include the field name
          />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Designation" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Phone Number" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Country" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Province" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="City" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address" variant="outlined" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="profile-picture-upload"
            type="file"
            onChange={handleProfilePictureChange}
          />
          <label htmlFor="profile-picture-upload">
            <Button
              variant="outlined"
              component="span"
              startIcon={<FontAwesomeIcon icon={faUpload} />}
              style={{ marginTop: '15px' }}
            >
              Upload Profile Picture
            </Button>
          </label>
        </Grid>
      </Grid>

      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={handleClose}
        style={{ backgroundColor: 'rgb(30 58 138)', borderRadius: '20px', marginTop: '25px', boxShadow: '2px 2px 2px rgb(30 58 140)' }}
      >
        Save
      </Button>
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

  const [displayContent, setDisplayContent] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');


  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

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
    // pyare se anmol koshish kiye nhi hua ye wala humse ~~~

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
    useNavigate('/packages')
  }

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
                <StyledButton variant="outlined" onClick={() => handleButtonClick('Manage Jobs')}>
                  Manage Jobs
                </StyledButton>
              </div>
              <div>
                <StyledButton variant="outlined" onClick={() => handleButtonClick('Add Candidate')}>
                  Add Candidate
                </StyledButton>
              </div>
              <div>
                <StyledButton variant="outlined" onClick={() => handleButtonClick('Messages')}>
                  Messages
                </StyledButton>
              </div>
              <div>
                <StyledButton variant="outlined" onClick={() => handleButtonClick('Profile Picture')}>
                  Profile
                </StyledButton>
              </div>
              <div>
                <StyledButton variant="outlined" onClick={() => handleButtonClick('Company Profile')}>
                  Company Profile
                </StyledButton>
              </div>
              <div>
                <StyledButton variant="outlined" onClick={() => handleButtonClick('Post A New job')}>
                  Post A New job
                </StyledButton>
              </div>
              <div>
                <StyledButton variant="outlined" onClick={() => handleButtonClick('My Packages')}>
                  My Packages
                </StyledButton>
              </div>
              <div>
                <StyledButton variant="outlined">
                  ShortListed Resume
                </StyledButton>
              </div>
              <div>
                <StyledButton variant="outlined" onClick={() => handleButtonClick('Change Password')}>
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
            <Paper style={{ padding: 16, height: '100%' }}>
            
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
             
              {isProfileOpen && <ProfileInformation handleClose={handleProfileClose} />}
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
                <form onSubmit={handleSubmit} className='p-10  '>
                  <Typography variant="h6" style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
                    Add Candidate
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6} >
                      <TextField
                        label="First Name"
                        variant="outlined"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Last Name"
                        variant="outlined"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Phone"
                        variant="outlined"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Address"
                        variant="outlined"
                        name="address"
                        value={formData.address}
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
                        onChange={handleInputChange}
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
