
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar.jsx';
import Footer from "../Footer.jsx";
import { Container, Grid, Paper, Typography, Button, styled, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, IconButton, Alert, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { hotJobs } from '../../Data/HotJobs';
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
            label="salary"
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { logout, authData } = useAuth();
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const [selectedImage, setSelectedImage] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const [displayContent, setDisplayContent] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
// --------------------------------------------------------------
// Manage jobs
  const [hotJobs, setHotJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/Employee/allJobs', {
          headers: {
            Authorization: `Bearer ${authData.token}`,
          },
        });

        
        if (response.ok) {
          const data = await response.json();
          setHotJobs(data);
          console.log(data)
        } else {
          console.error('Error fetching jobs:', response);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, [authData.token]);


  //----------------------------------------------- 
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

  // Add candidate form Data------------------------------

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




  };

  const handleCandidateSubmit = async (e) => {
    e.preventDefault();

    if (candidateFormData.password !== candidateFormData.confirmPassword) {
      console.error('Password and Confirm Password do not match');
      return;
    }

    const data = {

      firstName: candidateFormData.firstName,
      lastName: candidateFormData.lastName,
      email: candidateFormData.email,
      mobileNo: parseInt(candidateFormData.phone),
      password: candidateFormData.password,
      confirmPassword: candidateFormData.confirmPassword,
      address: candidateFormData.address,
    };
    // console.log(data)

    try {


      const response = await fetch('https://job-portal-website-by5i.onrender.com/job-Portal/Employee/candidateSignUp-By-Employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authData.token}`
        },
        body: JSON.stringify(data),
      });

      // console.log('response', response);
      if (response.ok) {
        setSnackbarMessage('Candidate added successfully');
        setSnackbarOpen(true);
        console.log('Candidate added successfully');
        setCandidateFormData ({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          address: '',
        });
      } else {
        console.error('Error updating Password:', response);
        setSnackbarMessage('Error updating Password');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Error adding candidate:', error.message);
      setSnackbarMessage('Error adding candidate');
      setSnackbarOpen(true);
    }
  };

// --------------------------------------------------------------

const [messageFormData, setMessageFormData] = useState({
  recipient: '',
  message: '',
  document: null,
});

const [applicantList, setApplicantList] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://job-portal-website-by5i.onrender.com/job-Portal/Employee/allCandidates', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authData.token}`,
        },
      });
      const data = await response.json();
      setApplicantList(data.candidatesList);
    } catch (error) {
      console.error('Error fetching applicants:', error);
    }
  };

  fetchData();
}, [authData.token]);

const handleMessageDropdownChange = (event) => {
  setMessageFormData({
    ...messageFormData,
    recipient: event.target.value,
  });
};

const handleMessageChange = (event) => {
  setMessageFormData({
    ...messageFormData,
    message: event.target.value,
  });
};

