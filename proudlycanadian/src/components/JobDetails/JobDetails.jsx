
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faFlag, faTags, faLocation, faMapLocation, faMapMarker, faCalendar, faUsd, faCheckCircle, faIndustry, faCircle, faGraduationCap, faBriefcase, faCalendarAlt, faMoneyBillAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './JobDetails.css';
import { faCloudversify,faFacebook ,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons';

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
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className='bg-white-700'>
            <Navbar />

            <div style={{ height: '100px' }}></div>
            <div className='flex print-content '>
                <button
                    className="absolute  right-10 mt-2 text-blue-600 cursor-pointer"
                    onClick={handlePrint}
                >
                    <FontAwesomeIcon icon={faPrint} size="2xl" />
                </button>
                <div className="mt-20 mx-auto w-full bg-pink-50 rounded-2xl overflow-hidden shadow-md m-2 relative print-content" style={{ fontFamily: 'Rubik', fontWeight: '600', textTransform: 'capitalize' }}>
                    <div className="px-6 py-4 ml-20 mr-20 mb-20">
                        <p className="text-gray-600 text-3xl font-extrabold mt-3 text-left mb-10">
                            {foundJob ? capitalizeFirstLetter(foundJob.jobTitle) : 'Job not found'}
                        </p>
                        <div className='flex space-x-2 mt-2 justify-between'>
                            <div className='flex space-x-2'>
                                <p className="text-gray-500 text-sm">
                                    <FontAwesomeIcon icon={faTags} className='text-blue-500 mr-1 ' /> {foundJob ? foundJob.NOC : '-'}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    <FontAwesomeIcon icon={faMapMarker} className='text-blue-500 mr-1 ml-10' /> {foundJob ? capitalizeFirstLetter(foundJob.location) : '-'}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    <FontAwesomeIcon icon={faCalendar} className='text-blue-500 mr-1 ml-10' /> start as soon as Possible
                                </p>
                                <p className="text-gray-500 text-sm mr-20">
                                    <FontAwesomeIcon icon={faUsd} className='text-blue-500 ml-10' /> {foundJob ? foundJob.salary.max : '-'} - {foundJob ? foundJob.salary.min : '-'}
                                </p>
                            </div>
                            <button className='bg-blue-900 text-white text-sm font-bold p-5 rounded-2xl text-center w-3/12 mr-2' onClick={() => handleApply()}>
                                Apply
                            </button>

                        </div>
                        <div className="flex ml-20">
                            <div className="bg-white rounded-2xl border-yellow-300 border-2 p-1 text-center mt-2 w-1/6 ">
                                <p className="text-yellow-600 text-xs font-semibold">
                                    {foundJob ? capitalizeFirstLetter(foundJob.jobType) : '-'} / {foundJob ? capitalizeFirstLetter(foundJob.EmployementType) : '-'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <div className='mt-10 w-1/4 bg-white rounded-2xl overflow-hidden shadow-md mr-32 relative print-content h-44'>
                    <div className="px-6 py-4" style={{ fontFamily: 'Rubik', fontWeight: '600', textTransform: 'capitalize' }}>


                        <p className=" text-gray-600 text-lg font-bold mt-2">
                            {foundJob ? capitalizeFirstLetter(foundJob.companyName) : '-'}
                            <FontAwesomeIcon icon={faCheckCircle} className="ml-1 text-green-500" />

                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            <FontAwesomeIcon icon={faMapMarker} className='text-blue-500 mr-1' /> {foundJob ? capitalizeFirstLetter(foundJob.City) : '-'}, {foundJob ? capitalizeFirstLetter(foundJob.Province) : '-'}, {foundJob ? capitalizeFirstLetter(foundJob.country) : '-'}

                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            <FontAwesomeIcon icon={faIndustry} className='text-blue-500 mr-1' />  {foundJob ? capitalizeFirstLetter(foundJob.jobIndustry) : '-'}
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            <span className="font-semibold text-gray-500">Hiring Status : </span>
                            {foundJob && foundJob.status == 'Active' ? (
                                <FontAwesomeIcon icon={faCircle} className="ml-2 text-green-500" />
                            ) : (
                                <FontAwesomeIcon icon={faCircle} className="ml-2 text-blue-500" />
                            )}
                        </p>


                    </div>

                </div > */}

            </div>
            <div className='flex mt-10'>
                <div className="ml-20 mt-2 w-2/4 rounded-2xl relative print-content job-description-card" style={{ fontFamily: 'Rubik', fontWeight: '600', textTransform: 'capitalize' }}>
                    <div className="px-6 py-4" style={{ fontSize: '16px' /* Add the desired font size */ }}>
                        <p className="text-gray-600 text-xl font-bold mt-3 text-left">
                            Job Description
                        </p>
                        <div className='mt-5 mb-5'>
                            <ul className="list-disc pl-6 mt-1">
                                <li className="text-gray-500 text-sm">
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
                            <span className="font-semibold text-gray-500">Category : </span>   {foundJob ? foundJob.jobCategory : '-'}
                        </p>
                        <p className=" text-gray-500 text-sm mt-2">
                        </p>

                        <div className='mt-5'>
                            <span className=" text-gray-600 text-xl font-bold mt-3 text-left ">Skills And Experience : </span>
                            <ul className="list-disc pl-6 mt-1">

                                <li className="text-gray-500 text-sm">
                                    {foundJob ? foundJob.skills : '-'}
                                    <span className="font-semibold text-gray-500 ml-20">Experience : </span>   {foundJob ? foundJob.workingExperience.min : '-'} - {foundJob ? foundJob.workingExperience.max : '-'} <span className=" text-gray-500">years </span>

                                </li>
                            </ul>
                        </div>


                        <div className='mt-20 flex'>
                        <h2 className='mt-3 font-extrabold'>share this job on : </h2>
                        <button className='p-3 bg-blue-600 mr-5 rounded-md ml-10'>
        <FontAwesomeIcon icon={faFacebook} className='text-white mr-2' />
        Facebook
    </button>
    <button className='p-3 bg-blue-400 mr-5 rounded-md'>
        <FontAwesomeIcon icon={faTwitter} className='text-white mr-2' />
        Twitter
    </button>   
    <button className='p-3 bg-green-900 rounded-md'>
        <FontAwesomeIcon icon={faLinkedin} className='text-white mr-2' />
        LinkedIn
    </button>
                        </div>

                    </div>
                </div>

                {/* <div className="mt-20 mx-auto w-full bg-very-light-skin-color rounded-2xl overflow-hidden shadow-md m-2 relative print-content" style={{ fontFamily: 'Rubik', fontWeight: '600', textTransform: 'capitalize', background: '#fff7ee' }}> */}
                <div className="ml-20 mt-2 w-2/4 bg-pink-50 rounded-2xl overflow-hidden shadow-md relative print-content job-description-card" style={{ fontFamily: 'Rubik', fontWeight: '600', textTransform: 'capitalize' }}>
                    <p className="text-gray-600 text-xl font-bold mt-3 text-left ml-5  mb-5">
                        Job Overview
                    </p>
                    <div className="space-y-4 ml-5 mb-20">
                        <div className='space-x-2 text-sm flex items-center'>
                            <FontAwesomeIcon icon={faCalendar} className='text-blue-500 text-2xl mr-3' />
                            <span className="font-semibold text-xl text-gray-500">Posted On:</span>
                        </div>
                        <p className="mb-6 text-sm ml-8 mt-1">
                            {foundJob ? formatDate(foundJob.PostedDate) : '-'}
                        </p>

                        <div className='space-x-2 text-sm flex items-center'>
                            <FontAwesomeIcon icon={faBriefcase} className='text-blue-500 text-2xl mr-3' />
                            <span className="font-semibold text-xl text-gray-500">Openings:</span>
                        </div>
                        <p className="mb-6 text-sm ml-8 mt-1">
                            {foundJob ? foundJob.positionAvailable : '-'}
                        </p>

                        <div className='space-x-2 text-sm'>
                            <FontAwesomeIcon icon={faCalendarAlt} className='text-blue-500 text-2xl mr-3' />
                            <span className="font-semibold text-xl text-gray-500">Job Expires On:</span>
                        </div>
                        <p className="mb-6 text-sm ml-8 mt-1">
                            {foundJob ? formatDate(foundJob.ExpiryDate) : '-'}
                        </p>

                        <div className='space-x-2 text-sm'>
                            <FontAwesomeIcon icon={faMapMarker} className='text-blue-500 text-2xl mr-3' />
                            <span className="font-semibold text-xl text-gray-500">Location:</span>
                        </div>
                        <p className="mb-6 text-sm ml-8 mt-1">
                            {foundJob ? capitalizeFirstLetter(foundJob.City) : '-'}, {foundJob ? capitalizeFirstLetter(foundJob.Province) : '-'}, {foundJob ? capitalizeFirstLetter(foundJob.country) : '-'}
                        </p>

                        <div className='space-x-2 text-sm'>
                            <FontAwesomeIcon icon={faMoneyBillAlt} className='text-blue-500 text-2xl  mr-3' />
                            <span className="font-semibold text-xl text-gray-500 ">Salary:</span>
                        </div>
                        <p className="mb-6 text-sm ml-8 mt-1 ">
                            {foundJob ? foundJob.salary.max : '-'} - {foundJob ? foundJob.salary.min : '-'}
                        </p>

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
