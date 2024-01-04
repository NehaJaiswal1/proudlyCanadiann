
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { hotJobs } from '../../Data/HotJobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faLocation, faMapMarker, faTags, faIndustry, faClock, faSuitcase, faSearch, faMap, faMapMarkedAlt, faMapLocation, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router';
// import {dl} from '../../images/dl.jpeg';
import cl from '../../images/dl.jpeg'


const RadioToggle = ({ label, value, selected, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        checked={selected}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <div className={`w-10 h-5 bg-gray-300 rounded-full p-1 transition-transform relative ${selected && 'bg-blue-500'}`}>
        <div className={`w-3 h-3 bg-white rounded-full transform ${selected && 'translate-x-5'}`}></div>
      </div>
      <span className="text-gray-600">{label}</span>
    </label>
  );
};

const FindAJob = () => {


  const location = useLocation();
  const jobsData = location.state?.jobsData || [];
  console.log(jobsData)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedEmploymentType, setSelectedEmploymentType] = useState('');

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/Categories/allCategories');
        const categoriesData = await response.json();
        setCategoryList(categoriesData.allCategories
          || []);
        console.log('Category List:', categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/JobRoute/allJobs');
        const responseData = await response.json();
        setData(responseData.allJObDetails);
        console.log('API Response:', responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log('Data:', data);

  const handleFindJob = () => {
    console.log('Searching for a job...');
  };

  const handleSearch = async () => {

    const apiUrl = `https://job-portal-website-by5i.onrender.com/Job-Portal/JobRoute/searchJobByQuery?jobTitle=${jobTitle}&City=${selectedLocation}&jobCategory=${selectedCategory}`;

    try {
      const response = await fetch(apiUrl);

      if (response.ok) {
        const searchData = await response.json();
        console.log('Job search results:', searchData);

        navigate({
          pathname: '/jobs',
          state: {
            searchResults: searchData,
            jobTitle,
            city: selectedLocation,
            jobCategory: selectedCategory,
          },
        });
      } else {
        console.error('Error fetching job data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching job data:', error.message);
    }
  };
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  const handleApply = (jobId) => {
    console.log(jobId)
    navigate(`/job-details/${jobId}`);
  };




  useEffect(() => {

  }, []);
  const [minExperience, setMinExperience] = useState(0);
  const [maxExperience, setMaxExperience] = useState(100);

  const handleMinExperienceChange = (event) => {
    setMinExperience(event.target.value);
  };

  const handleMaxExperienceChange = (event) => {
    setMaxExperience(event.target.value);
  };

  const [selectedJobType, setSelectedJobType] = useState('');

  const handleJobTypeChange = (value) => {
    setSelectedJobType(value === selectedJobType ? '' : value);
  };

  const [currentPageData, setCurrentPageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentPageData(data.slice(indexOfFirstItem, indexOfLastItem));
  }, [data, currentPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const [employmentTypes, setEmploymentTypes] = useState([]);

  useEffect(() => {
    const fetchEmploymentTypes = async () => {
      try {
        const response = await fetch('https://job-portal-website-by5i.onrender.com/job-Portal/EmpType-Route/all-EmpTypes');
        const employmentTypesData = await response.json();
        setEmploymentTypes(employmentTypesData);
        console.log("employmentTypesData", employmentTypesData)
      } catch (error) {
        console.error('Error fetching employment types:', error);
      }
    };

    fetchEmploymentTypes();
   
  }, []);



  return (
    <div>
      <Navbar />
      <div className=''>
        <div style={{ height: '70px' }}></div>
        <div className='text-3xl text-gray-800 bg-slate-200 text-center h-36 p-10'>Find Jobs</div>

      </div>
      <div className='flex p-10 space-x-5'>
        <div className=
          ' p-6 h-3/6 w-2/6 mt-8  bg-slate-100'>
          <Grid className='' container spacing={1} justifyContent="center">
            <div>
              <p className='text-lg text-gray-600 font-medium text-left mt-5'>Search by Keywords</p>
              <div className='flex bg-white rounded-lg p-3 text-center mt-5 w-72 '>
                <FontAwesomeIcon icon={faSearch} className='text-gray-500 text-center p-2' />
                <input
                  placeholder='Job title, Keywords, or Company'
                  className='text-gray-400 text-center  focus:outline-none'
                />
              </div>
            </div>

            <div >
              <p className='text-lg text-gray-600 font-medium text-left mt-5'>Location</p>
              <div className='flex bg-white rounded-lg p-3 text-center mt-5 w-72 '>
                <FontAwesomeIcon icon={faMapLocationDot} className='text-gray-500 text-center p-2' />
                <input
                  placeholder='City or postcode'
                  className='text-gray-400 text-center  focus:outline-none'
                />
              </div>
              <p className='text-md text-gray-600 font-medium text-left mt-5'>Minimum Experience: {minExperience}</p>
              <input
                type='range'
                min='0'
                max='100'
                step='1'
                value={minExperience}
                onChange={handleMinExperienceChange}
                className='text-blue-700 text-center w-full focus:outline-none'
                style={{
                  background: `linear-gradient(to right, #1e3a8a ${minExperience}%, #d1d5db ${minExperience}%)`,
                }}
              />

              <p className='text-md text-gray-600 font-medium text-left mt-5'>Maximum Experience: {maxExperience}</p>
              <input
                type='range'
                min='0'
                max='100'
                step='1'
                value={maxExperience}
                onChange={handleMaxExperienceChange}
                className='text-blue-700 text-center w-full '

                style={{
                  background: `linear-gradient(to right, #1e3a8a ${maxExperience}%, #d1d5db ${maxExperience}%)`,
                }}
              />

              {/* <p className='text-sm text-gray-500 mt-5'>
                Radius around selected destination
              </p> */}
              {/* <input
                type='range'
                min='1'
                max='100'
                step='1'
                value={radius}
                onChange={handleRadiusChange}
                className='text-blue-700 text-center w-full focus:outline-none'
              /> */}
              {/* <button className='bg-blue-200 text-blue-800 
              p-4 rounded-lg text-sm mx-auto block w-2/6 h-10 text-center'>{radius} Km</button> */}
            </div>
            <div>
              <p className='text-lg text-gray-600 font-medium text-left mt-5'>Job type</p>
              <div className="flex flex-col rounded-lg p-3 text-center mt-5 w-72">
                <RadioToggle
                  label="Freelancer"
                  value="Freelancer"
                  selected={selectedJobType === 'Freelancer'}
                  onChange={handleJobTypeChange}
                />
                <RadioToggle
                  label="Full Time"
                  value="Full Time"
                  selected={selectedJobType === 'Full Time'}
                  onChange={handleJobTypeChange}
                />
                <RadioToggle
                  label="Part Time"
                  value="Part Time"
                  selected={selectedJobType === 'Part Time'}
                  onChange={handleJobTypeChange}
                />
                <RadioToggle
                  label="Temporary"
                  value="Temporary"
                  selected={selectedJobType === 'Temporary'}
                  onChange={handleJobTypeChange}
                />
              </div>
            </div>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  label="Category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  renderValue={(selected) => {
                    const selectedCategoryObject = categoryList.find(category => category._id === selected);
                    return selectedCategoryObject ? selectedCategoryObject.category : '';
                  }}
                >
                  {categoryList.map((category) => (
                    <MenuItem key={category._id} value={category._id}>
                      <Checkbox checked={selectedCategory === category._id} />
                      {category.category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>


            {/* <Grid item xs={12} >
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="experience-label">Experience</InputLabel>
                <Select
                  labelId="experience-label"
                  label="Experience"
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  renderValue={(selected) => selected}
                >
                  <MenuItem value="Experience1">
                    <Checkbox checked={selectedExperience === 'Experience1'} />
                    Experience1
                  </MenuItem>
                  <MenuItem value="Experience2">
                    <Checkbox checked={selectedExperience === 'Experience2'} />
                    Experience2
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
             */}
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="employmentType-label">Employment Type</InputLabel>
                <Select
                  labelId="employmentType-label"
                  label="Employment Type"
                  value={selectedEmploymentType}
                  onChange={(e) => setSelectedEmploymentType(e.target.value)}
                  renderValue={(selected) => selected}
                >
                  {employmentTypes.map((employmentType) => (
                    <MenuItem key={employmentType._id} value={employmentType.employmentType}>
                      <Checkbox checked={selectedEmploymentType === employmentType.employmentType} />
                      {employmentType.employmentType}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSearch}
                style={{ marginTop: '16px', backgroundColor: '#1e3a8a' }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
        <div className="p-4 w-3/4 mt-5">
          {jobsData.length > 0 ? (

            jobsData.map((job, index) => (
              <div key={index} className='shadow-md rounded-2xl  shadow-slate-400 hover:border-2 hover:border-blue-900 bg-slate-50  
              hover:h-46'>
                <div key={index} className=" flex rounded-lg mt-4 mb-4 justify-between">
                  <div className='flex ml-2'>
                    <img src={cl} className="w-20 h-20 mt-10 rounded-full border-gray-800" alt="logo-img" />

                    <div className='ml-10 text-gray-600' style={{ fontFamily: 'Rubik', fontWeight: '600', textTransform: 'capitalize' }}>
                      <p className='font-bold mt-3 text-xl'>
                        {job.jobTitle}</p>

                      <div className=' mb-2 mt-5'>
                        <div className='flex space-x-5'>
                          <p className='text-md'>
                            <FontAwesomeIcon icon={faTag} className="mr-2 text-red-600" />
                            ID-{job.jobId}</p>
                          <p className='text-md'>
                            <FontAwesomeIcon icon={faTag} className="mr-2 text-red-600" />
                            NOC-{job.NOC}</p>
                          <p className=' text-md '>
                            <FontAwesomeIcon icon={faMapMarker} className="mr-2 text-red-600" />
                            {job.City}</p>
                          <p className=' text-md '> <FontAwesomeIcon icon={faClock} className="mr-2 text-red-600" />{formatDate(job.PostedDate)}
                          </p>
                        </div>
                        <div className='flex space-x-6'>

                          <p className='text-md flex items-center'>
                            <FontAwesomeIcon icon={faSuitcase} className="mr-2 text-red-600" /> {job.jobType}/
                            {job.EmployementType}
                          </p>
                        </div>
                        <div className='flex space-x-2 mb-5'>
                          <p className='  text-md flex items-center'>
                            <FontAwesomeIcon icon={faIndustry} className="mr-2 text-red-600" />
                            {job.jobCategory}</p>

                        </div>
                      </div>
                    </div>

                  </div>
                  <div className='flex mt-5  '>
                    <button className='bg-blue-900 text-white p-2 rounded-full w-28 h-10 m-4 text-sm font-bold hover:bg-red-600'
                      onClick={() => handleApply(`${job._id}`)}>APPLY</button>


                  </div>
                </div>
              </div>
            ))
          ) : (
            currentPageData.map((job, index) => (
              <div className='shadow-slate-400 
              bg-slate-50 
              border-2
               border-slate-100 rounded-2xl ' style={{ fontFamily: 'Rubik', fontWeight: '600', marginBottom: '20px' }}>

                <div key={index} className=" flex rounded-lg mt-4 mb-4 justify-between " >
                  <div className='flex ml-2'>
                    <img src={cl} alt="logo-img" className="w-16 h-16 border-2 border-gray-200 ml-5 rounded-2xl" />


                    <div className='ml-10 text-gray-600'
                      style={{ fontFamily: 'Rubik', fontWeight: '600', textTransform: 'capitalize' }}>
                      {/* <p className='font-bold mt-3 text-xl'>
                        </p> */}


                      <Link
                        to={`/job-details/${job._id}`}
                        className='mt- text-gray-700 font-bold mt-3 cursor-pointer hover:underline'
                        style={{ textTransform: 'capitalize' }}
                      >
                        {job.jobTitle}
                      </Link>

                      <div className=' mb-2 mt-5'>
                        <div className='flex space-x-5'>
                          <p className='text-md'>
                            <FontAwesomeIcon icon={faTag} className="mr-2 text-red-600" />
                            ID-{job.jobId}</p>
                          <p className='text-md'>
                            <FontAwesomeIcon icon={faTag} className="mr-2 text-red-600" />
                            NOC-{job.NOC}</p>
                          <p className=' text-md '>
                            <FontAwesomeIcon icon={faMapMarker} className="mr-2 text-red-600" />
                            {job.City}</p>
                          <p className=' text-md '> <FontAwesomeIcon icon={faClock} className="mr-2 text-red-600" />{formatDate(job.PostedDate)}
                          </p>
                        </div>
                        <div className='flex'>
                          <p className='p-2 m-2 text-xs rounded-full font-semibold w-2/6 h-2/4
                                                 bg-blue-100
                         text-blue-600 text-center'>

                            {job.EmployementType}</p>
                          <p className='p-2 m-2 text-xs rounded-full font-semibold w-2/6 h-2/4 bg-yellow-100
                         text-yellow-600 text-center'>
                            {job.jobType
                              && job.jobType.split(' ').slice(0, 2).join(' ')}
                          </p>
                          <p className='p-2 m-2 text-xs rounded-full font-semibold w-2/6 h-2/4 bg-green-100
                         text-green-600 text-center'>

                            {job.jobCategory}</p>
                        </div>

                      </div>
                    </div>

                  </div>
                  <div className='flex mt-5  '>
                    <button className='bg-blue-900
                     text-white p-2 rounded-full w-28 h-10 m-4 text-sm font-bold hover:bg-red-600'
                      onClick={() => handleApply(`${job._id}`)}>APPLY</button>
                    {/* <button className='bg-blue-900 hover:bg-red-600 text-white  rounded-2xl w-32  h-10 m-4 text-xs font-bold' onClick={() => handleQuickApply(job.id)}>QUICK APPLY</button> */}

                  </div>
                </div>
              </div>
            ))
          )}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-blue-900 text-white p-2 rounded-full w-10 h-10 text-sm font-bold hover:bg-red-600"
            >
              {"<"}
            </button>
            <div className="text-gray-600 font-bold">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-blue-900 text-white p-2 rounded-full w-10 h-10 text-sm font-bold hover:bg-red-600"
            >
              {">"}
            </button>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
};

export default FindAJob;