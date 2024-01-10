
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faFlag, faTags, faLocation, faMapLocation, faMapMarker, faCalendar, faUsd, faCheckCircle, faIndustry, faCircle, faGraduationCap, faBriefcase, faCalendarAlt, faMoneyBillAlt, faSave, faSuitcase, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './JobDetails.css';
import { faCloudversify, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import dl from "../../images/dl.jpeg";

const JobDetails = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { jobId } = useParams();
    const [allJobs, setAllJobs] = useState([]);
    const [foundJob, setFoundJob] = useState(null);

    const handlePrint = () => {
        window.print();
    };

    const handleApply = () => {
        console.log(jobId)
        navigate(`/employers/auth/login`);
    };

    const handleFacebookClick = () => {
        window.location.href = 'https://facebook.com';
    };

    const handleTwitterClick = () => {
        window.location.href = 'https://twitter.com/';
    };

    const handleLinkdinClick = () => {
        window.location.href = 'http://linkedin.com';
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    useEffect(() => {
        fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/JobRoute/allJobs')
            .then(response => response.json())
            .then(data => setAllJobs(data.allJObDetails))
            .catch(error => console.error('Error fetching all jobs:', error));
    }, []);
    console.log("all  jobs", allJobs)
    useEffect(() => {
        if (Array.isArray(allJobs) && allJobs.length > 0) {
            const job = allJobs.find(job => job._id === jobId);
            setFoundJob(job);
        }
    }, [allJobs, jobId]);

    const capitalizeFirstLetter = (str) => {
        if (str && typeof str === 'string' && str.length > 0) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        } else {
            return '';
        }
    };

    return (
        <div className='bg-white-700'>
            <Navbar className="bg-blue-700" />
            <div style={{ height: '70px' }}></div>
            <div className='flex print-content '>

                <div className="mx-auto h-56 flex flex-col md:flex-row w-full bg-slate-100 rounded-2xl overflow-hidden shadow-md m-2 relative  print-content"
                    style={{ textTransform: 'capitalize' }}>

                    <div className="flex items-center justify-center w-full md:w-1/6">
                        <img src={dl} alt="logo-img" className="w-20 h-20 border-2 border-gray-100 rounded-2xl shadow-md shadow-gray-400" />
                    </div>


                    <div className='items-center p-3 justify-center w-full lg:w-4/6 mt-5 lg:mt-10'>
                        <p className="text-gray-700 text-2xl font-semibold mt-3 text-center md:text-left">
                            {foundJob ? capitalizeFirstLetter(foundJob.jobTitle) : 'Job not found'}
                        </p>
                        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5 mt-3'>
                            <p className="text-gray-500 text-md">
                                <FontAwesomeIcon icon={faSuitcase} className='text-gray-400' /> {foundJob ? foundJob.NOC : '-'}
                            </p>
                            <p className="text-gray-500 text-md">
                                <FontAwesomeIcon icon={faMapMarker} className='text-gray-400' /> {foundJob ? capitalizeFirstLetter(foundJob.location) : '-'}
                            </p>
                            <p className="text-gray-500 text-md">
                                <FontAwesomeIcon icon={faUsd} className='text-gray-500' /> {foundJob ? foundJob.salary.max : '-'} - {foundJob ? foundJob.salary.min : '-'}
                            </p>
                        </div>
                        <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2 mt-5">
                            <div className="bg-blue-200 rounded-2xl p-2 text-center mt-2 md:mt-0 md:w-2/8 h-3/4 text-blue-600 text-md font-semibold equal-width-div">
                                {foundJob ? capitalizeFirstLetter(foundJob.jobType) : '-'}
                            </div>
                            <div className="bg-green-100 rounded-2xl p-2 text-center mt-2 md:mt-0 md:w-2/8 h-3/4 text-green-600 text-md font-semibold equal-width-div">
                                {foundJob ? capitalizeFirstLetter(foundJob.EmployementType) : '-'}
                            </div>
                            <div className="bg-yellow-100 rounded-2xl p-2 text-center mt-2 md:mt-0 md:w-2/8 h-3/4 text-yellow-600 text-md font-semibold equal-width-div">
                                Urgent
                            </div>
                        </div>

                    </div>

                    <div className='w-full md:w-1/6'>
                        <button
                            className="absolute right-2 md:right-10 mt-2 text-blue-600 cursor-pointer"
                            onClick={handlePrint}
                        >
                            <FontAwesomeIcon icon={faPrint} size="2xl" />
                        </button>
                        <button className='bg-blue-900 text-white text-sm font-semibold p-4 rounded-lg text-center w-full md:w-3/4 mt-3 md:mt-28'
                            onClick={() => handleApply()}>
                            Apply For Job
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex mt-10 mb-10'>
                <div className="ml-20 mt-2 w-2/4 rounded-2xl relative print-content job-description-card" style={{ textTransform: 'capitalize' }}>
                    <div className="px-6 py-4" style={{ fontSize: '16px' }}>
                        <p
                            className="text-gray-800 text-xl 
                        font-semibold mt-3 text-left">
                            Job Description
                        </p>
                        <div className='mt-5 mb-5'>
                            <ul className="list-disc pl-6 mt-1">
                                <li className="text-gray-500 
                                text-sm">
                                    {foundJob ? capitalizeFirstLetter(foundJob.jobDescription) : '-'}
                                </li>
                            </ul>
                        </div>
                        <div className="flex ">
                            <p className="text-gray-500 text-sm mt-2  ">
                                <FontAwesomeIcon icon={faGraduationCap} className='text-blue-500 mr-1' />    {foundJob ? capitalizeFirstLetter(foundJob.education) : '-'}
                            </p>

                        </div>
                        <p className="text-gray-500 text-sm mt-2">
                            <FontAwesomeIcon icon={faIndustry} className='text-blue-500 mr-1' /> {foundJob ? capitalizeFirstLetter(foundJob.jobIndustry) : '-'}

                        </p>
                        <p className=" text-gray-500 text-sm mt-2">
                            <span className="font-semibold text-gray-600">Category : </span>   {foundJob ? foundJob.jobCategory : '-'}
                        </p>
                        <p className=" text-gray-500 text-sm mt-2">
                        </p>

                        <div className='mt-5'>
                            <span className="text-gray-800 text-xl font-semibold mt-3 text-left">Skills and Experience : </span>

                            <ul className="list-disc pl-6 mt-1">
                                <span className="font-semibold text-gray-600 ">Skills  : </span>
                                {foundJob && foundJob.skills ? (
                                    foundJob.skills.map((skill, index) => (
                                        <li key={index} className="text-gray-500 text-sm">
                                            {skill}

                                        </li>
                                    ))
                                ) : (
                                    <li className="text-gray-500 text-sm">
                                        No skills specified
                                    </li>
                                )}
                            </ul>
                            <span className="font-semibold text-gray-600 ">Experience : </span>
                            {foundJob.workingExperience.min} - {foundJob.workingExperience.max} <span className="text-gray-500">years </span>

                        </div>


                        <h2 className='mt-8 font-semibold text-gray-600'>share this job On: </h2>
                        <div className='space-x-4 flex '>

                            <button className='text-white w-1/4 h-1/4 p-3 bg-blue-900 mr-5 rounded-md ml-10 mt-8' onClick={handleFacebookClick}>

                                <FontAwesomeIcon icon={faFacebook} className='text-white mr-2' />
                                Facebook
                            </button>
                            <button className='text-white w-1/4 p-3 h-1/4  mr-5 rounded-md mt-8' style={{ backgroundColor: '#017ab3' }} onClick={handleTwitterClick}>
                                <FontAwesomeIcon icon={faTwitter} className='text-white mr-2' />
                                Twitter
                            </button>
                            <button className='h-1/4 mt-8 text-white w-1/4 p-3  rounded-md  ' style={{ backgroundColor: '#017ab3' }} onClick={handleLinkdinClick}>
                                <FontAwesomeIcon icon={faLinkedin} className='text-white mr-2' />
                                LinkedIn
                            </button>
                        </div>

                    </div>
                </div>

                <div className="ml-20 mt-2 w-2/6 bg-slate-100 rounded-2xl overflow-hidden shadow-md relative print-content job-description-card p-5 " style={{ textTransform: 'capitalize' }}>
                    <p className="text-gray-800 text-xl font-semibold mt-3 text-left ml-5  mb-5">
                        Job Overview
                    </p>
                    <div className="space-y-10 ml-5 mb-20">
                        <div className='text-sm flex items-center'>
                            <FontAwesomeIcon icon={faCalendar} className='text-blue-800 text-2xl mr-3' />
                            <p className=" text-gray-800 text-lg">Posted On:  {foundJob ? formatDate(foundJob.PostedDate) : '-'} </p>
                        </div>
                        {/* <p className=" text-sm text-left ml-10 ">
                           
                        </p> */}

                        <div className='text-sm flex items-center'>
                            <FontAwesomeIcon icon={faBriefcase} className='text-blue-800 text-2xl mr-3' />
                            <p className=" text-gray-800 text-lg">Openings:  {foundJob ? foundJob.positionAvailable : '-'}</p>
                        </div>
                        {/* <p className=" text-sm text-left ml-10 ">
                           
                        </p> */}

                        <div className='flex text-sm'>
                            <FontAwesomeIcon icon={faCalendarAlt} className='text-blue-800 text-2xl mr-3' />
                            <p className="text-gray-800 text-lg">Expires On:                             {foundJob ? formatDate(foundJob.ExpiryDate) : '-'}</p>
                        </div>
                        {/* <p className="text-sm text-left ml-10 ">

                        </p> */}

                        <div className='flex text-sm'>
                            <FontAwesomeIcon icon={faMapMarker} className='text-blue-800 text-2xl mr-3' />
                            <p className="text-gray-800 text-lg">Location: {foundJob ? capitalizeFirstLetter(foundJob.City) : '-'}, {foundJob ? capitalizeFirstLetter(foundJob.Province) : '-'}, {foundJob ? capitalizeFirstLetter(foundJob.country) : '-'}</p>
                        </div>


                        <div className='flex space-x-2 text-sm'>
                            <FontAwesomeIcon icon={faDollarSign} className='text-blue-800 text-2xl mr-3' />
                            <p className="text-gray-800 text-lg">Salary:  ${foundJob ? foundJob.salary.max : '-'} -  ${foundJob ? foundJob.salary.min : '-'}</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className="exclude-from-print">
                <Footer />
            </div>
        </div>
    );
};

export default JobDetails;
