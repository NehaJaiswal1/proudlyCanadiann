
// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <footer className="bg-white">
            <div className=" ">
                <div className="bg-blue-100  flex p-6 py-20 space-x-10">
                    <div className='w-2/4 '>
                        <p className='text-gray-700 text-xl font-bold text-left'>Subscribe Our Newsletter</p>
                        <p className='text-gray-500 text-sm text-left'>Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</p>
                    </div>
                    <div className='flex items-center justify-center  bg-white rounded-lg 
                    w-2/8 p-4 overflow-hidden'>
                        <input
                            className='rounded-lg p-3 w-3/4 overflow-hidden'
                            placeholder='Enter Your Email'
                            type='email'
                            style={{ border: 'none', outline: 'none' }}
                        />
                        <button className='p-3  bg-blue-600 rounded-lg
                         text-white '>Subscribe</button>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between p-8 bg-gray-500">
                    <div className=" md:w-1/4 mb-8 ">
                        <h3 className="text-xl font-bold text-white">PROUDLY CANADIANS</h3>
                        <p className='text-white mt-2 text-sm mr-12'>
                            At Proudly Canadians, our mission is to help people get jobs. We have a team of dedicated professionals passionately pursuing...
                        </p>
                    </div>

                    <div className="md:w-1/4 mb-8">
                        <h2 className="text-xl font-bold text-white">USEFUL LINKS</h2>
                        <ul>
                            <li className='text-white   mt-2 text-sm'><FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/">Home</Link></li>
                            <li className='text-white mt-2 text-sm '><FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/aboutus">About Us</Link></li>
                            <li className='text-white mt-2 text-sm'><FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/jobs">Find Job</Link></li>
                            <li className='text-white mt-2 text-sm'><FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/job-fair">Job Fair</Link></li>
                            <li className='text-white mt-2 text-sm'><FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/virtualjob">Aboriginal</Link></li>
                            <li className='text-white mt-2 text-sm'><FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/contact">Contact Us</Link></li>
                            {/* <li className='text-white mt-2 text-sm'><FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                             <Link to="/terms">Terms & Condition</Link></li> */}
                        </ul>
                    </div>



                    <div className=" md:w-1/4 mb-8">
                        <h3 className="text-xl font-bold text-white">CONNECT WITH US</h3>
                        <ul>
                            <li className="text-white mt-2 text-sm">
                                <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/employers">Job Package</Link>
                            </li>
                            <li className="text-white mt-2 text-sm">
                                <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/auth/registration">Applicant Register</Link>
                            </li>
                            <li className="text-white mt-2 text-sm">
                                <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/employers">Applicant Login</Link></li>
                            <li className="text-white mt-2 text-sm"> <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/employers/auth/registration">Employer Register</Link></li>
                            <li className="text-white mt-2 text-sm"> <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/employers">Employer Login</Link></li>
                            <li className="text-white mt-2 text-sm"> <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
                                <Link to="/">Password Reset</Link></li>
                        </ul>
                    </div>

                    <div className=" md:w-1/4 mb-8 text-white">
                        <h3 className="text-xl font-bold text-white">HEAD OFFICE</h3>
                        <p className='text-white mt-2 text-sm p-1'><FontAwesomeIcon icon={faPhone} size='lg' /> +1 (416) 871-5196</p>
                        <p className='text-white mt-2 text-sm p-1'><FontAwesomeIcon icon={faEnvelope} size='lg' /> contact@proudlycanadians.ca</p>

                        <div className="flex items-center  mt-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mr-2 rounded-full">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2 mr-2 rounded-full">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2 mr-2 rounded-full">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white ml-2 rounded-full">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </div>

                        {/* <div className="text-center bg-black rounded-lg flex  items-center justify-center w-56 mt-4">
                            <p className='text-orange-500 font-semibold text-sm text-center p-2'>Google Rating</p>
                            <div className="flex items-center justify-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FontAwesomeIcon key={star} icon={faStar} className="text-orange-500" />
                                ))}
                            </div>
                        </div> */}

                    </div>
                </div>


                {/* <div className="text-left bg-gray-500 text-white font-semibold w-full p-1 text-sm">
                    <p>Our office is based in Canada. We have no other branches inside or outside Canada</p>
                </div> */}
                <div className=" text-left  bg-gray-500  mb-2 font-semibold p-2">
                    <p className='text-white text-xs' >COPYRIGHT © 2020 - PROUDLY CANADIANS - ALL RIGHTS RESERVED.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