const handleDocumentUpload = (event) => {
  setMessageFormData({
    ...messageFormData,
    document: event.target.files[0],
  });
};
const handleSendMessage = async () => {
  try {
    

    const response = await fetch('https://job-portal-website-by5i.onrender.com/job-Portal/Employee/sendMessageToApplicant', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authData.token}`,
      },
      body: messageFormData,
    });

    // setMessageFormData({
    //   recipient: '',
    //   message: '',
    //   document: null,
    // });
    
  } catch (error) {
    console.error('Error sending message:', error);
  }
   setMessageFormData({
      recipient: '',
      message: '',
      document: null,
    });
};



// --------------------------------------password Change

  const [passwordFormData, setPasswordFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handlePasswordInputChange = (e) => {
    setPasswordFormData({
      ...passwordFormData,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  console.log(passwordFormData)

 
const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/Employee/change-Password', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authData.token}`,
      },
      body: JSON.stringify(passwordFormData),
    });

    console.log(passwordFormData);
    console.log(response);
    if (response.ok) {
      setSnackbarMessage('Password Updated sucessfully');
      setSnackbarOpen(true);
     
      setPasswordFormData ({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } else {
      console.error('Error adding candidate:', response);
      setSnackbarMessage('Error while updating password');
      setSnackbarOpen(true);
    }
  } catch (error) {
    console.error('Error updating Password:', error.message);
    setSnackbarMessage('Error updating Password');
    setSnackbarOpen(true);
  }
}

  const handleLogout = () => {
    logout();
    localStorage.removeItem('employerToken');
    localStorage.removeItem('employerEmailId');
    navigate('/');

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

  // Post a new job------------------------------------------
  const [postJobFormData, setPostJobFormData] = useState({
    company: '',
    jobTitle: '',
    companyName: '',
    NOC: '',
    jobType: '',
    jobCategory: '',
    jobIndustry: '',
    positionAvailable: '',
    salary: {
      min: '',
      max: '',
    },
    workingExperience: {
      min: '',
      max: '',
    },
    salaryPeriod: '',
    skills: '',
    jobDescription: '',
    EmployementType: '',
    education: '',
    country: '',
    Province: '',
    City: '',
    location: '',
    status: '',
    PostedDate: '',
    ExpiryDate: '',
  });

  
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const handlePostJobInputChange = (e) => {
    const { name, value } = e.target;

    // Handle nested fields like salary and workingExperience
    if (name.includes('.')) {
      const [parentField, childField] = name.split('.');
      setPostJobFormData((prevData) => ({
        ...prevData,
        [parentField]: {
          ...prevData[parentField],
          [childField]: value,
        },
      }));
    } else {
      setPostJobFormData({
        ...postJobFormData,
        [name]: value,
      });
    }
  };

  const handlePostJobSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://job-portal-website-by5i.onrender.com/Job-Portal/JobRoute/addJob',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postJobFormData),
        }
      );

      if (response.ok) {
        console.log('Job successfully posted!', response);

        if (response.status === 200) {
          
          setSnackbarSeverity('success');
          setSnackbarMessage('Job posted successfully');
          setSnackbarOpen(true);

          setPostJobFormData({
            company: '',
            jobTitle: '',
            companyName: '',
            NOC: '',
            jobType: '',
            jobCategory: '',
            jobIndustry: '',
            positionAvailable: '',
            salary: {
              min: '',
              max: '',
            },
            workingExperience: {
              min: '',
              max: '',
            },
            salaryPeriod: '',
            skills: '',
            jobDescription: '',
            EmployementType: '',
            education: '',
            country: '',
            Province: '',
            City: '',
            location: '',
            status: '',
            PostedDate: '',
            ExpiryDate: '',
          });

        }
      } else {
        console.error('Failed to post job', response);
        setSnackbarSeverity('error');
        setSnackbarMessage('Failed to post job. Please try again.');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('An error occurred while posting the job', error);

      // Show error Snackbar
      setSnackbarSeverity('error');
      setSnackbarMessage('An error occurred. Please try again.');
      setSnackbarOpen(true);
    }
  };

