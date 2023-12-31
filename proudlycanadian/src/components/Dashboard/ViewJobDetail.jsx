

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faFlag, faTags, faLocation, faMapLocation, faMapMarker, faCalendar, faUsd, faCheckCircle, faIndustry, faCircle, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './JobDetails.css';
import { faCloudversify } from '@fortawesome/free-brands-svg-icons';

const ViewJobDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    const { jobId } = useParams();
    const [allJobs, setAllJobs] = useState([]);
    const [foundJob, setFoundJob] = useState(null);

    const handlePrint = () => {
        window.print();
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

    useEffect(() => {
        if (Array.isArray(allJobs) && allJobs.length > 0) {
            const job = allJobs.find(job => job._id == jobId);
            setFoundJob(job);
        }
    }, [allJobs, jobId]);

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className='bg-gray-100'>
           
            <div className='flex print-content '>
                <button
                    className="absolute  right-10 mt-2 text-gray-500 cursor-pointer"
                    onClick={handlePrint}
                >
                    <FontAwesomeIcon icon={faPrint} size="lg" />
                </button>
                <div className=" mt-10 w-2/4 mx-auto bg-white rounded-2xl overflow-hidden shadow-md m-2 relative print-content">

                    <div className="px-6 py-4">
                        <p className="text-gray-600 text-xl font-bold mt-3 text-left">
                            {foundJob ? capitalizeFirstLetter(foundJob.jobTitle) : 'Job not found'}
                        </p>
                        <div className="flex ">
                            <p className="text-gray-500 text-sm mt-2 font-semibold flex-1">
                                {foundJob ? capitalizeFirstLetter(foundJob.companyName) : '-'}
                            </p>
                            <div className="bg-white rounded-2xl border-yellow-200 border-2 p-1 text-center mt-2 w-2/6">
                                <p className="text-yellow-500 text-xs font-semibold">
                                    {foundJob ? capitalizeFirstLetter(foundJob.jobType) : '-'} / {foundJob ? capitalizeFirstLetter(foundJob.EmployementType) : '-'}
                                </p>
                            </div>
                        </div>
                        <p className=" text-gray-500 text-sm mt-2">
                            <FontAwesomeIcon icon={faTags} />    {foundJob ? foundJob.NOC : '-'}
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            <FontAwesomeIcon icon={faMapMarker} /> {foundJob ? capitalizeFirstLetter(foundJob.location) : '-'}

                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            <FontAwesomeIcon icon={faCalendar} /> Start as soon as Possible
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            <FontAwesomeIcon icon={faUsd} /> {foundJob ? foundJob.salary.max : '-'} - {foundJob ? foundJob.salary.min : '-'}
                        </p>
                        <hr className="border-b-1 border-gray-300 mt-5 mb-5 " />
                        <div className='flex space-x-24'>
                            <p className="text-gray-500 text-sm mt-2">
                                <span className="font-semibold text-gray-500">Posted On:</span> {foundJob ? formatDate(foundJob.PostedDate) : '-'}
                            </p>
                            <p className="text-gray-500 text-sm mt-2">
                                <span className="font-semibold text-gray-500">Openings:</span> {foundJob ? foundJob.positionAvailable : '-'}
                            </p>

                            <button className='bg-blue-900 text-white text-sm font-bold p-2 rounded-2xl text-center w-3/12 '>
                                Apply
                            </button>

                        </div>

                    </div>
                </div>
                <div className='mt-10 w-1/4 bg-white rounded-2xl overflow-hidden shadow-md mr-32 relative print-content h-44'>
                    <div className="px-6 py-4">


                        <p className=" text-gray-600 text-lg font-bold mt-2">
                            {foundJob ? capitalizeFirstLetter(foundJob.companyName) : '-'}
                            <FontAwesomeIcon icon={faCheckCircle} className="ml-2 text-green-500" />

                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            <FontAwesomeIcon icon={faMapMarker} /> {foundJob ? capitalizeFirstLetter(foundJob.City) : '-'}, {foundJob ? capitalizeFirstLetter(foundJob.Province) : '-'}, {foundJob ? capitalizeFirstLetter(foundJob.country) : '-'}

                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            <FontAwesomeIcon icon={faIndustry} />  {foundJob ? capitalizeFirstLetter(foundJob.jobIndustry) : '-'}
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            <span className="font-semibold text-gray-500">Hiring Status : </span>
                            {foundJob && foundJob.status == 'Active' ? (
                                <FontAwesomeIcon icon={faCircle} className="ml-2 text-green-500" />
                            ) : (
                                <FontAwesomeIcon icon={faCircle} className="ml-2 text-red-500" />
                            )}
                        </p>


                    </div>

                </div >

            </div>
            <div className="ml-20 mt-2 w-2/4 bg-white rounded-2xl overflow-hidden shadow-md  relative print-content job-description-card">

                <div className="px-6 py-4">
                    <p className="text-gray-600 text-xl font-bold mt-3 text-left">
                        Job Description
                    </p>
                    <hr className="border-b-1 border-gray-300 mt-5 mb-5 " />
                    <div className="flex ">
                        <p className="text-gray-500 text-sm mt-2  ">
                            <FontAwesomeIcon icon={faGraduationCap} />    {foundJob ? capitalizeFirstLetter(foundJob.education) : '-'}
                        </p>

                    </div>
                    <p className="text-gray-500 text-sm mt-2">
                        <FontAwesomeIcon icon={faIndustry} /> {foundJob ? capitalizeFirstLetter(foundJob.jobIndustry) : '-'}

                    </p>
                    <p className=" text-gray-500 text-sm mt-2">
                        <span className="font-semibold text-gray-500">Experience : </span>   {foundJob ? foundJob.workingExperience.min : '-'} - {foundJob ? foundJob.workingExperience.max : '-'} <span className=" text-gray-500">years </span>
                    </p>
                    <div className='mt-5'>
                        <span className=" font-semibold text-gray-500 ">Description : </span>
                        <ul className="list-disc pl-6 mt-1">

                            <li className="text-gray-500 text-sm">
                                {foundJob ? capitalizeFirstLetter(foundJob.jobDescription) : '-'}
                            </li>
                        </ul>
                    </div>
                    <div className='mt-5'>
                        <span className=" font-semibold text-gray-500 ">Skills : </span>
                        <ul className="list-disc pl-6 mt-1">

                            <li className="text-gray-500 text-sm">
                                {foundJob ? foundJob.skills : '-'}
                            </li>
                        </ul>
                    </div>
                    <p className="text-gray-500 text-sm 
                    mt-4">
                        <span className="font-semibold text-gray-500 ">Job Expires On  : </span> 
                        {foundJob ? formatDate(foundJob.ExpiryDate) : '-'}

                    </p>



                </div>
            </div>

            <div className="exclude-from-print">
                <Footer />
            </div>
        </div>
    );
};

export default ViewJobDetail;
