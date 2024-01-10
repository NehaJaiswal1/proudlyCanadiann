

import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faCogs, faGraduationCap, faHistory, faUser, faAward, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../AuthContext/AuthContext.jsx'

import './ResumeTemplate.css';


function calculateExperienceYears(fromYear, toYear) {
    const fromDate = new Date(fromYear);
    const toDate = toYear ? new Date(toYear) : new Date();
    const yearDifference = toDate.getFullYear() - fromDate.getFullYear();

    return yearDifference;
}

function ResumeTemplate() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { logout, authData } = useAuth();
    const [resumeData, setResumeData] = useState(null);

    const handlePrint = () => {
        
        window.print();

        const content = document.documentElement.outerHTML;
        const blob = new Blob([content], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.html';
        a.click();
        URL.revokeObjectURL(url);
    };
    useEffect(() => {
        const fetchResumeData = async () => {
            try {
                const response = await fetch('https://job-portal-website-by5i.onrender.com/Job-Portal/Resume-Section/myResume', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authData.token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch resume data');
                }

                const data = await response.json();
                setResumeData(data.resumeData[data.resumeData.length - 1]);
                console.log("Last fetched object:", data);
            } catch (error) {
                console.error('Error fetching resume data:', error);
            }
        };

        fetchResumeData();
    }, []);


    return (
        <div className="resume overflow-hidden min-h-screen flex flex-col items-center">
            <div className='bg-rose-800 mb-4 overflow-hidden h-36 rounded-lg text-center flex flex-col items-center justify-center text-white w-full'>
                <h1>{resumeData?.fullName.toUpperCase()}</h1>
                <h2>NodeJs Developer</h2>
            </div>
            <Grid container spacing={2}>

                {/* Left Section Card */}
                <Grid item xs={12} md={6} >
                <Card  sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, backgroundColor: '#ffe4e6', height: '500px' }}>

                        <CardContent>
                            <div className="contact-title">
                                <Typography variant="h6" sx={{ fontSize: '18px', color: '#881337' }}>
                                    <FontAwesomeIcon icon={faUser} style={{ color: '#881337', marginRight: '5px' }} />
                                    My Contact
                                </Typography>
                            </div>
                            <Typography sx={{ color: '#881337'}}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: 'black', marginTop: '20px',  marginRight: '5px'  }} />
                               
                                {resumeData?.email}
                                    
                            </Typography>
                            <Typography sx={{ color: '#881337', marginTop: '5px' ,fontSize:'15px' }}>
                            <FontAwesomeIcon icon={faPhone} style={{ color: 'black', marginTop: '5px',  marginRight: '5px'  }} />
                                {resumeData?.mobileNo}
                            </Typography>
                            <Typography sx={{ color: '#881337' }}>
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black', marginTop: '5px',  marginRight: '5px'  }} />
                                {resumeData?.linkedinProfile}
                            </Typography>
                            <Typography sx={{ color: '#881337' }}>
                            <FontAwesomeIcon icon={faGithub} style={{ color: 'black', marginTop: '5px',  marginRight: '5px'  }} />
                                {resumeData?.githubProfile}
                            </Typography>

                            <Typography variant="h5" className="contact-title" sx={{ fontSize: '18px', color: '#881337', marginTop: '20px', marginBottom: '20px' }}>
                                <FontAwesomeIcon icon={faCogs} style={{ color: '#881337', marginRight: '5px' }} />
                                Skills
                            </Typography>
                            <ul style={{ marginTop: '5px' }}>
                                {resumeData?.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>

                            <Typography variant="h5" className="contact-title" sx={{ fontSize: '18px', color: '#881337', marginTop: '20px' }}>
                                <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#881337', marginRight: '5px' }} />
                                Education
                            </Typography>

                            <Typography variant="h5" sx={{ fontSize: '16px', color: 'black', marginTop: '20px' }}>
                                High School
                            </Typography>
                            <p style={{ margintTop: '5px', fontSize: '14px' }}>
                                <strong>{resumeData?.highSchool?.institute}</strong>,{resumeData?.highSchool?.passoutYear}, {resumeData?.highSchool?.percentage}
                            </p>

                            <Typography variant="h5" sx={{ fontSize: '16px', color: 'black', marginTop: '20px' }}>
                                Intermediate School
                            </Typography>
                            <p style={{ margintTop: '5px', fontSize: '14px' }}>
                                <strong>{resumeData?.intermediate
                                    ?.institute}</strong>,{resumeData?.intermediate
                                        ?.passoutYear}, {resumeData?.intermediate
                                            ?.percentage}
                            </p>

                            <Typography variant="h5" sx={{ fontSize: '16px', color: 'black', marginTop: '20px' }}>
                                Graduation
                            </Typography>
                            <p style={{ margintTop: '5px', fontSize: '14px' }}>
                                <strong>
                                    {resumeData?.ug?.
                                        institute}
                                </strong>,
                                {resumeData?.ug
                                    ?.passoutYear}, {resumeData?.ug
                                        ?.percentage}
                            </p>

                            {resumeData?.pg && (
                                <>
                                    <Typography variant="h5" sx={{ fontSize: '16px', color: 'black', marginTop: '20px' }}>
                                        Post Graduation
                                    </Typography>
                                    <p style={{ margintTop: '5px', fontSize: '14px' }}>
                                        <strong>{resumeData.pg.institute}</strong>, {resumeData.pg.passoutYear}, {resumeData.pg.percentage}
                                    </p>
                                </>
                            )}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} >
                <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, border: 'none', height: '500px'}}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontSize: '18px', color: '#881337' }} className="contact-title">
                                <FontAwesomeIcon icon={faUser} style={{ color: '#881337', marginRight: '5px' }} />
                                About Me
                            </Typography>
                            <p style={{ margintTop: '5px', fontSize: '14px' }}>{resumeData?.aboutMe}</p>

                            <Typography variant="h6" sx={{ fontSize: '18px', color: '#881337' , marginTop: '20px'}} className="contact-title">
                                <FontAwesomeIcon icon={faHistory} style={{ color: '#881337', marginRight: '5px' }} />
                                Professional Experience
                            </Typography>
                            {resumeData?.experienceLevel === "experience" ? (
                                <p style={{ margintTop: '5px', fontSize: '14px' }}>
                                    {calculateExperienceYears(resumeData?.fromYear, resumeData?.toYear)} years of experience
                                    <strong>{resumeData?.fromYear}</strong> to <strong>{resumeData?.toYear}</strong>
                                    <br />
                                    {resumeData?.workDetails}
                                </p>
                            ) : (
                                <p style={{ margintTop: '5px', fontSize: '14px' }}>{resumeData?.experienceLevel}</p>
                            )}

                            <Typography variant="h6" sx={{ fontSize: '18px', color: '#881337', marginTop: '20px' }} className="contact-title">
                                <FontAwesomeIcon icon={faTrophy} style={{ color: '#881337', marginRight: '5px' }} />
                                Achievements
                            </Typography>
                            <p style={{ margintTop: '5px', fontSize: '14px' }}>{resumeData?.achievements}</p>
                        </CardContent>
                    </Card>
                    
                </Grid>
                
            </Grid>
            <button
                        onClick={handlePrint}
                        style={{
                            marginTop: '20px',
                            backgroundColor: '#1e3a8a',
                            color: 'white',
                            padding: '2px 10px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Print and Save
                    </button>
        </div>
    );
}

export default ResumeTemplate;

