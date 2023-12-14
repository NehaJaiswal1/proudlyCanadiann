import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
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
      <div className="bg-white shadow-lg h-15 border-b-4 border-blue-900">
        <div className="mx-auto ">
          <div className="flex justify-between items-center py-2">
            <div className="lg:flex items-center hidden md:flex">
              <Link to="/" title="Proudly Canadians" rel="home">
                <img src={pc} className="h-15 p-2" alt="logo-img" />
              </Link>
            </div>
            <div className="lg:flex items-center space-x-3 hidden md:flex">
              {/* Navigation links for large screens */}
              <Link
                to="/"
                className="text-xl text-blue-900 hover:text-black"
              >
                <FontAwesomeIcon icon={faHome} />
              </Link>
              <Link
                to="/aboutus"
                className="font-bold text-blue-900 text-sm hover:text-black"
              >
                ABOUT US
              </Link>
              <Link
                to="/jobs"
                className="font-bold text-blue-900 text-sm hover:text-black"
              >
                FIND A JOB
              </Link>
              <Link
                to="/job-fair"
                className="font-bold text-blue-900 text-sm hover:text-black"
              >
                JOB FAIRS
              </Link>
              <Link
                to="/virtualjob"
                className="font-bold text-blue-900 text-sm hover:text-black"
              >
                VIRTUAL JOBS
              </Link>
              <Link
                to="/contact"
                className="font-bold text-blue-900 text-sm hover:text-black"
              >
                CONTACT US
              </Link>
              <Link
                to="/employers"
                className="text-white font-bold text-sm bg-black px-4 py-2 rounded-lg hover:bg-red-500"
              >
                ADVERTISE A JOB
              </Link>
              <div className="group">
                <button className="text-white bg-blue-900 px-4 py-2 text-sm font-bold rounded-lg hover:bg-red-500 mr-4">
                  PROFILE
                </button>
                <ul className="absolute hidden bg-white shadow-lg space-y-2 py-2 px-4 right-0 rounded-xl group-hover:block">
                  <li className="hover:text-white hover:bg-blue-900 hover:rounded-lg p-1 text-sm font-bold">
                    <Link to="/employers/auth/registration">
                      EMPLOYER REGISTRATION
                    </Link>
                  </li>
                  <li className="hover:text-white hover:bg-blue-900 hover:rounded-lg p-1 text-sm font-bold">
                    <Link to="/employers/auth/login">EMPLOYER LOGIN</Link>
                  </li>
                  <li className="hover:text-white hover:bg-blue-900 hover:rounded-lg p-1 text-sm font-bold">
                    <Link to="/auth/registration">APPLICANT REGISTRATION</Link>
                  </li>
                  <li className="hover:text-white hover:bg-blue-900 hover:rounded-lg p-1 text-sm font-bold">
                    <Link to="/auth/login">AP
                      PLICANT LOGIN</Link>
                  </li>
                  <li className="hover:text-white hover:bg-blue-900 hover:rounded-lg p-1 text-sm font-bold">
                    <Link to="/auth/forgot_password">PASSWORD RESET</Link>
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