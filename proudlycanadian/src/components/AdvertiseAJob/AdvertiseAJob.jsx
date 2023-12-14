import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Card, Box, Button, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward, faLineChart, faGlobe, faBarChart, faBullseye, faCalculator, faLaptop, faUniversalAccess, faHandshake, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { cardInfo } from '../../Data/Data';
import { useNavigate } from 'react-router-dom';
import './AdvertiseAjob.css';


function AdvertiseAJob() {
  const cardsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedCardInfo, setSortedCardInfo] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    // Sort cards by price in descending order
    const sortedCards = [...cardInfo].sort((a, b) => {
      const priceA = parseFloat(a.rate.replace('$', ''));
      const priceB = parseFloat(b.rate.replace('$', ''));
      return priceB - priceA; // Sort in descending order
    });
    setSortedCardInfo(sortedCards);
  }, []);

  const totalCards = sortedCardInfo.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const startIdx = (currentPage - 1) * cardsPerPage;
  const endIdx = Math.min(currentPage * cardsPerPage, totalCards);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage < totalPages) {
        return prevPage + 1;
      }
      return prevPage;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage > 1) {
        return prevPage - 1;
      }
      return prevPage;
    });
  };

  const handleBuyNow = (card) => {
    setSelectedCard(card);
    console.log(card);
    
    // Navigate to the specified path
    navigate('/employers/auth/login');
  };

  return (
    <div>
      <Navbar />
      <div style={{ height: '150px' }} className='bg-white'></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', gap: '20px', position: 'relative' }}>
          {sortedCardInfo.slice(startIdx, endIdx).map((card, index) => (
            <Card
              key={index}
              className="hover-card"
              style={{
                flex: 1,
                maxWidth: '280px',
                height: '450px',
                margin: '10px',
                borderRadius: '15px',
                boxShadow: '0px 4px 8px rgba(0, 0, 255, 0.7)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {/* {index === 0 && (
                <div className="recommended-banner">
                  Best Offer
                </div>
              )} */}
              <Box p={2} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'space-between' }}>
                <div className='rounded-full bg-blue-200 font-semibold text-blue-950 shadow-lg shadow-blue-200 mt-5 '
                  style={{
                    padding: '25px',
                    fontSize: '25px',
                  }}
                >
                  {card.rate}
                </div>
                <Typography variant="h7" className='text-center font-bold text-blue-950'>
                  {card.priceHeading}
                </Typography>
                <Typography variant="body2" color="text.secondary" className='text-center font-bold'>
                  {card.des}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleBuyNow(card)}>
                  Buy Now
                </Button>
              </Box>
            </Card>
          ))}
          {currentPage > 1 && (
            <FontAwesomeIcon icon={faBackward} style={{ fontSize: '24px', color: 'grey', cursor: 'pointer', position: 'absolute', left: '-40px', top: '50%' }} onClick={handlePrevPage} />
          )}
          {currentPage < totalPages && (
            <FontAwesomeIcon icon={faForward} style={{ fontSize: '24px', color: 'grey', cursor: 'pointer', position: 'absolute', right: '-40px', top: '50%' }} onClick={handleNextPage} />
          )}
        </div>
        
      </div>
      <div className='p-4 shadow-slate-400 '>
        <p className=' text-2xl text-slate-800 font-bold text-center mt-20'> Why A National Job Site for Aboriginal And Indigenous People - www.proudlycanadians.ca?</p>
        <p className=' text-xl text-slate-800 font-bold text-center mt-5'> Largest community of job seekers. Fast, easy, cost-effective. Customer-first att</p>
        <div className='flex flex-wrap justify-center mt-10'>
          <div className='shadow-lg p-7 shadow-gray-700 w-3/12 h-82 m-4 border-b-4 border-green-900'>
            <div className="  flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faUniversalAccess} size='2x' className='text-white rounded-full bg-green-900 p-4' />
            </div>
            <h2 className='text-lg font-bold text-slate-900 text-center p-2'>Massive reach</h2>
            <p className='font-semibold text-slate-600'>Reach the largest community of job seekers in the Middle East, from across all industries and career levels. Growing at over 12,000 a day.</p>
          </div>

          <div className='shadow-lg p-7 shadow-gray-700 w-3/12 h-82 m-4 border-b-4 border-green-800'>
            <div className=" flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faHandshake} size='2x' className='text-white rounded-full bg-green-900 p-4' />
            </div>
            <h2 className='text-lg font-bold text-slate-900 text-center p-2'>Easy & Fast</h2>
            <p className='font-semibold text-slate-600'>Hiring couldn't be easier. Our super-charged tools will help you find, shortlist and contact your perfect hire in no time</p>
          </div>
          <div className='shadow-lg p-7 shadow-gray-700 w-3/12 h-82 m-4 border-b-4 border-green-800'>
            <div className=" flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faSnowflake} size='2x' className='text-white rounded-full bg-green-900 p-4' />
            </div>
            <h2 className='text-lg font-bold text-slate-900 text-center p-2'>Cost-Effective hiring</h2>
            <p className='font-semibold text-slate-600'>Hire the best talent while maximizing your ROI. Choose from several solutions that works with your time and budget.</p>
          </div>

         
          
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default AdvertiseAJob;
