import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    AppBar,
    Container,
    Tab,
    Tabs,
    Card,
    CardContent,
    Popover,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import Navbar from '../Navbar';
import Footer from '../JobFairs/JobFairsFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import jobfair1 from '../../images/jobfair.jpg';
import jobfair2 from '../../images/jobfair2.jpg';
import jobfair3 from '../../images/jobfair3.jpg';
import { upcomingfair, upcomingfair2 } from '../../Data/UpComingJob';
import YouTube from 'react-youtube';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import jb1 from '../../images/jobfair-Discoveryourroute.jpg';
import jb2 from '../../images/jobfair-doyourbest.jpg';
import jb3 from '../../images/jobfair-doyourbestwork.jpg';
import jb4 from '../../images/jobfair-doyourbestworkever.jpg';
import jb5 from '../../images/jobfair-hiring.png';
import jb6 from '../../images/jobfair-hiring2.jpg';
import jb7 from '../../images/jobfair-team.jpg';
import companyImage1 from '../../images/companies/air.jpg';
import companyImage2 from '../../images/companies/amazon.jpg';
import companyImage3 from '../../images/companies/bmo.jpg';
import companyImage4 from '../../images/companies/canadaPost.jpg';
import companyImage5 from '../../images/companies/canadiantire.jpg';
import companyImage6 from '../../images/companies/cn.jpg';
import companyImage7 from '../../images/companies/cra.jpg';
import companyImage8 from '../../images/companies/delloite.jpg';
import companyImage9 from '../../images/companies/dollarrama.jpg';
import companyImage10 from '../../images/companies/hydro.jpg';
import companyImage11 from '../../images/companies/ibm.jpg';
import companyImage12 from '../../images/companies/marriott.jpg';
import companyImage13 from '../../images/companies/purolator.jpg';
import companyImage14 from '../../images/companies/staples.jpg';
import companyImage15 from '../../images/companies/td.jpg';
import companyImage16 from '../../images/companies/ups.jpg';









