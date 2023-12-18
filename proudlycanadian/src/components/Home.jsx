import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from './Navbar';
import banner from '../images/banner-1.jpg';
import one from '../images/1.png';
import './Home.css';
import man from '../images/about-man.png'
import banner2 from '../images/job-img.jpg'
import pc from '../images/pc.png';
import learn from '../images/online-learn.png';
import manage from '../images/manage-common.jpg'
import employer from '../images/employer.png';
import { hotJobs } from '../Data/HotJobs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLineChart, faGlobe, faBarChart, faBullseye, faCalculator, faLaptop } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';


function Home() {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [selectedNOC, setSelectedNOC] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');


  const handleApply = (jobId) => {

    console.log(`Applying for job with ID ${jobId}`);
  };

  const handleQuickApply = (jobId) => {

    console.log(`Quick applying for job with ID ${jobId}`);
  };


  const handleFindJob = () => {
    console.log('Searching for a job...');
    const updatedData={
      jobTitle:jobTitle,
      selectedLocation:selectedLocation,
    }

    console.log(updatedData)

    fetch(`http://localhost:3001/findJob`,{
      method:"POST",
      headers:{
      'Content-Type': 'application/json',
      },
      body:JSON.stringify(updatedData)
    })
    .then((response) => response.json())
    .then((result) => {
    console.log(result);
    if (result.status == true) {
      console.log('tonextpage');
      // navigate('/verification', { state: { email } });
    }
    if(result.status == false) console.log("false coming")
  })
  .catch((error) => {
    console.error('error', error);
  });
  };

  const readMore=()=>{
    navigate('/aboutus')
  }
  const jobs=()=>{
    navigate('/jobs')
  }
  const advertiseJob=()=>{
    navigate('/employers')
  }
  const disablePeople=()=>{
    navigate('/business-benefits-of-hiring-disabled-people')
  }
  const coverLetter=()=>{
    navigate('/the-importance-of-a-great-cover-letter')
  }
  const disabledWorker=()=>{
    navigate('/disabled-workers-have-much-to-offer')
  }



  return (
    <div>
      <Navbar />

      <div>
        <div className="banner-container" style={{ backgroundImage: `url(${banner})`, height: '600px', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <div className='text-white p-5 '>
            <p className='text-3xl font-bold'>Change Your Career, Start Now!</p>
            <p className='text-xl mt-4 font-semibold'>A National Job Site for Aboriginal And Indigenous People.</p>
            <p className='text-xl mt-2 font-semibold'>Find Jobs, Employment & Career Making Over 100,000 Applications Every Month.</p>
          </div>

          <div className='w-5/12 p-4' style={{ position: 'absolute', top: '110px', right: '160px' }}>
            <img src={learn} alt="online-learn" className='w-' />
          </div>

          <div className='w-5/12 p-4' style={{ position: 'absolute', bottom: '5px', right: '10px' }}>
            <img src={one} alt="Image 1" />
          </div>

          <Grid container justifyContent="left" alignItems="flex-end" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
            <Grid item xs={12} md={8} lg={3}>
              <div style={{ padding: '2px' }}>
                <TextField style={{ backgroundColor: 'white', borderRadius: '5px' }}
                  label="Job Search?"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
            </Grid>

            <Grid item xs={12} md={4} lg={2}>
              <div style={{ padding: '2px' }} >
                <TextField style={{ backgroundColor: 'white', borderRadius: '5px' }}
                  select
                  label="Select Location"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <MenuItem value="location1">Location 1</MenuItem>
                  <MenuItem value="location2">Location 2</MenuItem>
                </TextField>
              </div>
            </Grid>

            <Grid item xs={12} md={12} lg={1}>
              <div style={{ padding: '1px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleFindJob}
                  style={{ marginBottom: '10px', height: '56px'}}
                >
                  Find Job
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='flex' style={{ height: '500px' }}>
        <img src={man} className='p-2' />
        <div style={{ marginTop: '5px', marginRight: '35px', padding: '20px', marginLeft: '50px' }}>

          <p className='text-lg font-bold text-blue-900'>ABOUT</p>
          <p className='font-bold text-2xl mt-2'>Proudly Canadians Vision & Mission</p>
          <p className='text-slate-700 text-lg ont-semibold mt-2'>At Proudly Canadians, our mission is to help people get jobs. We have a team of dedicated professionals passionately pursuing this purpose and improving the recruitment journey through real stories and data. We foster a collaborative workplace that strives to create the best experience for job seekers.</p>

          <p className='text-slate-700 text-lg  mt-2'>We help people to find work and plan their career in Canada, and we make it easier for employers to recruit and hire across the country.
          </p>

          <p className='text-slate-700 text-xl font-semibold mt-4'>The right fit for your jobs</p>
          <p className='text-slate-700 text-lg mt-2'>1 lacs people visit Proudly Canadians every month, giving you access to the most talent in every field.*
          </p>

          <button className='font-semibold p-4 mt-4  bg-blue-900 
       rounded-md text-white'onClick={readMore}>READ MORE</button>
        </div>
      </div>
      <div className='bg-slate-900 text-center ' style={{ height: '300px' }}>
        <p className='text-white font-bold  text-2xl p-4 '>Supporting original And Indigenous People </p>
        <p className='text-white font-thin text-lg mt-2'> Proudly Canadians is a online interface jobsite aimed at increasing the employment rate of Canada’s aboriginal and indigenous people community. It is designed to “inclusive” e-recruitment.
          Many aboriginal and indigenous workers are able and very interested to work.</p>
        <button className='font-semibold text-sm p-4  my-20  mx-2 bg-blue-950  rounded-md border border-white text-white' onClick={disablePeople}>BUSINESS BENEFITS OF HIRING DISABLED PEOPLE</button>

        <button className='font-semibold text-sm p-4 my-20  mx-2 bg-blue-950  rounded-md border border-white text-white' onClick={coverLetter}>THE IMPORTANCE OF A GREAT COVER LETTER PEOPLE</button>

        <button className='font-semibold text-sm p-4 my-20 mx-2 bg-blue-950  rounded-md border border-white text-white' onClick={disabledWorker}>DISABLED WORKERS HAVE MUCH TO OFFER</button>




      </div>
      <div style={{ backgroundImage: `url(${banner2})`, height: '500px', width: '100%' }}>
        <div className='font-bold p-20 mr-'>
          <h2 className='font-bold text-xl text-white mt-7 '>FOR JOB SEEKERS</h2>
          <p className='font-semibold text-white mt-7'>Now's a great time to look for a new job. Candidates have the upper hand as the country's labour shortage<br/> continues. Wages are rising, benefits are getting beefier and the options are getting more interesting.</p>
          <p className='font-semibold text-white mt-2'>

            Whether you're looking for a career stepping-stone or your dream job, chances are you're scouring <br/> online job boards. This is the best websites for job searches in Canada.
          </p>
          <button className='font-semibold p-4 mt-20 bg-blue-950  rounded-md text-white'onClick={jobs}>BROWSE OUR JOB LISTINGS</button>
        </div>

      </div>
      <div>
        <div className="flex justify-center space-x-4 ">
          <button className='font-semibold p-4 mt-20 w-72 bg-blue-900 
       rounded-md text-white hover:bg-red-700'>HOT JOBS</button>
          <button className='font-semibold p-4 mt-20 bg-blue-900  w-72
       rounded-md text-white hover:bg-red-700'>LATEST JOBS</button>
          <button className='font-semibold p-4 mt-20 bg-blue-900 
       rounded-md w-72 text-white hover:bg-red-700'>LMIA JOBS FOR TFW'S</button>
          <button className='font-semibold p-4 mt-20 bg-blue-900  w-72
       rounded-md text-white hover:bg-red-700'>JOB'S FOR CANADIANS</button>
        </div>
      </div>
      <div className='p-10'>
        <div className=''>
          <h1 className='font-bold text-xl mt-4  text-blue-900'>HOT JOBS</h1>
        </div>
        <div className="p-4 ">
          {hotJobs.map((job, index) => (
            <div className='shadow shadow-slate-400  hover-card'>
              <div key={index} className=" flex rounded-lg mt-4 mb-4 justify-between">
                <div className='flex ml-10 '>
                  <img src={job.logo} className="w-1/12 rounded-full border-gray-800" alt="logo-img" />
                  <div className='ml-10 '>
                    <p className='font-bold mt-3'>{job.title}</p>
                    <div className='flex mt-3 mb-3'>
                      <p className='p-2 m-2 text-sm font-semibold shadow shadow-slate-400'>{job.id}</p>
                      <p className='p-2 m-2 shadow text-sm font-semibold shadow-slate-400'>{job.noc}</p>
                      <p className='p-2 m-2 text-sm font-semibold shadow shadow-slate-400'>{job.location}</p>
                      <p className='p-2 m-2 text-sm font-semibold shadow shadow-slate-400'>{job.postedOn}</p>
                    </div>
                  </div>

                </div>
                <div className='flex mt-3'>
                  <button className='bg-blue-900 text-white p-2 rounded-2xl w-20 h-10 m-4 text-xs font-bold hover:bg-red-600' onClick={() => handleApply(job.id)}>APPLY</button>
                  <button className='bg-blue-900 hover:bg-red-600 text-white  rounded-2xl w-32  h-10 m-4 text-xs font-bold' onClick={() => handleQuickApply(job.id)}>QUICK APPLY</button>

                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <button className='font-semibold p-4 mt-3 bg-blue-900  rounded-md text-slate-200' onClick={jobs}>
            BROWSE ALL JOB
          </button>
        </div>
      </div>

      <div
        classNae="emplomyer-background"
        style={{
          backgroundImage: `url(${employer})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '450px',
          display: 'flex',
          alignItems: 'right',
          justifyContent: 'right',
          color: 'grey',
        }}
      >
        <div className="p-5 ml-96  w-6/12 mr-24">
          <h2 className="text-4xl font-bold mb-4 text-slate-700"> For Employers </h2>
          <p className='text-slate-600 font-semibold text-lg text-justify mt-8'>
            Proudly Canadians is a frontrunner when it comes to the top job search websites in Canada. It hosts many job opportunities in the English language. Handy features include the ability to search by salary and find roles in nearby cities. And it's all mobile-optimized, allowing you to search and apply for jobs on the go. Proudly Canadians is highly recommended for aboriginal and indigenous candidates this is a user-friendly site and great opportunities for career advancement.
          </p>
          <button className='font-bold p-4 mt-8 bg-blue-900  hover:bg-red-600 rounded-md text-slate-200 text-sm' onClick={advertiseJob}>
            ADVERTISE YOUR JOB NOW

          </button>
        </div>
      </div>
      <div className='p-4 shadow-slate-400'>
        <p className=' text-3xl text-slate-800 font-bold text-center'> Benefits of Choosing Us</p>
        <div className='flex flex-wrap justify-center '>
          <div className='shadow-lg p-7 shadow-gray-700 w-3/12 h-82 m-4 border-b-4 border-violet-900'>
            <div className="  flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faLineChart} size='2x' className='text-white rounded-full bg-violet-900 p-4' />
            </div>
            <h2 className='text-lg font-bold text-slate-900 text-center p-2'>Ethics</h2>
            <p className='font-semibold text-slate-600'>Cultures, religion, and entire lifestyles differ from individual to individual, organization to organization and nation to nation. But Ethics alone simply is universal..</p>
          </div>

          <div className='shadow-lg p-7 shadow-gray-700 w-3/12 h-82 m-4 border-b-4 border-violet-800'>
            <div className=" flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faGlobe} size='2x' className='text-white rounded-full bg-violet-900 p-4' />
            </div>
            <h2 className='text-lg font-bold text-slate-900 text-center p-2'>Integrity</h2>
            <p className='font-semibold text-slate-600'>Businesses do not grow on lofty goals and missions. But on the cherished premise of Integrity that makes people trust you. Integrity binds people and nations...</p>
          </div>
          <div className='shadow-lg p-7 shadow-gray-700 w-3/12 h-82 m-4 border-b-4 border-violet-800'>
            <div className=" flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faBarChart} size='2x' className='text-white rounded-full bg-violet-900 p-4' />
            </div>
            <h2 className='text-lg font-bold text-slate-900 text-center p-2'>Professionalism</h2>
            <p className='font-semibold text-slate-600'>All the extraordinary levels of management knowledge and ideas cannot compensate for the sincere commitment to commitments previously made...</p>
          </div>

          <div className='shadow-lg p-7 shadow-gray-700 w-3/12 h-82 m-4 border-b-4 border-violet-800'>
            <div className=" flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faBullseye} size='2x' className='text-white rounded-full bg-violet-900 p-4' />
            </div>
            <h2 className='text-lg font-bold text-slate-900 text-center p-2'>Knowledge</h2>
            <p className='font-semibold text-slate-600'>Knowledge is limitless and is most certainly not available at the mere click of the mouse button. Simply explore the minds of people all around us and be surprised...</p>
          </div>

          <div className='shadow-lg p-7 shadow-gray-700 w-3/12 h-82 m-4 border-b-4 border-violet-800'>
            <div className=" flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faCalculator} size='2x' className='text-white rounded-full bg-violet-900 p-4' />
            </div>
            <h2 className='text-lg font-bold text-slate-900 text-center p-2'>Assurance</h2>
            <p className='font-semibold text-slate-600'>In any business, with accuracy comes the assurance that everyone connected including your valued customers are happy. Accuracy and Assurance are the key...</p>
          </div>


          <div className='shadow-lg p-7 shadow-gray-700 w-3/12 h-82 m-4 border-b-4 border-violet-800'>
            <div className=" flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faLaptop} size='2x' className='text-white rounded-full bg-violet-900 p-4' />
            </div>
            <h2 className='text-lg font-bold text-slate-900 text-center p-2'>Trust</h2>
            <p className='font-semibold text-slate-600'>Trust cannot be expressed as monetary value. But in simple enough commitments to deliver all the deliverables without fail. Building trust is the sole and sure shot...</p>
          </div>

        </div>
      </div>
      <div className='flex'>
        <div className='flex-1 p-8 ml-10'>
          <p className='text-5xl font-bold text-cyan-900'>Reach Your Full Potential</p>
          <p className='font-semibold text-slate-700 mt-4'>
            Let our team show you how you can innovate and create an extended workforce that works. In today'shighly competitive talent marketplace—where remote working opportunities, extreme market conditions, and evolving customer needs—combine to demand that you be adaptable in order to succeed.
          </p>

          <h1 className='text-blue-900 text-xl mt-10 mb-2 font-bold'>
            MEET YOUR DIVERSITY GOALS</h1>
          <p className='font-semibold text-slate-700 mt-2'>
            Inclusive and diverse workplace cultures build stronger companies-let our experts help you meet your goals
          </p>

          <h1 className='text-blue-900 text-xl mt-10 font-bold'>
            A PEOPLE-FIRST APPROACH</h1>
          <p className='font-semibold text-slate-700 mt-2'>
            Technology powers our programs but does not replace our high-touch, white glove approach. Our dedicated teams ensure program wide success and adoption across all key stakeholders, talent, suppliers and hiring managers.
          </p>
        </div>
        <div className='flex-1  text-center'>
          <img src={manage} className='rounded-full border-b-4 border-blue-900 w-10/12 p-2' alt="Image" />
        </div>
      </div>



      <Footer />


    </div>
  );
}

export default Home;