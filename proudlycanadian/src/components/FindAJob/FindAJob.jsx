import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
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
import { faTag,faLocation, faMapMarker, faTags, faIndustry, faClock } from '@fortawesome/free-solid-svg-icons';



const FindAJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [selectedNOC, setSelectedNOC] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedEmploymentType, setSelectedEmploymentType] = useState('');
  const [data, setData] = useState([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/JobRoute/allJobs');
        const responseData = await response.json();
        setData(responseData.allJObDetails); // <-- Set the data state
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

  const handleSearch = () => {
    console.log('Searching for a job...');
  };


  const handleApply = (jobId) => {

    console.log(`Applying for job with ID ${jobId}`);
  };

  const handleQuickApply = (jobId) => {

    console.log(`Quick applying for job with ID ${jobId}`);
  };


  useEffect(() => {

  }, []);

  return (
    <div>
      <Navbar />
      <div className=''>
        <div style={{ height: '150px' }}></div>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} lg={3}>
            <div style={{ padding: '2px' }}>
              <TextField
                label="What are you looking for?"
                variant="outlined"
                fullWidth
                margin="normal"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <div style={{ padding: '2px' }}>
              <TextField
                select
                label="Select NOC"
                variant="outlined"
                fullWidth
                margin="normal"
                value={selectedNOC}
                onChange={(e) => setSelectedNOC(e.target.value)}
              >
                <MenuItem value="noc1">NOC 1</MenuItem>
                <MenuItem value="noc2">NOC 2</MenuItem>
              </TextField>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <div >
              <TextField
                select
                label="Select Location"
                variant="outlined"
                fullWidth
                margin="normal"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <MenuItem value="location1">Location 1</MenuItem>
                <MenuItem value="location2">Location 2</MenuItem>
              </TextField>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <div >
              <TextField
                select
                label="Select Salary"
                variant="outlined"
                fullWidth
                margin="normal"
                value={selectedSalary}
                onChange={(e) => setSelectedSalary(e.target.value)}
              >
                <MenuItem value="salary1">Salary 1</MenuItem>
                <MenuItem value="salary2">Salary 2</MenuItem>
              </TextField>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={1}>
            <div style={{ padding: '1px' }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleFindJob}
                style={{ marginTop: '16px', height: '52px' }}
              >
                Find Job
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className='flex p-10 '>
      <div className='shadow-md shadow-blue-900 
        p-5 h-3/6 w-5/12 mt-8'>
          <Grid className='' container spacing={1} justifyContent="center">
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  label="Category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  renderValue={(selected) => selected}
                >
                  <MenuItem value="category1">
                    <Checkbox checked={selectedCategory === 'category1'} />
                    Category 1
                  </MenuItem>
                  <MenuItem value="category2">
                    <Checkbox checked={selectedCategory === 'category2'} />
                    Category 2
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} >
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
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="category-label">Job Type</InputLabel>
                <Select
                  labelId="jobType-label"
                  label="Job Type"
                  value={selectedJobType}
                  onChange={(e) => setSelectedJobType(e.target.value)}
                  renderValue={(selected) => selected}
                >
                  <MenuItem value="Full Time">
                    <Checkbox checked={selectedJobType === 'Full Time'} />
                    Full Time
                  </MenuItem>
                  <MenuItem value="Part Time">
                    <Checkbox checked={selectedJobType === 'Part Time'} />
                    Part Time
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
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
                  <MenuItem value="Permanent">
                    <Checkbox checked={selectedEmploymentType === 'Permanent'} />
                    Permanent
                  </MenuItem>
                  <MenuItem value="Contract">
                    <Checkbox checked={selectedEmploymentType === 'Contract'} />
                    Contract
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSearch}
                style={{ marginTop: '16px' }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
        <div className="p-4">
          {data.map((job, index) => (
            <div className='shadow shadow-slate-400 '>
              <div key={index} className=" flex rounded-lg mt-4 mb-4 justify-between">
                <div className='flex ml-10 '>
                  <img src='https://proudlycanadians.ca/assets_new/img/company-logo.png' className="w-12 rounded-full border-gray-800" alt="logo-img" />
                  <div className='ml-10 '>
                    <p className='font-bold mt-3'>
                      {job.jobTitle}</p>
                    <div className=' mb-2 mt-1'>
                     
                      
                      <p className=' text-xs '>
                      <FontAwesomeIcon icon={faMapMarker} className="mr-2" />{job.City}</p>
                      <p className='text-xs flex items-center'>
                        <FontAwesomeIcon icon={faTags} className="mr-2" /> {job.jobType}
                      </p>
                      <p className='  text-xs flex items-center'>
                      <FontAwesomeIcon icon={faIndustry} className="mr-2" /> 
                        {job.jobCategory}</p>
                      <p className=' text-xs '> <FontAwesomeIcon icon={faClock} className="mr-2" /> {job.postedDate}</p>
                    </div>
                  </div>

                </div>
                <div className='flex mt-5 '>
                  <button className='bg-blue-900 text-white p-2 rounded-2xl w-20 h-10 m-4 text-xs font-bold hover:bg-red-600' onClick={() => handleApply(job.id)}>APPLY</button>
                  <button className='bg-blue-900 hover:bg-red-600 text-white  rounded-2xl w-32  h-10 m-4 text-xs font-bold' onClick={() => handleQuickApply(job.id)}>QUICK APPLY</button>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default FindAJob;