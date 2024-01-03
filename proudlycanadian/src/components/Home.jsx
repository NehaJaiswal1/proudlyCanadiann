

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import banner from '../images/banner.png';
import './Home.css';
import manage from '../images/manage-common.jpg'
import employer from '../images/employer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLineChart, faGlobe, faBarChart, faBullseye, faCalculator, faLaptop, faSearch, faMapMarkedAlt, faSuitcase, faMapLocation, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import { faUser, faBookmark, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import cl from '../images/company-logo.png'
import { TextField, Button, InputAdornment, Card, CardContent, Typography, CardHeader } from '@mui/material';
import Slider from 'react-slick';
import coin from '../images/home/coin.png';
import speaker from '../images/home/speaker.png';
import design from '../images/home/creative.jpg';
import meet from '../images/home/meet.webp';
import ap1 from '../images/home/applicant-1.webp';
import ap2 from '../images/home/applicant-2.webp';
import ap3 from '../images/home/applicant-3.webp';

import { cardInfo } from '../Data/cardDetail.jsx';
import t from '../images/home/testimonial.webp'
import { testimonialDetail } from '../Data/testimonial.jsx';
import one from '../images/home/1-1.webp';
import two from '../images/home/1-4.webp';
import three from '../images/home/1-5.webp';
import four from '../images/home/1-6.webp';
import { registerCompany } from '../Data/registerCompany.jsx';



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
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const [selectedJobType, setSelectedJobType] =
        useState('Youth and new comers');



    const handleHotJobs = () => {
        setSelectedJobType('Youth and new comers');
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
    // const [showBanner, setShowBanner] = useState(true);

    // useEffect(() => {

    //   const handleResize = () => {
    //     setShowBanner(window.innerWidth > 768); 
    //   };
    //   handleResize();
    //   window.addEventListener('resize', handleResize);
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    // }, []);



    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
    };

    function truncateWords(str, numWords) {
        const words = str.split(' ');
        if (words.length > numWords) {
            return words.slice(0, numWords).join(' ') + '...';
        }
        return str;
    }

    const handleNextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % testimonialDetail.length);
    };

    const handlePrevCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + testimonialDetail.length) % testimonialDetail.length);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/JobRoute/allJobs');
                const responseData = await response.json();
                setData(responseData.allJObDetails);
                console.log('API Response:', responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log('Data:', data);

    // const elementRef = useRef(null);

    // useEffect(() => {
    //     const options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.5,
    //     };

    //     const handleIntersection = (entries, observer) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 // The element is in the viewport
    //                 entry.target.classList.add('fade-up');
    //                 observer.unobserve(entry.target); // Stop observing after the transition is applied
    //             }
    //         });
    //     };

    //     const observer = new IntersectionObserver(handleIntersection, options);

    //     if (elementRef.current) {
    //         observer.observe(elementRef.current);
    //     }

    //     return () => {
    //         if (elementRef.current) {
    //             observer.unobserve(elementRef.current);
    //         }
    //     };
    // }, []);


    const settings = {
        dots: true,
        dotsClass: "slick-dots custom-dots",
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const handleFindJob = () => {

        fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/JobRoute/jobSearch', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jobTitle,
                location: selectedLocation,

            }),
        })
            .then(response => response.json())
            .then(data => {

                console.log('API Response:', data);

            })
            .catch(error => {
                console.error('Error:', error);

            });
    };



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
        <div className='bg-slate-200 w-full min-h-screen'>
            <Navbar />

            <div style={{
                height: '700px',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
            }} className='bg-slate-200 min-h-screen'>
                <div className='mx-auto mt-36 w-10/12 '>
                    <p className="text-white text-center text-5xl font-bold  mb-10 ">
                        The Easiest Way to Get Your New Job
                    </p>

                    <div className='flex bg-white rounded-full mx-auto  p-4 '>

                        <div className="relative flex items-center w-4/12 ">
                            <FontAwesomeIcon icon={faSearch} className="absolute left-4 text-gray-400" />
                            <input
                                placeholder='Jobs, title'
                                className='rounded-lg pl-10 w-full border-none focus:outline-none'
                            />
                        </div>
                        <div className="relative flex items-center w-3/12 ">
                            <FontAwesomeIcon icon={faMapMarker} className="absolute left-4 text-gray-400" />
                            <input
                                placeholder='City or Postal Code'
                                className='rounded-lg pl-10 w-full border-none focus:outline-none'
                            />
                        </div>
                        <div className="relative flex items-center w-3/12">
                            <FontAwesomeIcon icon={faSuitcase} className="absolute left-4 text-gray-400" />
                            <input
                                placeholder='City or Postal Code'
                                className='rounded-lg pl-10 w-full p-4 border-none focus:outline-none'
                            />
                        </div>
                        <button className='bg-blue-600 rounded-full w-2/12 text-white'>
                            Find Jobs
                        </button>

                    </div>
                    <p className="text-white text-center text-sm font-semibold  mt-5">
                        Popular Searches : Designer, Developer, Web, IOS, PHP, Senior, Engineer
                    </p>
                </div>

            </div>




            <div className='mt-10'>
                <p className="text-2xl font-bold text-gray-700 mb-4 text-center">Most Popular Jobs</p>
                <p className="text-gray-600 mb-4 text-center">Know your worth and find the job that qualifies your life</p>
                <div className="flex justify-center space-x-2 ">

                    <button
                        className={`p-1 mt-5 w-1/5 text-sm rounded-lg text-white bg-gray-400
            hover:border-2 hover:border-gray-100
             hover:bg-white hover:text-black
              ${selectedJobType === 'Youth and new comers' ? 'bg-gray-600' : ''}`}
                        onClick={handleHotJobs}
                    >
                        Youth and New Comers
                    </button>
                    <button
                        className={`p-1 mt-5 w-1/5 rounded-lg text-sm text-white
             hover:border-2 bg-gray-400 hover:border-gray-100
            hover:bg-white
             hover:text-black ${selectedJobType === 'LatestJob' ? 'bg-gray-400' : ''}`}
                        onClick={handleLatestJobs}
                    >
                        LATEST JOBS
                    </button>
                    <button className='p-1 mt-5 text-sm w-1/5 rounded-lg bg-gray-400 text-white hover:border-2 hover:border-gray-100
             hover:bg-white hover:text-black'
                        onClick={handleJobsLMIA}>LMIA JOBS FOR TFW'S</button>

                    <button className='p-1 mt-5 w-1/5 text-sm rounded-lg bg-gray-400 text-white hover:border-2 hover:border-gray-100
             hover:bg-white hover:text-black' onClick={handleJobsForCanadians}>JOB'S FOR CANADIANS</button>
                </div>
            </div>
            <div className='p-10'>

                <div className=" space-y-10 ">
                    <div className="grid grid-cols-2 gap-4">
                        {data
                            .filter((job) => job.jobSelectedType === selectedJobType)
                            .slice(0, 4)
                            .map((job) => (
                                <div className='shadow-slate-400 
                                    bg-slate-50 
                                    border-2
                                     border-slate-100 rounded-2xl'
                                    style={{ fontFamily: 'Rubik', fontWeight: '600' }}>
                                    <div key={job._id} className=" flex rounded-lg mt-4 mb-4 justify-between" >
                                        <div className='flex '>

                                            <img src={cl} alt="logo-img" className="w-16 h-16 border-2 border-gray-100 ml-5 rounded-2xl" />
                                            <div className='ml-2 '>

                                                <p className='mt- text-gray-700 text-lg' style={{ textTransform: 'capitalize' }}>
                                                    {truncateWords(job.jobTitle, 5)}
                                                </p>
                                                <div className='flex mt-3 mb-3'>
                                                    <p className=' m-1 text-xs   text-gray-600'>
                                                        <FontAwesomeIcon icon={faUser} className='mr-1 text-red-500' />
                                                        ID-{job.jobId}</p>

                                                    <p className='m-1 text-xs   text-gray-600'>
                                                        <FontAwesomeIcon icon={faBookmark} className='mr-1 text-red-500' />
                                                        NOC-{job.NOC}</p>
                                                    <p className='m-1 text-xs   text-gray-600'>
                                                        <FontAwesomeIcon icon={faMapMarker} className='mr-1  text-red-500' />
                                                        {job.location},  {job.Province}</p>
                                                    <p className='m-1 text-xs   text-gray-600'>
                                                        <FontAwesomeIcon icon={faClock} className='mr-1 text-red-500' />
                                                        {formatDate(job.PostedDate)}</p>

                                                </div>
                                                <div className='flex'>
                                                    <p className='p-2 m-2 text-xs rounded-full font-semibold w-2/6 bg-blue-100
                         text-blue-600 text-center'>
                                                        {job.EmployementType}</p>
                                                    <p className='p-2 m-2 text-xs rounded-full font-semibold w-2/6 bg-yellow-100
                         text-yellow-600 text-center'>
                                                        {job.jobType}</p>
                                                    {/* <p className='p-2 m-2 text-xs rounded-full font-semibold w-3/6 bg-yellow-100
                         text-yellow-800  text-center'>
                            {job.jobType}</p> */}
                                                </div>
                                            </div>

                                        </div>
                                        <div className='flex mt-3'>

                                            {/* <button
                        className='bg-blue-900 text-white p-2 rounded-2xl w-20 h-10 m-4 text-sm font-bold hover:bg-red-600'
                        onClick={() => handleApply(`${job._id}`)}
                      >

                        APPLY
                      </button> */}




                                            {/* <button className='bg-blue-900 hover:bg-red-600 text-white  rounded-2xl w-32  h-10 m-4 text-sm font-bold' onClick={() => handleQuickApply(job._id)}>QUICK APPLY</button> */}

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
            </div>
            <div>
                <div className="mb-8 text-center">
                    <p className="text-3xl font-bold text-gray-600
                     p-2 rounded-lg">
                        Popular Job Categories</p>
                    <p className="text-gray-500 text-sm">
                        2020 jobs live - 293 added today.</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }} className=' space-x-6 p-4 h-full'>
                    <Card sx={{ m: 2, margin: '10px', borderRadius: '10px' }}
                        className='w-2/6 h-32 md:w-2/6 lg:w-2/6 xl:w-2/6 sm:w-1/6'>
                        <CardContent style={{ display: 'flex', alignItems: 'left', padding: '10px' }}>
                            <div className='bg-slate-200 rounded-full items-center justify-center p-3'>
                                <img src={coin} alt="Coin" style={{ width: '60px' }} className='rounded-full' />
                            </div>
                            <div>
                                <p className='text-lg font-semibold p-2 text-gray-800'>
                                    Accounting/Finance
                                </p>
                                <p className='text-gray-400 text-sm p-2'>
                                    (2 open positions)
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Second Card */}
                    <Card sx={{ m: 2, margin: '10px', borderRadius: '10px' }}
                        className='w-2/6 h-32 '>
                        <CardContent style={{ display: 'flex', alignItems: 'left', padding: '10px', borderRadius: '10px' }}>
                            <div className='bg-slate-200 rounded-full items-center justify-center p-3'>
                                <img src={speaker} alt="Coin" style={{ width: '60px' }} className='rounded-full' />
                            </div>
                            <div>
                                <p className='text-lg font-semibold p-2 text-gray-800'>
                                    Marketing
                                </p>
                                <p className='text-gray-400 text-sm p-2'>
                                    (86 open positions)
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Third Card */}
                    <Card sx={{ m: 2, margin: '10px', borderRadius: '10px' }}
                        className='w-2/6 h-32'>
                        <CardContent style={{ display: 'flex', alignItems: 'left', padding: '10px' }}>
                            <div className='bg-slate-200 rounded-full items-center justify-center p-3'>
                                <img src={design} alt="Coin" style={{ width: '60px' }} className='rounded-full' />
                            </div>
                            <div>
                                <p className='text-lg font-semibold p-2 text-gray-800'>
                                    Design
                                </p>
                                <p className='text-gray-400 text-sm p-2'>
                                    (86 open positions)
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }} className='space-x-6 p-4 h-full'>
                    <Card sx={{ m: 2, margin: '10px', borderRadius: '10px' }}
                        className='w-2/6 h-32'>
                        <CardContent style={{ display: 'flex', alignItems: 'left', padding: '10px' }}>
                            <div className='bg-slate-200 rounded-full items-center justify-center p-3'>
                                <img src={coin} alt="Coin" style={{ width: '60px' }} className='rounded-full' />
                            </div>
                            <div>
                                <p className='text-lg font-semibold p-2 text-gray-800'>
                                    Development
                                </p>
                                <p className='text-gray-400 text-sm p-2'>
                                    (12 open positions)
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Second Card */}
                    <Card sx={{ m: 2, margin: '10px', borderRadius: '10px' }}
                        className='w-2/6 h-32'>
                        <CardContent style={{ display: 'flex', alignItems: 'left', padding: '10px' }}>
                            <div className='bg-slate-200 rounded-full items-center justify-center p-3'>
                                <img src={speaker} alt="Coin" style={{ width: '60px' }} className='rounded-full' />
                            </div>
                            <div>
                                <p className='text-lg font-semibold p-2 text-gray-800'>
                                    Human Resources
                                </p>
                                <p className='text-gray-400 text-sm p-2'>
                                    (55 open positions)
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Third Card */}
                    <Card sx={{ m: 2, margin: '10px', borderRadius: '10px' }}
                        className='w-2/6 h-32'>
                        <CardContent style={{ display: 'flex', alignItems: 'left', padding: '10px' }}>
                            <div className='bg-slate-200 rounded-full items-center justify-center p-3'>
                                <img src={design} alt="Coin" style={{ width: '60px' }} className='rounded-full' />
                            </div>
                            <div>
                                <p className='text-lg font-semibold p-2 text-gray-800'>
                                    Automotive jobs
                                </p>
                                <p className='text-gray-400 text-sm p-2'>
                                    (2 open positions)
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }} className='space-x-6 p-4 h-full'>
                    <Card sx={{ m: 2, margin: '10px', borderRadius: '10px' }}
                        className='w-2/6 h-32'>
                        <CardContent style={{ display: 'flex', alignItems: 'left', padding: '10px', borderRadius: '10px' }}>
                            <div className='bg-slate-200 rounded-full items-center justify-center p-3'>
                                <img src={coin} alt="Coin" style={{ width: '60px' }} className='rounded-full' />
                            </div>
                            <div>
                                <p className='text-lg font-semibold p-2 text-gray-800'>
                                    Customer Support
                                </p>
                                <p className='text-gray-400 text-sm p-2'>
                                    (2 open positions)
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Second Card */}
                    <Card sx={{ m: 2, margin: '10px', borderRadius: '10px' }}
                        className='w-2/6 h-32'>
                        <CardContent style={{ display: 'flex', alignItems: 'left', padding: '10px', borderRadius: '10px' }}>
                            <div className='bg-slate-200 rounded-full items-center justify-center p-3'>
                                <img src={speaker} alt="Coin" style={{ width: '60px' }} className='rounded-full' />
                            </div>
                            <div>
                                <p className='text-lg font-semibold p-2 text-gray-800'>
                                    Accounting/Finance
                                </p>
                                <p className='text-gray-400 text-sm p-2'>
                                    (2 open positions)
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Third Card */}
                    <Card sx={{ m: 2, margin: '10px', borderRadius: '10px' }}
                        className='w-2/6 h-32'>
                        <CardContent style={{ display: 'flex', alignItems: 'left', padding: '10px', borderRadius: '10px' }}>
                            <div className='bg-slate-200 rounded-full items-center justify-center p-3'>
                                <img src={design} alt="Coin" style={{ width: '60px' }} className='rounded-full' />
                            </div>
                            <div>
                                <p className='text-lg font-semibold p-2 text-gray-800'>
                                    Design
                                </p>
                                <p className='text-gray-400 text-sm p-2'>
                                    (43 open positions)
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>


            </div>
            <div className='bg-white mt-20 flex h-full'>
                <div className='mt-20 mb-40 ml-10 w-full h-full '>
                    <img src={meet} className='rounded-2xl' />
                </div>
                <div className='p-10 mt-20 relative'>
                    <p className='p-2 text-gray-800 
                    text-5xl font-semibold  text-left'>
                        Get applications from the
                        world best talents.
                    </p>
                    <p className='p-2 text-lg mt-4 text-gray-400 text-left'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</p>
                    <ul style={{ paddingLeft: '1.25rem', marginTop: '4px' }}>
                        <li className='text-gray-600 text-sm mt-10'>&#10003; Bring to the table win-win survival</li>
                        <li className='text-gray-600 text-sm mt-10'>&#10003; Capitalize on low hanging fruit to identify</li>
                        <li className='text-gray-600 text-sm mt-10'>&#10003; But I must explain to you how all this</li>
                    </ul>
                    <button className='w-1/4 text-white bg-blue-700 hover:bg-blue-200 hover:text-blue-700 p-4 mt-10
                    rounded-lg'>
                        Post a job
                    </button>
                    <div className='absolute  left-30 bottom-10 font-semibold p-2 w-2/4'>
                        <p className='p-2 bg-blue-800 text-xl text-white font-semibold '>Applicants List</p>
                        <div className='flex p-2'>
                            <img src={ap1} className='rounded-full' />
                            <div className=''>
                                <p>Brooklyn</p>
                                <p>Web Devloper</p>
                            </div>
                        </div>
                        <div className='flex p-2'>
                            <img src={ap2} className='rounded-full' />
                            <div>
                                <p>Courtney Henry</p>
                                <p>Web Devloper</p>
                            </div>
                        </div>
                        <div className='flex p-2'>
                            <img src={ap3}
                                className='rounded-full' />
                            <div>
                                <p>Marvin McKinney</p>
                                <p>Web Devloper</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div>
                <div>
                    <p>Recent News Articles</p>
                    <p>Fresh job related news content posted each day.</p>
                </div>
                <div className="h-96 overflow-hidden flex  mt-10 px-8">
                    {cardInfo.map((card, index) => (
                        <Card key={index} sx={{ width: '350px', height: '300px' }} style={{ margin: '15px' }}>
                            <div style={{ height: '60%' }}>
                                <img src={card.img} alt="Card" />
                            </div>
                            <div className='flex space-x-2 mt-2'>
                                <p>{card.date}</p>
                                <p>{card.comment}</p>
                            </div>
                            <CardContent>
                                <h2 className='text-red-700'>{card.title}</h2>
                                <p className='text-slate-700'>{card.des}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className='bg-white h-full'>
                <div className='text-center '>
                    <p>Testimonials From Our Customers</p>
                    <p>Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</p>
                </div>

                <div className="h-full overflow-hidden flex mt-10 px-8 ">
                    <div className='w-4/6 p-5 '>
                        <img src={t} className='mb-10  w-4/6 ' />
                    </div>
                    <div className='1/6 '>
                        <div key={currentCardIndex} >
                            <div className=' mt-2'>
                                <h2 className='text-red-700'>{testimonialDetail[currentCardIndex].title}</h2>
                                <p className='text-slate-700'>{testimonialDetail[currentCardIndex].des}</p>
                            </div>

                            <h2 className='text-red-700'>{testimonialDetail[currentCardIndex].name}</h2>
                            <p className='text-slate-700'>{testimonialDetail[currentCardIndex].desgination}</p>

                        </div>

                        <FontAwesomeIcon icon={faBackward}
                            onClick={handlePrevCard} />
                        <FontAwesomeIcon icon={faForward} onClick={handleNextCard} />

                    </div>
                </div>

            </div>

            <div className='flex w-full bg-white'>
                <img src={one} className='w-1/12' />
                <img src={two} className='w-1/12' />
                <img src={one} className='w-1/12' />
                <img src={three} className='w-1/12' />
                <img src={two} className='w-1/12' />
                <img src={four} className='w-1/12' />

            </div>
            <div className="bg-white p-2">
                <p className='text-gray-800 text-3xl
                 p-4 font-bold'>Top Company Registered</p>
                <p className='text-gray-400 text-sm p-4'>Some of the companies we have helped recruit excellent applicants over the years.</p>
                <div className='p-7 relative px-4 '>
                    <Slider {...settings}>
                        {registerCompany.map((company, index) => (
                              <div key={index} className='sm:w-full md:w-1/2 lg:w-1/4'>
                                <Card key={index} sx={{ width: '250px', height: '300px' }} style={{ margin: '15px' }}>
                                    <div className='grid place-items-center mt-5'>
                                        <img src={company.logo} alt={company.comapnyName} className='rounded-full' />
                                    </div>
                                    <div className='p-5 items-center'>
                                        <h2 className='text-blue-700 mt-2 text-center'>{company.comapnyName}</h2>
                                        <div className='mt-2 text-gray-400 text-center'>
                                            <FontAwesomeIcon icon={faMapMarker} /> {company.location}
                                        </div>
                                        <div className='text-blue-700 p-3 bg-blue-100 rounded-lg mt-8 text-center'>
                                            <p>{company.availablePositions} Open Positions</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <Footer />



        </div>
    );
}

export default Home;