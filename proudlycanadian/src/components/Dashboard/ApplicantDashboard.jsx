

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext.jsx'
import {
  Grid,
  Paper,
  Typography,
  Button,
  styled,
  Card,
  CardContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Avatar, Container, Link
} from '@mui/material';
import pc from '../../images/pc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBell,
  faSignal,
  faSignOutAlt,
  faFileUpload,
  faLock,
  faUserCircle,
  faUpload,
  faTasksAlt,
  faSuitcase,
  faCog,
  faBarChart,
  faSearch,
  faMapMarker, faTags, faIndustry, faClock
} from '@fortawesome/free-solid-svg-icons';
import ProfileForm from './ProfileForm.jsx';
import FileUploadForm from './FileUploadForm.jsx';
import ChangePassword from './ChangePassword.jsx';


function ApplicantDashboard() {
  const { logout, authData } = useAuth();
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [allJobDetails, setAllJobDetails] = useState([]);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //--------------------------Profile Form----------------------

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileno: '',
    applicantId: '',
    address: '',
    state: '',
    country: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleProfileSave = async () => {
    try {
      const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/updateApplicant/65840c00dfdda5d18ab656ee', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(formData),
      });
      console.log(response)

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }


      setSnackbarSeverity('success');
      setSnackbarMessage('Profile updated successfully');
    } catch (error) {

      console.error('Error updating profile:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage('Error updating profile');
    } finally {

      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const handleProfileCancel = () => {
    setSelectedIcon(null);
  };

  // -------------------------------------------------------

  const handleLogout = () => {
    setSelectedIcon(null);
    logout();
    localStorage.removeItem('employerToken');
    localStorage.removeItem('employerEmailId');
    navigate('/');

  };
  // -------------------------Password update

  const [changePasswordFormData, setChangePasswordFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChangePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setChangePasswordFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangePasswordUpdate = async () => {
    try {

      const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/change-Password-Applicant', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authData.token}`,
        },
        body: JSON.stringify(changePasswordFormData),
      });
      //       console.log(response)
      // console.log(authData.token)
      // console.log(changePasswordFormData)
      if (!response.ok) {
        throw new Error('Failed to update password');
      }


      setSnackbarSeverity('success');
      setSnackbarMessage('Password updated successfully');
    } catch (error) {

      console.error('Error updating password:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage('Error updating password');
    } finally {

      setSnackbarOpen(true);
    }
  };

  const handleChangePasswordCancel = () => {
    setSelectedIcon(null);
  };


  // -------------------------------------------Resume-------------



  const [fileUploadFormData, setFileUploadFormData] = useState({
    fullName: '',
    aboutMe: '',
    mobileNo: '',
    email: '',
    linkedinProfile: '',
    githubProfile: '',
    address: '',
    highSchool: {
      institute: '',
      passoutYear: '',
      percentage: '',
    },
    intermediate: {
      institute: '',
      passoutYear: '',
      percentage: '',

    },
    ug: {
      institute: '',
      passoutYear: '',
      percentage: '',
    },
    pg: {
      institute: '',
      passoutYear: '',
      percentage: '',

    },
    skills: [],
    achievements: '',
    experienceLevel: 'fresher',
    companyName: '',
    workDetails: '',
    fromYear: '',
    toYear: '',

  });

  const handleFileUploadInputChange = (event) => {
    const { name, value } = event.target;
    const nameArray = name.split('.');
    if (nameArray.length === 2) {
      setFileUploadFormData((prevFormData) => ({
        ...prevFormData,
        [nameArray[0]]: {
          ...prevFormData[nameArray[0]],
          [nameArray[1]]: value,
        },
      }));
    } else {
     
      setFileUploadFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const handleFileUpload = () => {
    console.log('Uploading file:', fileUploadFormData);
    setSelectedIcon(null);
  };

  const formatPostedDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new 
    Date(dateString).toLocaleDateString('en-GB', options);
    return formattedDate;
  };
  

const handleApply = async (jobId) => {
  try {
    console.log(jobId)
    console.log(authData.token)
    const response = await fetch(`https://job-portal-website-by5i.onrender.com/Job-Portal/apply-job/${jobId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authData.token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to apply for the job');
    }
    console.log(response)
    


    setSnackbarSeverity('success');
    setSnackbarMessage('Job application submitted successfully');
  } catch (error) {
    console.error('Error applying for the job:', error);
    setSnackbarSeverity('error');
    setSnackbarMessage('Error applying for the job');
  } finally {
    setSnackbarOpen(true);
  }
};

  
  const handleViewJob = (jobId) => {
    console.log(jobId)
    navigate(`/job-details/${jobId}`);
  };



  const handleIconClick = async (icon) => {
    console.log('Icon Clicked:', icon);

    if (icon === 'profileForm') {
      try {
        const response = await fetch('https://job-portal-website-by5i.onrender.com/job-Portal/applicantProfile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authData.token}`,
          },
        });

        if (!response.ok) {
          console.error('Failed to fetch data. Status:', response.status);
          return;
        }

        const data = await response.json();
        // console.log('Fetched Data:', data.result);

        setFormData({
          firstName: data.result.firstName || '',
          lastName: data.result.lastName || '',
          mobileno: data.result.mobileno || '',
          email: data.result.email || '',
          applicantId: data.result.applicantId || '',
          address: data.result.address || '',
          state: data.result.state || '',
          country: data.result.country || '',
          category: data.result.category || '',
        });


        setSelectedIcon('profileForm');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    else if (icon === 'FileUploadForm') {
      setFileUploadFormData({
        fullName: '',
    aboutMe: '',
    mobileNo: '',
    email: '',
    linkedinProfile: '',
    githubProfile: '',
    address: '',
    highSchool: {
      institute: '',
      passoutYear: '',
      percentage: '',
    },
    intermediate: {
      institute: '',
      passoutYear: '',
      percentage: '',

    },
    ug: {
      institute: '',
      passoutYear: '',
      percentage: '',
    },
    pg: {
      institute: '',
      passoutYear: '',
      percentage: '',

    },
    skills: [],
    achievements: '',
    experienceLevel: 'fresher',
    companyName: '',
    workDetails: '',
    fromYear: '',
    toYear: '',

      });
      setSelectedIcon('fileUploadForm');
    }
    else if (icon === 'ChangePassword') {
      setChangePasswordFormData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      setSelectedIcon('ChangePassword');
    }
    else if (icon === 'faSuitcase') {
      try {
        
        const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/JobRoute/allJobs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        console.log(response)
        if (!response.ok) {
          console.error('Failed to fetch jobs. Status:', response.status);
          return;
        }
  
        const jobsData = await response.json();
        console.log('Fetched Jobs Data:', jobsData);
        setSelectedIcon('faSuitcase');
        setAllJobDetails(jobsData.allJObDetails);

      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }
  };
  console.log('Selected Icon:', selectedIcon);


  return (
    <div className='bg-slate-100'>
      {/* <Navbar />
      <div style={{ height: '90px' }}></div> */}
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
            <FontAwesomeIcon icon={faUserCircle} size='2x' className='text-zinc-600' title="Profile" onClick={() => handleIconClick('profileForm')} />
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
          {/* <IconButton>
            <
          </IconButton> */}
        </div>



      </div>



      <Grid container spacing={2}>
        {/* Left card with 1/3 width */}
        <Grid item xs={10} sm={1} style={{ marginTop: '20px' }}>
          <Paper style={{ padding: '16px', height: '500px', borderBottom: '2px solid #ddd', width: '80px', borderRadius: '15px', boxShadow: '0px 0px 10px #172554' }}>
            <Grid container direction="column" spacing={2}>

              {/* Status Icon */}
              <Grid item style={{ borderBottom: '1px solid #ddd', marginTop: '20px' }}>
                <IconButton>
                  <FontAwesomeIcon icon={faTasksAlt} size='xs' className='text-blue-900' title="Dashboard" />
                </IconButton>
              </Grid>


              <Grid item style={{ borderBottom: '1px solid #ddd', marginTop: '10px' }}>
                <IconButton>
                  <FontAwesomeIcon icon={faSuitcase} size='xs' className='text-blue-900' title="Jobs"
                   onClick={() => handleIconClick('faSuitcase')} />
                </IconButton>
              </Grid>
              {/* Report */}
              <Grid item style={{ borderBottom: '1px solid #ddd', marginTop: '10px' }}>
                <IconButton>
                  <FontAwesomeIcon icon={faBarChart} size='xs' className='text-blue-900' title="Status" />
                </IconButton>
              </Grid>

              {/* Upload File Icon */}
              <Grid item style={{ borderBottom: '1px solid #ddd', marginTop: '10px' }}>
                <IconButton>
                  <FontAwesomeIcon icon={faFileUpload} size='xs' className='text-blue-900' title="Resume upload" onClick={() => handleIconClick('FileUploadForm')} />
                </IconButton>
              </Grid>

              {/* // Password Icon */}
              <Grid item style={{ borderBottom: '1px solid #ddd', marginTop: '10px' }}>
                <IconButton>
                  <FontAwesomeIcon icon={faLock} size='xs' className='text-blue-900' title="Change Password" onClick={() => handleIconClick('ChangePassword')} />
                </IconButton>
              </Grid>

              {/* Signout Icon */}
              <Grid item style={{ borderBottom: '1px solid #ddd', marginTop: '10px' }}>
                <IconButton onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} size='xs' className='text-blue-900' title="LogOut" />
                </IconButton>
              </Grid>
              {/* Setting Icon */}
              <Grid item style={{ marginTop: '10px' }}>
                <IconButton onClick={handleLogout}>
                  <FontAwesomeIcon icon={faCog} size='xs' className='text-blue-900' title="Setting" />
                </IconButton>
              </Grid>

            </Grid>
          </Paper>
        </Grid>

        {/* Right card with 2/3 width */}
        <Grid item xs={10} sm={8} style={{ marginTop: '20px' }} >

          <Paper style={{ padding: '16px', height: '100%', borderBottom: '2px solid #ddd', marginLeft: '30px', borderRadius: '15px', boxShadow: '0px 0px 10px #172554' }}>
            {selectedIcon == null && (
              <Typography variant='h6'>
                Welcome to Your Dashboard</Typography>
            )}
            {console.log('formData:', formData)}
            {selectedIcon === 'profileForm' && (
              <ProfileForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleProfileSave={handleProfileSave}
                handleProfileCancel={handleProfileCancel}
              />
            )}
            {selectedIcon === 'fileUploadForm' && (
              <FileUploadForm
                fileUploadFormData={fileUploadFormData}
                handleFileUploadInputChange={handleFileUploadInputChange}
                handleFileUpload={handleFileUpload}
              />

            )}
            {selectedIcon === 'ChangePassword' && (
              <ChangePassword
                changePasswordFormData={changePasswordFormData}
                handleChangePasswordInputChange={handleChangePasswordInputChange}
                handleChangePasswordUpdate={handleChangePasswordUpdate}
                handleChangePasswordCancel={handleChangePasswordCancel}
              />
            )}
            {selectedIcon === 'faSuitcase' && (
               <div className="p-4 ">
               {allJobDetails.map((job, index) => (
                 <div className='shadow-md rounded-2xl shadow-slate-400  hover-card bg-slate-50  
                  hover:h-36'>
                   <div key={index} className=" flex rounded-lg mt-4 mb-4 justify-between">
                     <div className='flex ml-10 '>
                       <img src='https://proudlycanadians.ca/assets_new/img/company-logo.png' className="w-12 rounded-full border-gray-800" alt="logo-img" />
                       <div className='ml-10 '>
                         <p className='font-bold mt-3 text-gray-600'>
                           {job.jobTitle}</p>
                         <div className=' mb-2 mt-5'>
     
                           <div className='flex space-x-6 '>
                             <p className=' text-xs '>
                               <FontAwesomeIcon icon={faMapMarker} className="mr-2 text-gray-600" />{job.City}</p>
                             <p className='text-xs flex items-center'>
                               <FontAwesomeIcon icon={faTags} className="mr-2 text-gray-600" /> {job.jobType}
                             </p>
                           </div>
                           <div className='flex space-x-6 mb-5'>
                           <p className='  text-xs flex items-center'>
                             <FontAwesomeIcon icon={faIndustry} className="mr-2 text-gray-600" />
                             {job.jobCategory}</p>
                           <p className=' text-xs '> <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-600" />  
                           {formatPostedDate(job.PostedDate)}
                           </p>
                           </div>
                         </div>
                       </div>
     
                     </div>
                     <div className='flex mt-5 '>
                       <button className='bg-blue-900
                        text-white p-2 rounded-full w-20 h-10
                         m-4 text-xs font-bold
                          hover:bg-red-600' 
                        onClick={() => handleApply(`${job._id}`)}>APPLY</button>
                       <button className='bg-blue-900 hover:bg-red-600 text-white 
                        rounded-full w-32  h-10 m-4 text-xs font-bold' onClick={() => handleViewJob(`${job._id}`)}>VIEW JOB</button>
     
                     </div>
                   </div>
                 </div>
               ))}
             </div>
            )}
          </Paper>
        </Grid>

        <Grid item xs={10} sm={2} style={{ marginTop: '20px' }} >
          <Paper style={{ height: '500px', borderBottom: '2px solid #ddd', width: '100%', marginLeft: '30px', borderRadius: '15px', boxShadow: '0px 0px 10px #172554' }}>
          </Paper>


        </Grid>



      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>


      <Footer />
    </div>
  );
}


export default ApplicantDashboard