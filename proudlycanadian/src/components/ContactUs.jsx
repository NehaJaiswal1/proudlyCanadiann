
import React,{useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {Alert, Snackbar, IconButton} from '@mui/material';



export default function ContactUs() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

 
    const navigate = useNavigate();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  
    const [buttonColor, setButtonColor] = useState('bg-blue-900');
  
   

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    const handleSnackbarClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setSnackbarOpen(false);
    };
    

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await fetch('https://job-portal-website-by5i.onrender.com/job-Portal/Contact-Route/addContact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
         console.log(response)
         setSnackbarSeverity('success');
          setSnackbarMessage('Message Sent Sucessfully !!!');
          setSnackbarOpen(true);

          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          
         
      } else {
        const data = await response.json();
        setSnackbarSeverity('error');
        setSnackbarMessage('Failed to send message. Please check your credentials');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('An error occurred while sending the message:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage('An error occurred. Please try again.');
      setSnackbarOpen(true);
      
    }
  };
    
    const handleSearchJobsClick = () => {
     
      setButtonColor('bg-red-700');
      
      
      navigate('/jobs');
    };
    const handlePostNewJobClick = () => {
       
        setButtonColor('bg-red-700');
        navigate('/employers/auth/login');
      };

      const handleCreateNewAccountClick = () => {
       
        setButtonColor('bg-red-700');
        navigate('/auth/login');
      };

      
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div style={{ height: '150px' }}></div>
      <div className="flex  p-4">
        {/* Left Side - Buttons */}
        <div className="w-full md:w-1/3 p-4 ">
        <button
            className={`${buttonColor}
             text-white px-4 py-2 mb-2 w-full rounded-lg`}
            onClick={handleSearchJobsClick}
          >
            Search Jobs
          </button>
          <button className={`${buttonColor}
             text-white px-4 py-2 mb-2 w-full rounded-lg`}
             onClick={handlePostNewJobClick}>
            Post New Jobs
          </button>
          <button className={`${buttonColor}
             text-white px-4 py-2 mb-2 w-full rounded-lg`}
             onClick={handleCreateNewAccountClick}>
            Create New Account
          </button>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Contact Details</h2>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-2" />
              <p className="text-gray-700">+1 (416)         871-5196</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
              <p className="text-gray-700">
                contact@proudlycanadians.ca</p>
            </div>
          </div>
          
         
        </div>

        {/* Right Side - Contact Form */}
        <div className=" w-full md:w-2/3 p-4">
       

        <div className='font-bold text-center text-white bg-slate-800 px-5 py-4 rounded-lg '>Contact Form</div>
            
          <form className=" mx-auto px-5 py-5 shadow-2xl shadow-slate-300 rounded-2xl" onSubmit={handleSubmit}>
          
            <div className="mb-4 ">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Subject"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-900 
               text-white px-4 py-2 rounded-lg font-bold focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
           
          </form>
          {/* {successAlert && (
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setSuccessAlert(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Your message has been sent successfully!
        </Alert>
      )} */}
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
          
        </div>
        
      </div>
     

      <Footer />
    </div>
  );
}
