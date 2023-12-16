import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import man from '../images/about-man.png'


function About() {
  return (
    <div>
      <Navbar />
      <div style={{ height: '150px' }}></div>
      <div className='flex' style={{ height: '700px' }}>
        <img src={man} className='p-2' />
        <div style={{ marginTop: '5px', marginRight: '35px', padding: '20px', marginLeft: '50px' }}>

          <p className='text-lg font-bold text-blue-900'>ABOUT</p>
          <p className='font-bold text-2xl mt-2'>Proudly Canadians Vision & Mission</p>
          <p className='text-slate-700 text-lg ont-semibold mt-2'>At Proudly Canadians, our mission is to help people get jobs. We have a team of dedicated professionals passionately pursuing this purpose and improving the recruitment journey through real stories and data. We foster a collaborative workplace that strives to create the best experience for job seekers.</p>

          <p className='text-slate-700 text-lg  mt-2'>We help people to find work and plan their career in Canada, and we make it easier for employers to recruit and hire across the country.
          </p>

          <p className='text-slate-700 text-xl font-semibold mt-4'>The right fit for your jobs</p>
          <p className='text-slate-700 text-lg mt-2'>1 lacs people visit Proudly Canadians every month, giving you access to the most talent in every field.*
          </p>

          <p className='text-slate-700 text-xl font-semibold mt-4'>On desktop and mobile</p>
          <p className='text-slate-700 text-lg mt-2'>75% of job searches are from mobile devices. Use Proudly Canadians to provide the best job search experience anywhere.
          </p>

          


          <p className='text-slate-700 text-lg mt-2'>More quality hires
          Proudly Canadians is the #1 external source of hire.*</p>

          <p className='text-red-700 text-sm font-semibold mt-2'>100% Job Success Rate</p>
          <p className='text-red-700 text-sm font-semibold mt-2'>100% Client Service Satisfaction</p>
          <p className='text-red-700 text-sm font-semibold mt-2'>100% Transparency</p>
        </div>

      </div>
      <div className='bg-slate-900 text-center ' style={{ height: '300px' }}>
        <p className='text-white font-bold  text-2xl p-4 '>Supporting original And Indigenous People </p>
        <p className='text-white font-thin text-lg mt-2'> Proudly Canadians is a online interface jobsite aimed at increasing the employment rate of Canada’s aboriginal and indigenous people community. It is designed to “inclusive” e-recruitment.
          Many aboriginal and indigenous workers are able and very interested to work.</p>
        <button className='font-semibold text-sm p-4  my-20  mx-2 bg-blue-950  rounded-md border border-white text-white'>BUSINESS BENEFITS OF HIRING DISABLED PEOPLE</button>

        <button className='font-semibold text-sm p-4 my-20  mx-2 bg-blue-950  rounded-md border border-white text-white'>THE IMPORTANCE OF A GREAT COVER LETTER PEOPLE</button>

        <button className='font-semibold text-sm p-4 my-20 mx-2 bg-blue-950  rounded-md border border-white text-white'>DISABLED WORKERS HAVE MUCH TO OFFER</button>




      </div>
      <div style={{ height: '500px', width: '100%' }}className='flex'>
        <div className='font-bold p-20 w-2/4'>
          <h2 className='font-bold text-xl text-gray-800 mt-7 '>FOR JOB SEEKERS</h2>
          <p className='font-semibold text-gray-700 mt-7'>Now's a great time to look for a new job. Candidates have the upper hand as the country's labour shortage continues. Wages are rising, benefits are getting beefier and the options are getting more interesting.</p>
          <p className='font-semibold text-gray-700 mt-2'>

            Whether you're looking for a career stepping-stone or your dream job, chances are you're scouring online job boards. This is the best websites for job searches in Canada.
          </p>
          <button className='font-semibold p-4 mt-28 bg-blue-950  rounded-md text-white'>BROWSE OUR JOB LISTINGS</button>
        </div>
        <div className='p-20 w-2/4 '>
          <h2 className='font-bold text-xl text-gray-800 mt-7 '>FOR Employer</h2>
          <p className='font-semibold text-gray-700 mt-7'>Proudly Canadians is a frontrunner when it comes to the top job search websites in Canada. It hosts many job opportunities in the English language. Handy features include the ability to search by salary and find roles in nearby cities. And it's all mobile-optimized, allowing you to search and apply for jobs on the go. Proudly</p>
          <p className='font-semibold text-gray-700 mt-2'>

          Canadians is highly recommended for aboriginal and indigenous candidates this is a user-friendly site and great opportunities for career advancement.
          </p>
          <button className='font-semibold p-4 mt-20 bg-blue-950  rounded-md text-white'>ADVERTISE YOUR JOB NOW</button>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default About
