

// Footer.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar, faMailBulk, faMapLocation, faShare, faShareAltSquare, faShareAlt, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faDiscord, faPinterest, faYoutube, faBluetooth, faWeixin, faWhatsapp, faThreads, faSnapchat } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {

    const [email, setEmail] = useState('');
    const [showSocialIcons, setShowSocialIcons] = useState(false);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle subscription (e.g., send the email to your backend)
        console.log(`Subscribing with email: ${email}`);
        // Reset the email input after submission
        setEmail('');
    };

    const toggleSocialIcons = () => {
        setShowSocialIcons(!showSocialIcons);
    };
    return (

        <footer className=" text-white mt-8 px-12">
            <div className=" ">
                <div className="bg-blue-900 flex items-center justify-between ">
                    <p className='text-white text-2xl p-28 font-bold text-center'>Want Latest Updates About Jobs</p>
                    <div className='flex items-center'>
                        <input className='rounded-lg p-4 h-10' placeholder='Enter Your Email' type='email' />
                        <button className='p-2 bg-black rounded-lg text-white mr-20'>Subscribe</button>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between p-8 bg-slate-900">
                    <div className=" md:w-1/4 mb-8  ">
                        <h3 className="text-xl font-bold text-white">HEAD OFFICE</h3>
                        <p className='text-white mt-2 text-sm p-1'><FontAwesomeIcon icon={faPhone} size='l' /> (877)628-0740 871-5196</p>
                        <a href="mailto:info@jobscanadafair.com" className='text-white mt-2 text-sm p-1'> <FontAwesomeIcon icon={faEnvelope} size='l' />       info@jobscanadafair.com</a>
                        <p className='text-white mt-2 text-sm p-1'><FontAwesomeIcon icon={faMapLocation} size='l' />  100 King St. W. 56th Floor. Toronto. ON. M5X1A9.</p>

                    </div>

                    <div className="md:w-1/4 mb-8">
                        <h2 className="text-xl font-bold text-white">
                            Testimonials</h2>
                        <ul>
                            <li className='text-white   mt-2 text-sm'> <Link to="/">Videos</Link></li>
                            <li className='text-white mt-2 text-sm '> <Link to="/aboutus">Past Exhibitors</Link></li>
                            <li className='text-white mt-2 text-sm'> <Link to="/jobs/search">Live Events</Link></li>
                            <li className='text-white mt-2 text-sm'> <Link to="/job-fair">Blog</Link></li>

                        </ul>
                    </div>



                    <div className=" md:w-1/4 mb-8">
                        <h3 className="text-xl font-bold text-white">REGISTRATIONS</h3>
                        <ul>
                            <li className="text-white mt-2 text-sm"> <Link to="/job-package">Exhibitors</Link></li>
                            <li className="text-white mt-2 text-sm"> <Link to="/auth/registration">Attendees</Link></li>
                            <li className="text-white mt-2 text-sm"> <Link to="/auth/login">Eventbrite</Link></li>
                            <li className="text-white mt-2 text-sm"> <Link to="/employers/auth/registration">Contact Us</Link></li>

                        </ul>
                    </div>

                    <div className=" md:w-1/4 mb-8 text-black">
                        <h3 className="text-xl font-bold text-white">STAY UPDATED</h3>

                        <form onSubmit={handleSubmit} className=" p-2 bg-white rounded-lg mt-3 w-56 h-36">
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={handleInputChange}
                                className="mr-2 p-2 border border-gray-500 
                                rounded-lg mt-5"
                                required
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-3"
                            >
                                Subscribe
                            </button>
                        </form>



                    </div>
                </div>
                <div className="p-2 text-left  text-gray-500 text-sm mb-8 font-semibold flex justify-between">
                    <p >COPYRIGHT © 2020 - PROUDLY CANADIANS - ALL RIGHTS RESERVED.
                    </p>
                    <div className='item-right space-x-1' >
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faWeixin} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faPinterest} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>

            </div>
            <div className="fixed bottom-0 left-0 mb-16  ml-10 rounded-full group">
                <button className="px-3 py-3 text-red-700  bg-black rounded-full group-hover:bg-red-700 group-hover:text-white ">
                    <FontAwesomeIcon icon={faShareAlt} size='xl' />
                </button>
                <div className="social-icons  rounded-md hidden absolute bottom-16  group-hover:block space-y-4">
                    <FontAwesomeIcon icon={faWeixin} className=" text-green-700 rounded-full   hover:text-blue-900 cursor-pointer" size='2x' />
                    <FontAwesomeIcon icon={faEnvelope} className="   rounded-full hover:text-blue-500 cursor-pointer" size='2x' />
                    <FontAwesomeIcon icon={faTwitter} className="mr-2 text-blue-700 hover:text-blue-500 cursor-pointer" size='2x'  />
                    <FontAwesomeIcon icon={faPinterest} className="mr-2 text-red-500 hover:text-blue-500 cursor-pointer" size='2x'  />
                    <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-green-500 hover:text-blue-500 cursor-pointer" size='2x'  />
                    <FontAwesomeIcon icon={faCopy} className="mr-2 text-whiteSmoke hover:text-blue-500 cursor-pointer" size='2x'  />
                    <FontAwesomeIcon icon={faThreads} className="mr-2 text-red-500 hover:text-blue-500 cursor-pointer" size='2x'  />
                    <FontAwesomeIcon icon={faDiscord} className="mr-2 text-slate-500 hover:text-blue-500 cursor-pointer" size='2x'  />
                    <FontAwesomeIcon icon={faSnapchat} className="mr-2 text-yellow-500 hover:text-blue-500 cursor-pointer" size='2x'  />



                    {/* Add more social icons as needed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
