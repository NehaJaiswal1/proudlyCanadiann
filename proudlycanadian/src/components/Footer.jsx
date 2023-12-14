
// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <footer className="bg-white text-white mt-8">
            <div className=" ">
                <div className="bg-blue-900 flex items-center justify-between ">
                    <p className='text-white text-2xl p-28 font-bold text-center'>Want Latest Updates About Jobs</p>
                    <div className='flex items-center'>
                        <input className='rounded-lg p-4 h-10' placeholder='Enter Your Email' type='email' />
                        <button className='p-2 bg-black rounded-lg text-white mr-20'>Subscribe</button>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between p-8">
                    <div className=" md:w-1/4 mb-8 ">
                    <h3 className="text-xl font-bold text-blue-900">PROUDLY CANADIANS</h3>
                        <p className='text-black mt-2 text-sm mr-12'>
                            At Proudly Canadians, our mission is to help people get jobs. We have a team of dedicated professionals passionately pursuing...
                        </p>
                    </div>
                  
                    <div className="md:w-1/4 mb-8">
                            <h2 className="text-xl font-bold text-blue-900">USEFUL LINKS</h2>
                            <ul>
                                <li className='text-black   mt-2 text-sm'>&gt; <Link to="/">Home</Link></li>
                                <li className='text-black mt-2 text-sm '>&gt; <Link to="/aboutus">About Us</Link></li>
                                <li className='text-black mt-2 text-sm'>&gt; <Link to="/jobs/search">Find Job</Link></li>
                                <li className='text-black mt-2 text-sm'>&gt; <Link to="/job-fair">Job Fair</Link></li>
                                <li className='text-black mt-2 text-sm'>&gt; <Link to="/virtualjob">Virtual Job</Link></li>
                                <li className='text-black mt-2 text-sm'>&gt; <Link to="/contact">Contact Us</Link></li>
                                <li className='text-black mt-2 text-sm'>&gt; <Link to="/terms">Terms & Condition</Link></li>
                            </ul>
                    </div>

                  

                    <div className=" md:w-1/4 mb-8">
                        <h3 className="text-xl font-bold text-blue-900">CONNECT WITH US</h3>
                        <ul>
                            <li className="text-black mt-2 text-sm">&gt; <Link to="/job-package">Job Package</Link></li>
                            <li className="text-black mt-2 text-sm">&gt; <Link to="/auth/registration">Applicant Register</Link></li>
                            <li className="text-black mt-2 text-sm">&gt; <Link to="/auth/login">Applicant Login</Link></li>
                            <li className="text-black mt-2 text-sm">&gt; <Link to="/employers/auth/registration">Employer Register</Link></li>
                            <li className="text-black mt-2 text-sm">&gt; <Link to="/employers/auth/login">Employer Login</Link></li>
                            <li className="text-black mt-2 text-sm">&gt; <Link to="/auth/forgot_password">Password Reset</Link></li>
                        </ul>
                    </div>

                    <div className=" md:w-1/4 mb-8 text-black">
                        <h3 className="text-xl font-bold text-blue-900">HEAD OFFICE</h3>
                        <p className='text-black mt-2 text-sm p-1'><FontAwesomeIcon icon={faPhone} size='l' /> +1 (416) 871-5196</p>
                        <p className='text-black mt-2 text-sm p-1'><FontAwesomeIcon icon={faEnvelope} size='l' /> contact@proudlycanadians.ca</p>

                        <div className="flex items-center  mt-4">
                            <FontAwesomeIcon icon={faFacebook} className="text-blue-900 mr-2 rounded-full" size="2x" />
                            <FontAwesomeIcon icon={faTwitter} className="text-blue-900 ml-2 mr-2 rounded-full" size="2x" />
                            <FontAwesomeIcon icon={faInstagram} className="text-blue-900 ml-2 mr-2 rounded-full" size="2x" />
                            <FontAwesomeIcon icon={faLinkedin} className="text-blue-900 ml-2 rounded-full" size="2x" />
                        </div>

                        <div className="text-center bg-black rounded-lg flex  items-center justify-center w-56 mt-4">
                            <p className='text-orange-500 font-semibold text-sm text-center p-2'>Google Rating</p>
                            <div className="flex items-center justify-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FontAwesomeIcon key={star} icon={faStar} className="text-orange-500" />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>


                <div className="text-center bg-black text-white font-bold w-full p-2 text-sm">
                    <p>Our office is based in Canada. We have no other branches inside or outside Canada</p>
                </div>
                <div className="p-2 text-center  text-black text-sm mb-2 font-semibold">
                    <p >COPYRIGHT © 2020 - PROUDLY CANADIANS - ALL RIGHTS RESERVED.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
