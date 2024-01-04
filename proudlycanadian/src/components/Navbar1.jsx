

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pc from '../images/pc.png';
import { Dialog, DialogContent } from '@mui/material';
import EmployerLogin from './LoginRegister/EmployerLogin';

const Navbar = () => {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLoginDialogOpen = () => {
    setOpenLoginDialog(true);
  };

  const handleLoginDialogClose = () => {
    setOpenLoginDialog(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10; 
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className='fixed w-full z-10 md:wfull '>
      <div className={` h-15 p-3 ${
        scrolled ? 'bg-blue-900' : 'bg-transparent'
      }`}>
        <div className="mx-auto ">
          <div className="flex justify-between items-center ">
            <div className="lg:flex items-center hidden md:flex">
              <Link to="/" title="Proudly Canadians">
                <img src={pc} className="h-14 ml-10 p-2" alt="logo-img" />
              </Link>
            </div>
            <div className="lg:flex items-center space-x-2 hidden md:flex">

              <Link
                to="/"
                className=" p-2  
                text-white "
              >
                Home
              </Link>
              <Link
                to="/aboutus" className="p-2  
                text-white "
              >
                About Us
              </Link>
              <Link
                to="/jobs" className="p-2  
                text-white "
              >
                Find Jobs
              </Link>
              <Link
                to="/job-fair"
                className="p-2  
                text-white "
              >
                Job Fairs
              </Link>
              <Link
                to="/virtualjob"
                className="p-2  
                text-white "
              >
                Virtual Jobs
              </Link>
              <Link
                to="/contact"
                className="p-2  
                text-white "
              >
                Contact
              </Link>
              <div className=" px-3  py-2
               hover:bg-white 
               hover:text-blue-900  bg-blue-900 
               rounded-full border-  text-white text-sm">
               
                <div onClick={handleLoginDialogOpen} className="">
                  Login / Register
                </div>
              </div>
              <Dialog open={openLoginDialog} onClose={handleLoginDialogClose}>
                <DialogContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <EmployerLogin onClose={handleLoginDialogClose} />
                </DialogContent>
              </Dialog>

              <Link
                to="/employers"
                className="p-2  hover:bg-blue-900  
                text-blue-800 hover:text-white
                 hover:border-2 hover:border-white
                  bg-white rounded-full"
              >
                Advertise Jobs
              </Link>
              

            </div>


          </div>
        </div>
      </div>


    </nav >
  );
};

export default Navbar;