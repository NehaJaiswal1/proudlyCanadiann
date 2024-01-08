

import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './ResumeTemplate.css';

function ResumeTemplate() {
    return (
        <div className="resume overflow-hidden min-h-screen flex flex-col items-center">
            <div className='bg-rose-800  border-t-2 border-rose-800 mb-4 overflow-hidden h-36 rounded-lg text-center flex flex-col items-center justify-center text-white w-full'>
                <h1>Your Name</h1>
                <h2>Designation</h2>
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
                                <FontAwesomeIcon icon={faEnvelope} /> your.email@example.com
                            </Typography>
                            <Typography>
                                <FontAwesomeIcon icon={faPhone} /> (123) 456-7890
                            </Typography>
                            <Typography>
                                <FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/yourname
                            </Typography>
                            <Typography>
                                <FontAwesomeIcon icon={faGithub} /> github.com/yourusername
                            </Typography>


                            <Typography variant="h5">Hard Skills</Typography>
                            <ul>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                            </ul>

                            <Typography variant="h5">Soft Skills</Typography>
                            <ul>
                                <li>Skill A</li>
                                <li>Skill B</li>
                                <li>Skill C</li>
                            </ul>

                            <Typography variant="h5">Education</Typography>
                            <p>
                                <strong>University Name</strong>, Degree, Graduation Year
                            </p>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right Section Card */}
                <Grid item xs={12} md={6}>
                    <Card className="right-card">
                        <CardContent>
                            <Typography variant="h5">About Me</Typography>
                            <p>Your brief introduction goes here.</p>

                            <Typography variant="h5">Professional Experience</Typography>
                            <p>
                                <strong>Job Title</strong>, Company Name, Start Date - End Date
                            </p>
                            <ul>
                                <li>Responsibility or accomplishment 1</li>
                                <li>Responsibility or accomplishment 2</li>
                            </ul>

                            <Typography variant="h5">Projects</Typography>
                            <p>
                                <strong>Project Title</strong>, Project Description, Date
                            </p>

                            <Typography variant="h5">Achievements</Typography>
                            <p>Any notable achievements you want to mention.</p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default ResumeTemplate;

