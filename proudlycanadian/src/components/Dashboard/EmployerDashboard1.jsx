
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar.jsx';
import Footer from "../Footer.jsx";
import {
  Container, Grid, Paper, Typography, Button, styled, Card, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, IconButton, Alert, Snackbar, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import pc from '../../images/pc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faLocation, faMapMarker, faTags, faIndustry, faClock, faEye, faPen, faUser, faUpload, faPaperPlane, faImage, faEnvelope, faBuilding, faThLarge, faUserAlt, faMessage, faPerson, faAdd, faUserCircle, faUserPlus, faTasks, faTasksAlt, faFile, faLock, faSignOut, faEdit, faTrash, faBell, faSearch, faCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../AuthContext/AuthContext.jsx'

let count = 0;



function ProfileInformation({ handleClose, handleInputChange }) {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const { authData } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    organizationType: '',
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

  const handleCancel = () => {
    handleClose();
  };





  return (

    <form style={{
      padding: '30px', borderRadius: '8px', width: '450px', margin: 'auto', height: '100%',
      boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.2), -2px 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div className='text-center text-lg mb-8 font-bold text-gray-500 border-b-2 p-2'>
        <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
        Personal Information
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            name="firstName"
            fullWidth
            value={`${formData.firstName} `}
            // onChange={handleInputChange}
            required
            InputLabelProps={{
              style: { fontSize: 'small' },
            }}

            InputProps={{
              readOnly: true,
              style: {
                fontSize: 'small', padding: '1px',
                borderRadius: '10px', height: '42px',
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
                height: '42px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              },

            }}
            InputLabelProps={{
              style: { fontSize: 'small' },
            }}

          />
        </Grid>
        <Grid item xs={12}>
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
                height: '42px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              },

            }}
            InputLabelProps={{
              style: { fontSize: 'small' },
            }}
          />
        </Grid>


        <Grid item xs={12}>
          <div className=' text-sm  font-bold text-gray-500 border-b-1 p-2'>
            Company Information
          </div>
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
                height: '42px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              },

            }}
            InputLabelProps={{
              style: { fontSize: 'small' },
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
                height: '42px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              },

            }}
            InputLabelProps={{
              style: { fontSize: 'smaller' },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel style={{ fontSize: 'smaller' }}>Organisation Type</InputLabel>
            <Select
              label="Organisation Type"
              name="organizationType"
              value={formData.organizationType}
              onChange={handleInputChange}
              style={{
                height: '42px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              }}
            >
              <MenuItem value="public" >Public</MenuItem>
              <MenuItem value="private" >Private</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required>
            <InputLabel style={{ fontSize: 'smaller' }}>Country</InputLabel>
            <Select
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              style={{
                height: '42px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              }}
            >
              <MenuItem value="Canada">Canada</MenuItem>

            </Select>
          </FormControl>
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
                height: '42px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              },

            }}
            InputLabelProps={{
              style: { fontSize: 'small' },
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
                height: '42px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              },

            }}
            InputLabelProps={{
              style: { fontSize: 'small' },
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
                height: '42px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              },

            }}
            InputLabelProps={{
              style: { fontSize: 'small' },
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
                height: '42px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              },

            }}
            InputLabelProps={{
              style: { fontSize: 'small' },
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
                height: '42px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              },

            }}
            InputLabelProps={{
              style: { fontSize: 'small' },
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
                height: '42px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              },

            }}
            InputLabelProps={{
              style: { fontSize: 'small' },
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
                height: '62px', fontSize: 'small', padding: '1px',
                borderRadius: '10px'
              },

            }}
            InputLabelProps={{
              style: { fontSize: 'small' },
            }}
          />
        </Grid>


        <Grid item xs={6}>
          <Button type="submit" variant="contained" color="primary"
            fullWidth onClick={handleClose} style={{ marginTop: '10px' }}>

            Save
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            type="submit" variant="contained"
            color="primary"
            fullWidth
            onClick={handleCancel}
            style={{ marginTop: '10px' }}
          >
            Cancel
          </Button>
        </Grid>

      </Grid>

    </form>
  );
}



function EmployerDashboard() {



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [sortedCardInfo, setSortedCardInfo] = useState([]);
  const cardsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const { logout, authData } = useAuth();
  const navigate = useNavigate();
  // ----------------------------fake navigation--------------------------------
  // const [displayContents, setDisplayContents] = useState('');
  // const handleToggleDisplayContent = () => {

  //   setDisplayContents((prev) => (prev === 'Post A New Job' ? '' : 'Post A New Job'));
  // };
  // const navigateToEmployers = () => {
  //   navigate('/employers');
  // };
  // 
  const [packageDetails, setPackageDetails] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const [passwordMatch, setPasswordMatch] = useState(true);

  const [displayContent, setDisplayContent] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [displayCandidates, setDisplayCandidates] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  // --------------------------------------------------------------
  // Manage jobs

  const [hotJobs, setHotJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/Employee/allJobs', {
        headers: {
          Authorization: `Bearer ${authData.token}`,
        },
      });


      if (response.ok) {
        const data = await response.json();
        setHotJobs(data.jobsList);
        console.log(data.jobsList)
      } else {
        console.error('Error fetching jobs. Status:', response.status);
        const errorData = await response.json();
        console.error('Error data:', errorData);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };


  const handleButtonClick1 = (content) => {
    if (content === 'Manage Jobs') {

      fetchJobs();
    }
    setDisplayContent(content);
  };
  //----------------------------------------------- 
  // const handleProfilePictureChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setSelectedImage(imageUrl);
  //   }
  // }

  // const handleProfilePictureSubmit = (event) => {
  //   event.preventDefault();

  // };

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
    console.log(data)

    try {


      const response = await fetch('https://job-portal-website-by5i.onrender.com/job-Portal/Employee/candidateSignUp-By-Employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authData.token}`
        },
        body: JSON.stringify(data),
      });

      console.log('response', response);
      if (response.ok) {
        setSnackbarMessage('Candidate added successfully');
        setSnackbarOpen(true);
        console.log('Candidate added successfully');
        setCandidateFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          address: '',
        });
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

  });
  const [applicantList, setApplicantList] = useState([]);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editedApplicant, setEditedApplicant] = useState({
    candidateId: '',
    firstName: '',
    lastName: '',
  });



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

      console.log(data)
    } catch (error) {
      console.error('Error fetching applicants:', error);
    }
  };



  const handleButtonClick3 = async () => {
    fetchData()
  };


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

  const handleEdit = (applicant) => {
    setEditedApplicant({
      candidateId: applicant.candidateId,
      firstName: applicant.firstName,
      lastName: applicant.lastName,
    });
    setIsEditFormOpen(true);
  };

  const handleSendMessage = async () => {
    const data = {


      email: messageFormData.recipient,
      message: messageFormData.message,
    };
    console.log(data)
    try {
      const response = await fetch('https://job-portal-website-by5i.onrender.com/job-Portal/Employee/sendMessageToApplicant',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authData.token}`,
          },
          body: JSON.stringify(data),
        });

      console.log(response);
      console.log(data);

      if (response.ok) {
        console.log('Message sent successfully');
      } else {
        console.error('Error sending message:', response);
      }

      setMessageFormData({
        recipient: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  const handleFaUpdate = () => {
    setIsEditFormOpen(false);

  };

  const handlePopUpUpdate = async () => {
    try {
      const response = await fetch(
        `https://job-portal-website-by5i.onrender.com/Job-Portal/updateApplicant/${editedApplicant.candidateId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',

          },
          body: JSON.stringify({
            firstName: editedApplicant.firstName,
            lastName: editedApplicant.lastName,
          }),
        }
      );
      console.log(response)
      if (response.ok) {
        console.log('Applicant updated successfully');
        setIsEditFormOpen(false);
      } else {
        console.error('Error updating applicant:', response);
      }
    } catch (error) {
      console.error('Error updating applicant:', error);
    }
  };

  const handleDelete = async (applicant) => {
    try {
      const response = await fetch(
        `https://job-portal-website-by5i.onrender.com/Job-Portal/deleteApplicant/${applicant.candidateId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',

          },
        }
      );

      if (response.ok) {
        console.log('Applicant deleted successfully');
        setSnackbarOpen(true);
        setSnackbarMessage('Candidate deleted successfully');

      } else {
        console.error('Error deleting applicant:', response);
      }
    } catch (error) {
      console.error('Error deleting applicant:', error);
    }
  };
  // ----------------My Package----------------
  const fetchPackageDetails = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${authData.token}`,
      };

      const response = await fetch(
        'https://job-portal-website-by5i.onrender.com/job-Portal/Employee/my-Packages',
        {
          method: 'GET',
          headers: headers,
        }
      );

      if (!response.ok) {
        console.error('Error fetching package details:', response.statusText);
        return;
      }

      const responseData = await response.json();
      console.log('Package details:', responseData);
      setPackageDetails(responseData);
      const sortedData = responseData.sort((a, b) => {
        const priceA = a && a.Price ? parseFloat(a.Price.replace('$', '')) : 0;
        const priceB = b && b.Price ? parseFloat(b.Price.replace('$', '')) : 0;
        return priceB - priceA;
      });
      setSortedCardInfo(sortedData);
    } catch (error) {
      console.error('Error fetching package details:', error);
    }
  };

  console.log(sortedCardInfo)
  const totalCards = sortedCardInfo.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const startIdx = (currentPage - 1) * cardsPerPage;
  const endIdx = Math.min(currentPage * cardsPerPage, totalCards);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage < totalPages) {
        return prevPage + 1;
      }
      return prevPage;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage > 1) {
        return prevPage - 1;
      }
      return prevPage;
    });
  };




  // --------------------------------------password Change--------------------------------

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

        setPasswordFormData({
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
        logout()
        navigate('/employers/auth/login')
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
    navigate('/');

  };



  const handleButtonClick = async (content) => {
    setDisplayContent(content);

    if (content === 'Profile Picture') {
      setIsProfileOpen(true);
    } else if (content === 'Messages') {
      fetchData();
      setIsProfileOpen(false);
    }
    else if (content === 'My Packages') {
      await fetchPackageDetails();
      setIsProfileOpen(false);
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


  const getCurrentDate = () => {
    const today = new Date();
    const month = `${today.getMonth() + 1}`.padStart(2, '0');
    const day = `${today.getDate()}`.padStart(2, '0');
    return `${today.getFullYear()}-${month}-${day}`;
  };

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
    country: 'Canada',
    Province: '',
    City: '',
    location: '',
    status: '',
    PostedDate: getCurrentDate(),
    ExpiryDate: getCurrentDate(),
  });

  const provincesInCanada = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
  ];

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };



  const handlePostJobInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parentField, childField] = name.split('.');
      setPostJobFormData((prevData) => ({
        ...prevData,
        [parentField]: {
          ...prevData[parentField],
          [childField]: value,
        },
      }));
      localStorage.setItem('postJobFormData', JSON.stringify({
        ...postJobFormData,
        [name]: value,
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
    // https://job-portal-website-by5i.onrender.com/Job-Portal/Employee/jobsPosted-By-Employee/658416ccc805ca8bf852570f
    try {
      const response = await fetch(
        'https://job-portal-website-by5i.onrender.com/Job-Portal/Employee/postJob',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authData.token}`,
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
          localStorage.removeItem('postJobFormData');

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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
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
    <div className='bg-gray-100'>

      <div className='rounded-lg bg-white p-6 flex
       relative border-b-4 border-blue-900'>
        <img src={pc} className="h-8" alt="logo-img" />
        {/* Notification Icon */}
        <div className='absolute top-2 right-5  '>
          <IconButton >
            <FontAwesomeIcon icon={faBell} className=' text-sm text-blue-900' title="Notification" />
          </IconButton>
        </div>

        {/* Profile Icon in the top right corner */}
        <div className='absolute top-2 right-8 '>
          <IconButton>
            <FontAwesomeIcon icon={faUserCircle} size='2x' className='text-zinc-600' title="Profile" />
          </IconButton>
        </div>

        {/* Search Input Box and Icon */}
        <div className='absolute top-2 right-24 flex items-center p-4'>
          <input
            type="text"
            placeholder="Search..."
            className="px-1 py-1 border border-gray-300 rounded-2xl focus:outline-none focus:border-zinc-500"

          />
          <FontAwesomeIcon icon={faSearch} size='lg' className='text-zinc-500 p-2' title="Search" />

        </div>



      </div>

      <Container className='mt-5'>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={3} >
            <Paper style={{ padding: 16, height: '100%' }}>

              {/* <form onSubmit={handleProfilePictureSubmit} className='text-center'>
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
              </form> */}

              <div className='mt-5 '>
                <StyledButton onClick={() => handleButtonClick('Profile Picture')}>
                  <FontAwesomeIcon icon={faUserCircle} className='mr-2' />
                  Profile
                </StyledButton>
              </div>

              <div >
                <StyledButton onClick={() => handleButtonClick1('Manage Jobs')}>
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
              {displayContent === 'Manage Jobs' && (
                <div className='mt-10'>
                  <div className='mt-10'>
                    <div className="mx-auto" style={{ maxWidth: '400px' }}>
                      <CardContent className="text-center">
                        <Typography variant="h6" style={{ marginTop: '10px', fontWeight: 'bold', color: '#4B5563' }}>Manage Jobs</Typography>
                      </CardContent>
                    </div>
                  </div>
                  <table className="min-w-full border border-collapse border-gray-300" style={{ borderTop: 'none' }}>
                    <thead>
                      <tr>
                        <th className="text-center p-3 
                         border-l-2 border-r-2 text-gray-500">Title</th>
                        <th className="text-center p-3
                          border-r-2 text-gray-500">Application</th>
                        <th className="text-center p-3 
                         border-r-2 text-gray-500">Date</th>
                        <th className="text-center p-3 
                         border-r-2 text-gray-500">Status</th>
                        <th className="text-center p-3 
                         border-r-2 text-gray-500">Action</th>
                      </tr>
                      <tr>
                        <td colSpan="5" className="border-b "></td>
                      </tr>
                    </thead>
                    <tbody className='mt-10'>
                      {hotJobs.map((job) => (
                        <tr key={`${job._id}`} className='mb-10 '>
                          <td className="text-center p-3  border-l border-r text-gray-500">
                            {job.jobTitle}
                          </td>
                          <td className="text-center p-3  border-r text-gray-500">
                            {job.jobIndustry}
                          </td>
                          <td className="text-center p-3  border-r text-gray-500">
                            {formatDate(job.PostedDate)}
                          </td>
                          <td className="text-center p-3  border-r text-gray-500">
                            <button className='bg-blue-900 rounded-full text-white p-3 text-xs font-bold'>
                              {job.status}
                            </button>
                          </td>
                          <td className="text-center p-3  border-r space-x-4 text-gray-500">
                            <FontAwesomeIcon icon={faEye} /> <FontAwesomeIcon icon={faPen} />
                          </td>
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
                        <InputLabel id="recipient-label">
                          Recipient</InputLabel>
                        <Select
                          labelId="recipient-label"
                          id="recipient"
                          value={messageFormData.recipient}
                          onChange={handleMessageDropdownChange}
                          label="Recipient"
                          onClick={handleButtonClick3}
                          required
                        >
                          <MenuItem value="">Select a recipient</MenuItem>
                          {applicantList.map((applicant) => (
                            <MenuItem key={applicant.candidateId} value={applicant.email}>
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
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell>Email</TableCell>
                              <TableCell>Phone Number</TableCell>
                              <TableCell>Address</TableCell>
                              <TableCell>Actions</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {applicantList.map((applicant) => (
                              <TableRow key={applicant.candidateId
                              }>
                                <TableCell>{applicant.Name}</TableCell>
                                <TableCell>{applicant.email}</TableCell>
                                <TableCell>{applicant.mobileNo}</TableCell>
                                <TableCell>{applicant.address}</TableCell>
                                <TableCell>
                                  <IconButton onClick={() => handleEdit(applicant)}>
                                    <FontAwesomeIcon icon={faEdit} className='text-xs' />
                                  </IconButton>
                                  <IconButton onClick={() => handleEdit(applicant)}>
                                    <FontAwesomeIcon icon={faPaperPlane} className='text-xs' />
                                  </IconButton>
                                  <IconButton onClick={() => handleDelete(applicant)}>
                                    <FontAwesomeIcon icon={faTrash} className='text-xs' />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>

                        </Table>
                      </TableContainer>
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
              <Dialog open={isEditFormOpen} onClose={() => setIsEditFormOpen(false)}>
                <DialogTitle className=' text-gray-600'>Edit Candidate Data</DialogTitle>
                <DialogContent>

                  <TextField
                    label="First Name"
                    variant="outlined"
                    name="firstName"
                    value={editedApplicant.firstName}
                    onChange={(e) => setEditedApplicant({ ...editedApplicant, firstName: e.target.value })}
                    fullWidth
                    margin="normal"
                    style={{ height: '50px' }}
                    InputProps={{ style: { borderRadius: '10px' } }}
                  />


                  <TextField
                    label="Last Name"
                    variant="outlined"
                    name="lastName"
                    value={editedApplicant.lastName}
                    onChange={(e) => setEditedApplicant({ ...editedApplicant, lastName: e.target.value })}
                    fullWidth
                    margin="normal"
                    style={{ height: '50px' }}
                    InputProps={{ style: { borderRadius: '10px' } }}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={editedApplicant.email}
                    onChange={(e) => setEditedApplicant({ ...editedApplicant, email: e.target.value })}
                    fullWidth
                    margin="normal"
                    style={{ height: '50px' }}
                    InputProps={{ style: { borderRadius: '10px' } }}
                  />
                  <TextField
                    label="Phone Number "
                    variant="outlined"
                    name="phoneNumber"
                    value={editedApplicant.phoneNumber}
                    onChange={(e) => setEditedApplicant({ ...editedApplicant, phoneNumber: e.target.value })}
                    fullWidth
                    margin="normal"
                    style={{ height: '50px' }}
                    InputProps={{ style: { borderRadius: '10px' } }}
                  />
                  <TextField
                    label="Address"
                    variant="outlined"
                    name="address"
                    value={editedApplicant.address}
                    onChange={(e) => setEditedApplicant({ ...editedApplicant, address: e.target.value })}
                    fullWidth
                    margin="normal"
                    style={{ height: '50px' }}
                    InputProps={{ style: { borderRadius: '10px' } }}
                  />

                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setIsEditFormOpen(false)} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handlePopUpUpdate} color="primary">
                    Update
                  </Button>
                </DialogActions>
              </Dialog>


              {displayContent === 'Post A New job' && (


                <form onSubmit={handlePostJobSubmit} style={{
                  padding: '30px', borderRadius: '8px', width: '100%', maxWidth: '600px', margin: 'auto',
                  boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.2), -2px 2px 10px rgba(0, 0, 0, 0.1)'
                }}>
                  <div className='text-center text-lg mb-8 font-bold text-gray-500 border-b-2 p-2'>
                    Post New Job
                  </div>
                  <Grid container spacing={2}>

                    <Grid item xs={12} sm={6}>
                      <TextField

                        label="Company"
                        name="company"
                        fullWidth
                        value={postJobFormData.company}
                        onChange={handlePostJobInputChange}
                        required
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
                        InputProps={{
                          // readOnly: true,
                          style: {
                            fontSize: '12px', padding: '1px',
                            borderRadius: '10px'
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        label="Company Name"
                        // type="companyName"
                        name="companyName"
                        fullWidth
                        value={postJobFormData.companyName}
                        onChange={handlePostJobInputChange}
                        required
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
                        InputProps={{
                          style: {
                            fontSize: '12px', padding: '1px',
                            borderRadius: '10px'
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth required>
                        <InputLabel style={{ fontSize: '12px' }}>Job Type</InputLabel>
                        <Select
                          label="Job Type"
                          name="jobType"
                          value={postJobFormData.jobType}
                          onChange={handlePostJobInputChange}
                          style={{ fontSize: '12px', padding: '1px', borderRadius: '10px' }}
                        >
                          <MenuItem value="Full-Time">Full-Time</MenuItem>
                          <MenuItem value="Part-Time">Part-Time</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Job Category"
                        name="jobCategory"
                        fullWidth
                        value={postJobFormData.jobCategory}
                        onChange={handlePostJobInputChange}
                        required
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
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
                        label="Salary Period"
                        name="salaryPeriod"
                        fullWidth
                        value={postJobFormData.salaryPeriod}
                        onChange={handlePostJobInputChange}
                        required
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
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
                        label="Job Description"
                        name="jobDescription"
                        fullWidth
                        value={postJobFormData.jobDescription}
                        onChange={handlePostJobInputChange}
                        required
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
                        InputProps={{
                          style: {
                            fontSize: '12px', padding: '1px',
                            borderRadius: '10px'
                          },
                        }}
                      />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth required>
                        <InputLabel style={{ fontSize: '12px' }}>Employment Type</InputLabel>
                        <Select
                          label="Employment Type"
                          name="EmployementType"
                          value={postJobFormData.EmployementType}
                          onChange={handlePostJobInputChange}
                          style={{ fontSize: '12px', padding: '1px', borderRadius: '10px' }}
                        >
                          <MenuItem value="Permanent">Permanent</MenuItem>
                          <MenuItem value="Temporary">Temporary</MenuItem>
                          <MenuItem value="Contractual">Contractual</MenuItem>
                        </Select>
                      </FormControl>
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
                        InputProps={{
                          style: {
                            fontSize: '12px', padding: '1px',
                            borderRadius: '10px'
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth required>
                        <InputLabel style={{ fontSize: '12px' }}>Country</InputLabel>
                        <Select
                          label="Country"
                          name="country"
                          value={postJobFormData.country}
                          onChange={handlePostJobInputChange}
                          style={{ fontSize: '12px', padding: '1px', borderRadius: '10px' }}

                        >
                          <MenuItem value="Canada">Canada</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth required>
                        <InputLabel style={{ fontSize: '12px' }}>Province</InputLabel>
                        <Select
                          label="Province"
                          name="province"
                          value={postJobFormData.province}
                          onChange={handlePostJobInputChange}
                          style={{ fontSize: '12px', padding: '1px', borderRadius: '10px' }}
                        >
                          {provincesInCanada.map((province) => (
                            <MenuItem key={province} value={province}>
                              {province}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
                        InputProps={{
                          style: {
                            fontSize: '12px', padding: '1px',
                            borderRadius: '10px'
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth required>
                        <InputLabel style={{ fontSize: '12px' }}>Status</InputLabel>
                        <Select
                          label="Status"
                          name="status"
                          value={postJobFormData.status}
                          onChange={handlePostJobInputChange}
                          style={{ fontSize: '12px', padding: '1px', borderRadius: '10px' }}
                        >
                          <MenuItem value="Active">Active</MenuItem>
                          <MenuItem value="Expired">Expired</MenuItem>
                        </Select>
                      </FormControl>
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
                        InputLabelProps={{
                          style: { fontSize: '12px' },
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
                          min: getCurrentDate(),
                        }}
                        InputLabelProps={{
                          style: { fontSize: '12px' },
                        }}
                      />
                    </Grid>


                    <Grid item xs={6} sm={6}>
                      <Button type="submit" variant="contained"
                        color="primary"

                        onClick={handlePostJobSubmit}>

                        Post Job
                      </Button>
                    </Grid>

                  </Grid>

                </form>


              )}
              {displayContent === 'My Packages' && packageDetails && (
                <div >
                  <form className='p-10 text-center'>
                    <Typography variant="h6">
                      Please Click Below To Buy A Job Posting Package
                    </Typography>
                    <Button
                      type="submit"
                      onClick={handlePackage}
                      variant="contained"
                      color="primary"
                      style={{
                        backgroundColor: 'rgb(30 58 138)',
                        borderRadius: '20px',
                        marginTop: '25px',
                        boxShadow: '2px 2px 2px rgb(30 58 140)',
                      }}
                    >
                      Packages & Plans
                    </Button>
                  </form>

                  {/* Display package details in a card */}

                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {packageDetails.Packages.map((packageDetail) => (
                      <Card
                        key={packageDetail._id}
                        className="hover-card"
                        style={{
                          flex: 1,
                          maxWidth: '300px',
                          height: '420px',
                          margin: '10px',
                          borderRadius: '15px',
                          boxShadow: '0px 4px 8px rgba(0, 0, 255, 0.7)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          position: 'relative',
                        }}
                      >
                        <Box p={2} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'space-between' }}>
                          <div className='rounded-full bg-blue-200 font-semibold text-blue-950 shadow-lg shadow-blue-200 mt-5 '
                            style={{
                              padding: '25px',
                              fontSize: '25px',
                            }}
                          >
                            ₹ {packageDetail.Price}
                          </div>
                          <Typography variant="body2" color="text.secondary" className='text-center font-bold'>
                            Membership: {packageDetail.packageTitle}
                          </Typography>
                          <Typography variant="h7" className='text-center font-semibold text-blue-950'>
                            {packageDetail.noOfPosts} posts for {packageDetail.noOfDays} days
                          </Typography>
                          <Typography variant="body2" color="text.secondary" className='text-center font-bold'>
                            Expires on: {packageDetail.expiryDate}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" className='text-center font-bold'>
                            {packageDetail.packageDetails}
                          </Typography>
                          {packageDetail.status === 'Active' ? (
                            <Typography>
                              <FontAwesomeIcon icon={faCircleCheck} className='text-green-600' /> Active
                            </Typography>
                          ) : (
                            <Typography>
                              <FontAwesomeIcon icon={faCircle} className='text-red-600' /> Expire
                            </Typography>
                          )}
                        </Box>
                      </Card>
                    ))}
                  </div>
                </div>
              )}




              {displayContent === 'Change Password' && (
                <form onSubmit={handleUpdate} className='p-10  '>

                  {/* {successMessage && (
                    <div style={{ color: 'green', marginTop: '10px' }}>
                      {successMessage}
                    </div>
                  )} */}

                  <div className='text-center text-lg mb-8 font-bold text-gray-500 border-b-2 p-2'>

                    <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
                    Change Password
                  </div>
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

            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default EmployerDashboard;
