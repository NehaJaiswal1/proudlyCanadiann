

import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../AuthContext/AuthContext.jsx'

import './ResumeTemplate.css';

function ResumeTemplate() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { logout, authData } = useAuth();
    const [resumeData, setResumeData] = useState(null);

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
            <Grid container spacing={3}>

                {/* Left Section Card */}
                <Grid item xs={12} md={6}>
                    <Card className="left-card">
                        <CardContent>
                            <div className="contact-title">
                                <Typography variant="h6" style={{ fontSize: '18px' }}>
                                    My Contact
                                </Typography>
                            </div>
                            <Typography>
                                <FontAwesomeIcon icon={faEnvelope} /> {resumeData?.email}
                            </Typography>
                            <Typography>
                                <FontAwesomeIcon icon={faPhone} />
                                {resumeData?.mobileNo}
                            </Typography>
                            <Typography>
                                <FontAwesomeIcon icon={faLinkedin} />
                                {
                                    resumeData?.linkedinProfile}
                            </Typography>
                            <Typography>
                                <FontAwesomeIcon icon={faGithub} />
                                {resumeData?.githubProfile}
                            </Typography>


                            <Typography variant="h5">Skills</Typography>
                            <ul>
                                {resumeData?.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>

                            <Typography variant="h5">
                                High School
                            </Typography>
                            <p>
                                <strong>{resumeData?.highSchool?.institute}</strong>,{resumeData?.highSchool?.passoutYear}, {resumeData?.highSchool?.percentage}
                            </p>

                            <Typography variant="h5">
                                Intermediate School
                            </Typography>
                            <p>
                                <strong>{resumeData?.intermediate
                                    ?.institute}</strong>,{resumeData?.intermediate
                                        ?.passoutYear}, {resumeData?.intermediate
                                            ?.percentage}
                            </p>

                            <Typography variant="h5">
                                Graduation
                            </Typography>
                            <p>
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
                                    <Typography variant="h5">
                                        Post Graduation
                                    </Typography>
                                    <p>
                                        <strong>{resumeData.pg.institute}</strong>, {resumeData.pg.passoutYear}, {resumeData.pg.percentage}
                                    </p>
                                </>
                            )}
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right Section Card */}
                <Grid item xs={12} md={6}>
                    <Card className="right-card">
                        <CardContent>
                            <Typography variant="h5">
                                About Me
                            </Typography>
                            <p> {resumeData?.aboutMe}</p>

                            <Typography variant="h5">Professional Experience</Typography>
                            <p>
                                <strong>{resumeData?.experienceLevel}</strong>,
                            </p>
                            {/* <ul>
                                <li>Responsibility or accomplishment 1</li>
                                <li>Responsibility or accomplishment 2</li>
                            </ul> */}

                            {/* <Typography variant="h5">Projects</Typography>
                            <p>
                                <strong>Project Title</strong>, Project Description, Date
                            </p> */}

                            <Typography variant="h5">Achievements</Typography>
                            <p>{resumeData?.achievements}</p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default ResumeTemplate;