function JobFairs() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);


    const getVideoId = (url) => {
        const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return match && match[1];
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const cardSliderSettings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    const companyImages = [companyImage1, companyImage2, companyImage3, companyImage4, companyImage5, companyImage6, companyImage7, companyImage8, companyImage9, companyImage10, companyImage11, companyImage12, , companyImage13, companyImage14];

    const NextArrow = (props) => (
        <div {...props} className="slick-arrow slick-next bg-black rounded-full justify-center mr-7">
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
    );

    const PrevArrow = (props) => (
        <div {...props} className="slick-arrow slick-prev bg-black rounded-full justify-center ml-7">
            <FontAwesomeIcon icon={faArrowLeft} />
        </div>
    );

    const cardSettings = {

        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };



    const images = [jb1, jb2, jb3, jb4, jb5, jb6, jb7];

    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const navOptions = [
        'Home',
        'Career Fairs',
        'Testimonial',
        'Latest Updates',
        'Past Exhibitors',
        'Virtual Career Fair',
    ];

    const locations = [
        'ONTARIO',
        'ALBERTA',
        'BRITISH COLUMBIA',
        'SASKATCHEWAN',
        'NOVA SCOTIA',
        'NEW BRUNSWICK',
        'QUEBEC',
        'MANITOBA WINNIPEG',
        'YUKON',
        'PRINCE EDWARD ISLAND',
        'NORTH WEST TERRITORIES',
    ];

    const [anchorEl, setAnchorEl] = useState(null);

    const handleLocationClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLocationClose = () => {
        setAnchorEl(null);
    };

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };


    const [likeCounts, setLikeCounts] = useState(Array(upcomingfair.length).fill(0));

    const handleLikeClick = (index) => {
        const newLikeCounts = [...likeCounts];
        newLikeCounts[index] += 1;
        setLikeCounts(newLikeCounts);
    };



    return (
        <div>
            <Navbar />

            <div style={{ height: '90px' }}></div>

            <AppBar position="static" color="default">
                <Container>
                    <Tabs className='ml-4'>
                        {navOptions.map((option, index) => (
                            <React.Fragment key={index}>
                                {option === 'Career Fairs' ? (
                                    <Tab
                                        label={option}
                                        aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        onClick={handleLocationClick}
                                        sx={{
                                            padding: '20px',
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            marginTop: '20px',
                                            borderTop: '2px solid transparent',
                                            borderLeft: '2px solid transparent',
                                            borderRight: '2px solid transparent',
                                            borderBottom: '2px solid transparent',
                                            '&:hover': {
                                                borderBottomColor: '#1e3a8a',
                                                borderTopColor: '#1e3a8a',
                                                borderLeftColor: '#1e3a8a',
                                                borderRightColor: '#1e3a8a',
                                                backgroundColor: '#1e3a8a',
                                                color: 'white',
                                                borderRadius: '5px',
                                            },
                                        }}
                                    />
                                ) : (
                                    <Tab
                                        key={index}
                                        label={option}
                                        href={`#${option.toLowerCase().replace(' ', '-')}`}
                                        sx={{
                                            padding: '20px',
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            marginTop: '20px',
                                            borderTop: '2px solid transparent',
                                            borderLeft: '2px solid transparent',
                                            borderRight: '2px solid transparent',
                                            borderBottom: '2px solid transparent',
                                            '&:hover': {
                                                borderBottomColor: '#1e3a8a',
                                                borderTopColor: '#1e3a8a',
                                                borderLeftColor: '#1e3a8a',
                                                borderRightColor: '#1e3a8a',
                                                backgroundColor: '#1e3a8a',
                                                color: 'white',
                                                borderRadius: '5px',
                                            },
                                        }}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                     
                        <Popover
                            open={Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            onClose={handleLocationClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <List>
                                {locations.map((location, index) => (
                                    <ListItemButton 
                                    key={index} onClick={handleLocationClose}>
                                        <ListItemText primary={location} 
                                        />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Popover>
                    </Tabs>
                </Container>
            </AppBar>

            <div className="bg-white">
                <div className="h-96 px-12 overflow-hidden">
                    <Slider {...sliderSettings}>
                        <div>
                            <img src={jobfair1} alt="Job Fair 1" className="h-full w-auto" />
                        </div>
                        <div>
                            <img src={jobfair2} alt="Job Fair 2" className="h-full w-auto" />
                        </div>
                        <div>
                            <img src={jobfair3} alt="Job Fair 3" className="h-full w-auto" />
                        </div>
                    </Slider>
                </div>
            </div>
            {/* welcome text */}
            <div className='px-12'>
                <h1 className='text-slate-700 font-bold text-lg mt-5 '>WELCOME TO JOBS CANADA FAIR</h1>
                <h3 className='text-black text-xl mt-2 font-semibold'>CANADA'S MOST ESTABLISHED CAREER FAIRS SINCE 2010</h3>
                <p className=' text-slate-700 mt-2 font-semibold'>
                    Welcome to Canda's leading destination for thousands of attendees and hundred's of exhibitors since 2010. With a proven record of numerous successful stories, Job Canada Fair brings together various industries, sectors, and visitors across the country. We aim to inspire people, provide professional support, facilitate valuable connections, and create opportunities that lead to fulfilling careers and organizational growth. With more than 75 Career Fairs held each year, Jobs Canada Fair supports the Canadian employment market since 2010.
                </p>
            </div>
            {/* Slider of cards */}
            <h1 className='text-red-700 font-bold text-lg mt-10 px-12'>UPCOMING CAREER FAIRS : </h1>
            <div className="bg-white mt-8 ">

                <div className="h-96 px-12 overflow-hidden">
                    <Slider {...cardSliderSettings}>
                        {upcomingfair.map((fair, index) => (
                            <div key={index} style={{ margin: '10px', position: 'relative' }}>
                                <Card sx={{ width: '300px', height: '350px' }}>
                                    <img
                                        src={fair.images}
                                        alt={fair.title}
                                        className="h-full w-full"
                                        style={{ objectFit: 'cover', height: '60%' }}
                                    />
                                    <CardContent>
                                        <h2>{fair.title}</h2>
                                        <p>{fair.des}</p>
                                    </CardContent>

                                    <div className='flex justify-between items-end px-6 py-1 '>
                                        <div className="text-lg text-red-700 hover:text-black" onClick={() => handleLikeClick(index)}>
                                            <FontAwesomeIcon icon={faHeart} />{likeCounts[index]}
                                        </div>
                                        <div className="text-black text-sm font-semibold hover:text-blue-900">Read More </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>


            {/* slider youtube videos */}


            <div className="h-96 overflow-hidden flex  mt-10 px-8">
                {upcomingfair2.map((fair, index) => (
                    <div key={index} style={{ position: 'relative' }}>
                        <Card sx={{ width: '350px', height: '300px' }} style={{ margin: '15px' }} >
                            <div style={{ height: '60%' }}>
                                <YouTube videoId={getVideoId(fair.video)} opts={opts} />
                            </div>
                            <CardContent>
                                <h2 className='text-red-700'>{fair.title}</h2>
                                <p className='text-slate-700'>{fair.des}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>


            <div className="bg-white mt-8">
                <h1 className='px-12 text-slate-500 font-bold text-lg mt-5 '>MULTI-SECTOR RECRUITMENT EVENTS OPEN TO EVERYONE</h1>
                <h3 className='px-12 text-black text-lg mt-2 font-bold'>FOSTERING AN ENVIRONMENT OF HOPE. DIVERSITY AND INCLUSIONS.</h3>
                <div>
                    <div className='flex flex-wrap justify-center '>
                        <div className=' shadow-lg p-7 
          w-64 h-72 m-4 bg-red-800 rounded-xl'>
                            <div className=" mb-4">
                                <FontAwesomeIcon icon={faYoutubeSquare} size='5x' className='text-white p-4' />
                            </div>
                            <h2 className='text-lg font-bold text-white'>LATEST UPDATES</h2>
                            <p className='font-semibold text-white'>Check the latest Exibitions updates and get to know them.</p>
                        </div>

                        <div className='shadow-lg p-7  
          w-64 h-72 m-4 rounded-xl'>
                            <div className=" mb-4">
                                <FontAwesomeIcon icon={faSearch} size='2x' className='text-red-800 ' />
                            </div>
                            <h2 className='text-lg font-bold text-red-800  p-2'>IMMEDIATE HIRING ... </h2>
                            <p className='font-semibold text-slate-500'>Stand out in the job market. Apply online. Meet Recruiters.</p>
                        </div>
                        <div className='shadow-lg rounded-lg
           w-5/12 h-72 m-4 '>
                            <Slider {...settings}>
                                {images.map((image, index) => (
                                    <div key={index} className='h-72 rounded-lg'>
                                        <img src={image} alt={`Job Fair ${index + 1}`} className='w-full h-full object-cover' />
                                    </div>
                                ))}
                            </Slider>

                        </div>



                    </div>
                </div>
            </div>
            <h1 className='text-slate-500 font-bold text-lg mt-10 px-12'>THANK YOU FOR TRUSTING US FOR THE PAST 14 YEARS : </h1>
            <div className=' p-7  h-30 m-4 relative px-12'>

                <Slider {...cardSettings}
                    className='px-7'
                >
                    {companyImages.map((image, index) => (
                        <div key={index} style={{ width: '80px', height: '40px' }}>

                            <img
                                src={image}
                                alt={`Company ${index + 1}`}
                                className='w-full h-full object-cover'
                                style={{ width: '100px', height: '40px', padding: '5px' }}
                            />

                        </div>
                    ))}
                </Slider>
                {/* <FontAwesomeIcon icon={faArrowRight} /> */}
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default JobFairs;
