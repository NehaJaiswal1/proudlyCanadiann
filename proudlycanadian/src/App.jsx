
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';
import Jobs from './components/FindAJob/FindAJob';
import AdvertiseAJob from './components/AdvertiseAJob/AdvertiseAJob';
import EmployerRegistration from './components/LoginRegister/EmployerRegistration';
import EmployerLogin from './components/LoginRegister/EmployerLogin';   
import ApplicantRegistration from './components/LoginRegister/ApplicantRegistration';
import ApplicantLogin from './components/LoginRegister/ApplicantLogin';
import PasswordReset from './components/LoginRegister/PasswordReset';
import JobFairs from './components/JobFairs/JobFairs';
import ContactUs from './components/ContactUs';
import VirtualCareerFair from './components/JobFairs/VirtualCareerFair';


const App = () => {
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/employers" element={<AdvertiseAJob />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/job-fair" element={<JobFairs/>} />
          <Route path="/virtualcareerfair" element={<VirtualCareerFair />} /> 
          <Route path="/employers/auth/registration" element={<EmployerRegistration/>} />
          <Route path="/employers/auth/login" element={<EmployerLogin />} />
          <Route path="/auth/registration" element={<ApplicantRegistration />} />
          <Route path="/auth/login" element={<ApplicantLogin/>}/>
          <Route path="auth/forgot_password" element={<PasswordReset/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
