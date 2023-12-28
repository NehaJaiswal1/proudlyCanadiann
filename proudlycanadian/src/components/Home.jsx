
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
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
import { faUser, faBookmark, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import cl from '../images/company-logo.png'



function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState('');
  const [selectedNOC, setSelectedNOC] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [data, setData] = useState([]);
  const [selectedJobType, setSelectedJobType] =
    useState('HotJob');

  const handleHotJobs = () => {
    setSelectedJobType('HotJob');
  };

  const handleLatestJobs = () => {
    setSelectedJobType('LatestJob');
  };

  const handleJobsForCanadians = () => {
    setSelectedJobType('JobsForCanadians');

  }

  const handleJobsLMIA = () => {
    setSelectedJobType(`LMIA Jobs For TFW's`);

  }

  
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
};


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/JobRoute/allJobs');
        const responseData = await response.json();
        setData(responseData.allJObDetails);
        // console.log('API Response:', responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log('Data:', data);


  const handleApply = (jobId) => {

    navigate(`/job-details/${jobId}`);
  };

  const handleQuickApply = (jobId) => {

    navigate(`/employers/auth/login`)
  };


  // const hotJobs = () => {
  //   fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/JobRoute/hotJobs')
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       setData(responseData.hotJobsDetails);
  //     })
  //     console.log(setData)
  //     .catch((error) => {
  //       console.error('Error fetching hot jobs data:', error);
  //     });
  // };


  const readMore = () => {
    navigate('/aboutus')
  }
  const jobs = () => {
    navigate('/jobs')
  }
  const advertiseJob = () => {
    navigate('/employers')
  }
  const disablePeople = () => {
    navigate('/business-benefits-of-hiring-disabled-people')
  }
  const coverLetter = () => {
    navigate('/the-importance-of-a-great-cover-letter')
  }
  const disabledWorker = () => {
    navigate('/disabled-workers-have-much-to-offer')
  }



  return (
    <div>
      <Navbar />

      <div>
        <div className="banner-container" style={{
          backgroundImage: `url(${banner})`,
          height: '600px', display: 'flex',
          alignItems: 'center', position: 'relative'
        }}>
          <div className='text-white p-5 '>
            <p style={{ fontFamily: 'Rubik' }} className='text-3xl font-bold'>Change Your Career, Start Now!</p>
            <p style={{ fontFamily: 'Rubik' }} className='text-xl mt-4 font-semibold'>
              A National Job Site for Aboriginal And Indigenous People.
            </p>
            <p style={{ fontFamily: 'Rubik' }} className='text-xl mt-6 font-semibold '>Find Jobs, Employment & Career
              Making Over 100,000</p>
            <p style={{ fontFamily: 'Rubik' }} className='text-xl mt-2 font-semibold' >
              Applications Every Month.
            </p>
          </div>

          <div className='w-5/12 p-4' style={{ position: 'absolute', top: '110px', right: '160px' }}>
            <img src={learn} alt="online-learn" />
          </div>

          <div className='w-5/12 p-1' style={{ position: 'absolute', bottom: '0', right: '2px' }}>
            <img src={one} alt="Image 1" />
          </div>

          <Grid container justifyContent="left" alignItems="flex-end" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
            <Grid item xs={12} md={8} lg={3}>
              <div style={{ padding: '2px' }}>
                <TextField style={{ backgroundColor: 'white', borderRadius: '10px' }}
                  label="Job Search?"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  InputLabelProps={{
                    style: { fontFamily: 'Rubik', color: '#ea580c' }
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} md={4} lg={2}>
              <div style={{ padding: '2px' }} >
                <TextField style={{ backgroundColor: 'white', borderRadius: '10px' }}
                  select
                  label="Select Location"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  InputLabelProps={{
                    style: { fontFamily: 'Rubik', color: '#ea580c' }
                  }}
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

                  style={{
                    marginBottom: '10px',
                    height: '56px',
                    width: '120px',
                    borderRadius: '10px',
                    backgroundColor: '#ea580c',
                    color: 'white'
                  }}>
                  Find Job
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='flex ' style={{ height: '500px' }}>
        <img src={man} className=' ml-10 h-full' style={{ height: '100%' }} />
        <div style={{ marginTop: '5px', marginRight: '70px', padding: '30px', marginLeft: '50px' }}>

          <p className='text-blue-900 ' style={{ fontFamily: 'Rubik', fontWeight: '600' }}>
            ABOUT</p>
          <p className='font-bold text-2xl mt-2 text-gray-600' >Proudly Canadians Vision & Mission</p>
          <p className='text-slate-600 text-md  mt-2'>At Proudly Canadians, our mission is to help people get jobs. We have a team of dedicated professionals passionately pursuing this purpose and improving the recruitment journey through real stories and data. We foster a collaborative workplace that strives to create the best experience for job seekers.</p>

          <p className='text-slate-600 text-md  mt-2'>We help people to find work and plan their career in Canada, and we make it easier for employers to recruit and hire across the country.
          </p>

          <p className='text-slate-700 text-xl font-semibold mt-4'>The right fit for your jobs</p>
          <p className='text-slate-600 text-md  mt-2'>1 lacs people visit Proudly Canadians every month, giving you access to the most talent in every field.*
          </p>

          <button className=' p-4 text-sm mt-8 
           bg-blue-900 
       rounded-lg text-white w-40' style={{ fontFamily: 'Rubik', fontWeight: '400' }}
            onClick={readMore}>READ MORE</button>
        </div>
      </div>
      <div className='bg-slate-900 text-center '
        style={{ height: '350px' }}>
        <p className='text-white font-bold text-3xl p-8 '>Supporting Aboriginal And Indigenous People</p>
        <p className='text-white font-thin text-lg  p-2'> Proudly Canadians is a online interface jobsite aimed at increasing the employment rate of Canada’s aboriginal and indigenous people community. It is designed to “inclusive” e-recruitment.
          Many aboriginal and indigenous workers are able and very interested to work.</p>
        <button className='font-semibold text-sm p-4   mx-2 bg-blue-950  rounded-md border border-white text-white' onClick={disablePeople}>BUSINESS BENEFITS OF HIRING DISABLED PEOPLE</button>

        <button className='font-semibold text-sm p-4 my-20  mx-2 bg-blue-950  rounded-md border border-white text-white' onClick={coverLetter}>THE IMPORTANCE OF A GREAT COVER LETTER PEOPLE</button>

        <button className='font-semibold text-sm p-4 my-20 mx-2 bg-blue-950  rounded-md border border-white text-white' onClick={disabledWorker}>DISABLED WORKERS HAVE MUCH TO OFFER</button>




      </div>
      <div style={{ backgroundImage: `url(${banner2})`, height: '500px', width: '100%' }}>
        <div className=' p-20 '>
          <h2 className='text-3xl text-white mt-7 '>For Job Seeker</h2>
          <p className='font-semibold text-white text-lg mt-7 mr-40'>Now's a great time to look for a new job. Candidates have the upper hand as the country's labour shortage<br /> continues. Wages are rising, benefits are getting beefier and the options are getting more interesting.</p>
          <p className='font-semibold text-white mt-2'>

            Whether you're looking for a career stepping-stone or your dream job, chances are you're scouring <br /> online job boards. This is the best websites for job searches in Canada.
          </p>
          <button className=' p-4 mt-20 bg-blue-950  rounded-lg text-lg   text-white'
            onClick={jobs}>Browse All Job Listings</button>
        </div>

      </div>
      <div>
        <div className="flex justify-center space-x-4 " style={{ fontFamily: 'Rubik', fontWeight: '400' }}>
          <button
            className={`p-4 mt-20 w-1/5 bg-blue-900 rounded-lg text-white hover:bg-red-700 ${selectedJobType === 'HotJob' ? 'bg-red-700' : ''}`}
            onClick={handleHotJobs}
          >
            HOT JOBS
          </button>
          <button
            className={`p-4 mt-20 bg-blue-900 w-1/5 rounded-lg text-white hover:bg-red-700 ${selectedJobType === 'LatestJob' ? 'bg-red-700' : ''}`}
            onClick={handleLatestJobs}
          >
            LATEST JOBS
          </button>
          <button className=' p-4 mt-20 bg-blue-900 
       rounded-lg w-1/5 text-white hover:bg-red-700'
            onClick={handleJobsLMIA}>LMIA JOBS FOR TFW'S</button>
          <button className=' p-4 mt-20 bg-blue-900  w-1/5
       rounded-lg text-white hover:bg-red-700' onClick={handleJobsForCanadians}>JOB'S FOR CANADIANS</button>
        </div>
      </div>
      <div className='p-10'>

        <div className="p-10 space-y-10 ">

          {data
            .filter((job) => job.jobSelectedType === selectedJobType)
            .slice(0, 5)
            .map((job) => (
              <div className='shadow-md rounded-2xl shadow-slate-400  hover-card bg-slate-50'
                style={{ fontFamily: 'Rubik', fontWeight: '600' }}>
                <div key={job._id} className=" flex rounded-lg mt-4 mb-4 justify-between" >
                  <div className='flex ml-10 '>

                    <img src={cl} alt="logo-img" className="w-20  " />


                    <div className='ml-8 '>
                    <p className='p-2 m-2 text-md rounded-md font-semibold w-3/6 bg-green-100 text-green-800 ' >{job.jobType}/
                          {job.EmployementType}</p>
                      <p className='mt-3 ml-5 text-gray-700 font-bold' style={{ fontFamily: 'Rubik', fontWeight: '600', textTransform: 'capitalize' }}>
                        {job.jobCategory.charAt(0).toUpperCase() + job.jobCategory.slice(1)}
                      </p>
                      <div className='flex mt-3 mb-3'>
                        <p className='p-2 m-2 text-xs font-semibold  text-gray-600'>
                        <FontAwesomeIcon icon={faUser} className='mr-1' />
                        {job._id}</p>
                       
                        <p className='p-2 m-2  text-xs font-semibold  text-gray-600'>
                        <FontAwesomeIcon icon={faBookmark} className='mr-1' />
                          {job.NOC}</p>
                        <p className='p-2 m-2 text-xs font-semibold  text-gray-600'>
                        <FontAwesomeIcon icon={faMapMarker} className='mr-1  text-gray-600' />
                          {job.Province},{job.country
                          }</p>
                        <p className='p-2 m-2 text-xs font-semibold  text-gray-600'>
                        <FontAwesomeIcon icon={faClock} className='mr-1' />
                        {formatDate(job.PostedDate)}</p>
                      </div>
                    </div>

                  </div>
                  <div className='flex mt-3'>

                    <button
                      className='bg-blue-900 text-white p-2 rounded-2xl w-20 h-10 m-4 text-xs font-bold hover:bg-red-600'
                      onClick={() => handleApply(`${job._id}`)}
                    >

                      APPLY
                    </button>




                    <button className='bg-blue-900 hover:bg-red-600 text-white  rounded-2xl w-32  h-10 m-4 text-xs font-bold' onClick={() => handleQuickApply(job._id)}>QUICK APPLY</button>

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
        className=""
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
        <p className=' text-3xl text-slate-800 font-bold text-center p-2'> Benefits of Choosing Us</p>
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
          <p className='text-4xl font-bold text-cyan-900'>Reach Your Full Potential</p>
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