// ----------------------------------------------------------
  const StyledButton = styled(Button)({
    marginBottom: 8,
    width: '100%',
    fontFamily: 'serif',
    fontSize: '12px',
    color: 'rgb(117, 117, 117)',
    fontWeight: 'bold',
    padding: '10px',
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
                    {/* <tbody>
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
                    </tbody> */}
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
                          onChange={handleMessageDropdownChange}
                          label="Recipient"
                          required
                        >
                          <MenuItem value="">Select a recipient</MenuItem>
                          {applicantList.map((applicant) => (
                            <MenuItem key={applicant.email} value={applicant.email}>
                              {applicant.email} 
                            </MenuItem>
                          ))}
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

              <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              >
                <Alert severity={snackbarSeverity} onClose={handleSnackbarClose}>
                  {snackbarMessage}
                </Alert>
              </Snackbar>
              {displayContent === 'Post A New job' && (


                <form onSubmit={handlePostJobSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Company"
                        name="company"
                        fullWidth
                        value={postJobFormData.company}
                        onChange={handlePostJobInputChange}
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
                        label="Job Title"
                        name="jobTitle"
                        fullWidth
                        value={postJobFormData.jobTitle}

                        onChange={handlePostJobInputChange}
                        required
                        InputProps={{
                          // readOnly: true,
                          style: {
                            fontSize: '12px', padding: '1px',
                            borderRadius: '10px'
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Company Name"
                        // type="companyName"
                        name="companyName"
                        fullWidth
                        value={postJobFormData.companyName}
                        onChange={handlePostJobInputChange}
                        required
                        InputProps={{
                          // readOnly: true,
                          style: {
                            fontSize: '12px', padding: '1px',
                            borderRadius: '10px'
                          },
                        }}
                      />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="NOC"
                        name="NOC"
                        fullWidth
                        value={postJobFormData.NOC}
                        onChange={handlePostJobInputChange}
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
                        label="Job Type"
                        name="jobType"
                        fullWidth
                        value={postJobFormData.jobType}
                        onChange={handlePostJobInputChange}
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
                        label="Job Category"
                        name="jobCategory"
                        fullWidth
                        value={postJobFormData.jobCategory}
                        onChange={handlePostJobInputChange}
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
                        label="Job Industry"
                        name="jobIndustry"
                        fullWidth
                        value={postJobFormData.jobIndustry}
                        onChange={handlePostJobInputChange}
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
                        label="Position Available"
                        name="positionAvailable"
                        fullWidth
                        value={postJobFormData.positionAvailable}
                        onChange={handlePostJobInputChange}
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
                        label="Minimum Working Experience"
                        name="workingExperience.min"
                        fullWidth
                        value={postJobFormData.workingExperience.min}
                        onChange={handlePostJobInputChange}
                        required
                        InputProps={{
                          style: {
                            fontSize: '12px',
                            padding: '1px',
                            borderRadius: '10px',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Maximum Working Experience"
                        name="workingExperience.max"
                        fullWidth
                        value={postJobFormData.workingExperience.max}
                        onChange={handlePostJobInputChange}
                        required
                        InputProps={{
                          style: {
                            fontSize: '12px',
                            padding: '1px',
                            borderRadius: '10px',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Minimum Salary"
                        name="salary.min"
                        fullWidth
                        value={postJobFormData.salary.min}
                        onChange={handlePostJobInputChange}
                        required
                        InputProps={{
                          style: {
                            fontSize: '12px',
                            padding: '1px',
                            borderRadius: '10px',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Maximum Salary"
                        name="salary.max"
                        fullWidth
                        value={postJobFormData.salary.max}
                        onChange={handlePostJobInputChange}
                        required
                        InputProps={{
                          style: {
                            fontSize: '12px',
                            padding: '1px',
                            borderRadius: '10px',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Skills"
                        name="skills"
                        fullWidth
                        value={postJobFormData.skills}
                        onChange={handlePostJobInputChange}
                        required
                        InputProps={{
                          // readOnly: true,
                          style: {
                            fontSize: '12px', padding: '1px',
                            borderRadius: '10px'
                          },
                        }}
                      />
                    </Grid>
                    {/* <Typography variant="h7" style={{ marginTop: '10px', display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'rgb(117, 117, 117)' }} >

                      Salary
                    </Typography> */}

                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Salary Period"
                        name="salaryPeriod"
                        fullWidth
                        value={postJobFormData.salaryPeriod}
                        onChange={handlePostJobInputChange}
                        required
                        InputProps={{
                          style: {
                            fontSize: '12px', padding: '1px',
                            borderRadius: '10px'
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} >
                      <TextField
                        label="Job Description"
                        name="jobDescription"
                        fullWidth
                        value={postJobFormData.jobDescription}
                        onChange={handlePostJobInputChange}
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
                        label="Employement Type"
                        type="text"
                        name="EmployementType"
                        fullWidth
                        value={postJobFormData.EmployementType}
                        onChange={handlePostJobInputChange}
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
                        label="Education"
                        type="text"
                        name="education"
                        fullWidth
                        value={postJobFormData.education}
                        onChange={handlePostJobInputChange}
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
                        type="text"
                        name="country"
                        fullWidth
                        value={postJobFormData.country}
                        onChange={handlePostJobInputChange}
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
                        type="text"
                        name="Province"
                        fullWidth
                        value={postJobFormData.Province}
                        onChange={handlePostJobInputChange}
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
                        type="text"
                        name="City"
                        fullWidth
                        value={postJobFormData.City}
                        onChange={handlePostJobInputChange}
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
                        label="Location"
                        type="text"
                        name="location"
                        fullWidth
                        value={postJobFormData.location}
                        onChange={handlePostJobInputChange}
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
                        label="Status"
                        type="text"
                        name="status"
                        fullWidth
                        value={postJobFormData.status}
                        onChange={handlePostJobInputChange}
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
                        label="Posted Date"
                        type="date"
                        name="PostedDate"
                        fullWidth
                        value={postJobFormData.PostedDate}
                        onChange={handlePostJobInputChange}
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
                        label="Expiry Date"
                        type="date"
                        name="ExpiryDate"
                        fullWidth
                        value={postJobFormData.ExpiryDate}
                        onChange={handlePostJobInputChange}
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
                      <Button type="submit" variant="contained"
                        color="primary"

                        onClick={handlePostJobSubmit}>

                        Post Job
                      </Button>
                    </Grid>

                  </Grid>

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

                  {/* {successMessage && (
                    <div style={{ color: 'green', marginTop: '10px' }}>
                      {successMessage}
                    </div>
                  )} */}

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
                        value={passwordFormData.oldPassword}
                        onChange={handlePasswordInputChange}
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
                        value={passwordFormData.newPassword}
                        onChange={handlePasswordInputChange}
                        required
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6} >
                      <TextField
                        label="Confirm New Password"
                        variant="outlined"
                        name="confirmPassword"
                        value={passwordFormData.confirmPassword}
                        onChange={handlePasswordInputChange}
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
