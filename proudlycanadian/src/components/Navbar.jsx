import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faHomeAlt, faHomeUser, faHomeLg } from '@fortawesome/free-solid-svg-icons';
import pc from '../images/pc.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  
  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="bg-white shadow-lg h-15
       border-b-4 border-blue-900">
        <div className="mx-auto ">
          <div className="flex justify-between items-center ">
            <div className="lg:flex items-center hidden md:flex">
              <Link to="/" title="Proudly Canadians">
                <img src={pc} className="h-20 ml-10 p-4" alt="logo-img" />
              </Link>
            </div>
            <div className="lg:flex items-center space-x-2 hidden md:flex">
              {/* Navigation links for large screens */}
              <Link
                to="/"
                className="font-semibold p-2 text-red-700   hover:bg-blue-900 hover:text-white hover:rounded-lg"
              >
                <FontAwesomeIcon icon={faHomeLg} size='xl' />
              </Link>
              <Link
                to="/aboutus" style={{  fontFamily: 'Rubik',fontWeight: '600' }} 
                className=" p-2 text-blue-900   hover:bg-blue-900 hover:text-white hover:rounded-lg"
              >
                About Us
              </Link>
              <Link
                to="/jobs" style={{  fontFamily: 'Rubik',fontWeight: '600' }}
                className="font-semibold p-2 text-blue-900   hover:bg-blue-900 hover:text-white hover:rounded-lg"
              >
                Find A Job
              </Link>
              <Link
                to="/job-fair"
                style={{  fontFamily: 'Rubik',fontWeight: '600' }}
                className="font-semibold p-2 text-blue-900   hover:bg-blue-900 hover:text-white hover:rounded-lg"
              >
                Job Fairs
              </Link>
              <Link
                to="/virtualjob"
                style={{  fontFamily: 'Rubik',fontWeight: '600' }}
                className="font-semibold p-2 text-blue-900   hover:bg-blue-900 hover:text-white hover:rounded-lg"
              >
                Virtual Jobs
              </Link>
              <Link
                to="/contact"
                style={{  fontFamily: 'Rubik',fontWeight: '600' }}
                className="font-semibold p-2 text-blue-900   hover:bg-blue-900 hover:text-white hover:rounded-lg"
              >
                Contact
              </Link>
              <Link
                to="/employers"
                style={{  fontFamily: 'Rubik',fontWeight: '600' }}
                className="text-white font-semibold 
                 bg-gray-500 px-4 py-2 rounded-lg hover:bg-red-500"
              >
                Advertise A Job
              </Link>
              <div className="group">
                <button style={{  fontFamily: 'Rubik',fontWeight: '600' }}className="text-white bg-blue-900 px-4 py-2  rounded-lg hover:bg-red-500 mr-4">
                  Login/Register
                </button>
                <ul  style={{  fontFamily: 'Rubik',fontWeight: '600' }} className="absolute hidden bg-white shadow-lg text-gray-600 space-y-3  py-5 px-6 right-4 rounded-lg group-hover:block">
                  <li className="hover:text-white hover:bg-blue-900 
                  hover:rounded-lg 
                   px-2 py-2">
                    <Link to="/employers/auth/registration">
                      Employer 
                    </Link>
                  </li>
                  <li className="hover:text-white hover:bg-blue-900 
                  hover:rounded-lg px-2 py-2 ">
                    <Link to="/auth/registration">Applicant </Link>
                  </li>
                  <li className="hover:text-white hover:bg-blue-900 
                  hover:rounded-lg px-2 py-2 ">
                    <Link to="/employers/auth/login">Login</Link>
                  </li>
                 
                 
                  
                </ul>
              </div>
            </div>

            <div className="lg:hidden p-5">
              <button
                onClick={toggleMenu}
                className="text-blue-900
                 hover:text-black"
              >
                <FontAwesomeIcon icon={faBars} size="lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden  absolute top-16 left-0 right-0 bg-white shadow-lg py-2 px-4 rounded-xl w-2/12">
          <Link
            to="/"
            className="block text-blue-900 hover:text-black mb-2"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="block text-blue-900 hover:text-black mb-2"
          >
            About Us
          </Link>
          <Link
            to="/jobs"
            className="block text-blue-900 hover:text-black mb-2"
          >
            Find a Job
          </Link>
          <Link
            to="/job-fair"
            className="block text-blue-900 hover:text-black mb-2"
          >
            Job Fairs
          </Link>
          <Link
            to="/virtualjob"
            className="block text-blue-900 hover:text-black mb-2"
          >
            Virtual Jobs
          </Link>
          <Link
            to="/contact"
            className="block text-blue-900 hover:text-black mb-2"
          >
            Contact Us
          </Link>
          <Link
            to="/employers"
            className="block text-blue-900 hover:text-black mb-2"
          >
            Advertise a Job
          </Link>
         
          <Link
            to="/employers/auth/registration"
            className="block text-blue-900 hover:text-black mb-2"
          >
            Employer Registration
          </Link>
          <Link
            to="/employers/auth/login"
            className="block text-blue-900 hover:text-black mb-2"
          >
            Employer Login
          </Link>
          <Link
            to="/auth/registration"
            className="block text-blue-900 hover:text-black mb-2"
          >
            Applicant Registration
          </Link>
          <Link
            to="/auth/login"
            className="block text-blue-900 hover:text-black mb-2"
          >
            Applicant Login
          </Link>
          <Link
            to="/auth/forgot_password"
            className="block text-blue-900 hover:text-black mb-2"
          >
            Password Reset
          </Link>
        </div>
      )}
   
          </nav >
          );
};

export default Navbar;