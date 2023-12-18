
import {React, useEffect} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import coverLetter from '../../images/coverLetter.png';

function CoverLetter() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
        <div>
            <Navbar />
            <div style={{ height: '100px' }}></div>
            <div className='flex ml-40'>
                <div className='w-1/2 p-4 mt-20'>
                    <img src={coverLetter} alt="manOnChair" className="w-full" />
                </div>
                <div className='w-1/2 ml-10 mr-40 mt-20'>
                    <p className='mt-10'>
                    While reviewing your resume, the first thing that a potential employer will look at is a cover letter. A strong cover letter will draw attention to all your resume's best features and include details that might not have fit in the body of the document itself. You should always include a cover letter with your application because doing so will give it a personal touch. The main objective of a strong cover letter is to establish your individuality. A resume typically contains boring information that does little to set it apart from the other applications that were filed for the same position. The opportunity to showcase your unique talent is present in the cover letter. To make your cover letter stand out, use these suggestions.
                    </p>
                </div>
            </div>
            <div className=' ml-40 mr-40 mt-10' >
                <h1 className='font-bold text-2xl'>Call the hiring manager by name</h1>
                <p>Your cover letter should be sent to the name of the person who will be reading your application, not just "To Whom It May Concern," as is customary. You can show that you've done more research on the company when you mention who will be receiving your cover letter. This demonstrates to recruiters that you have the leadership and improvisational skills they're looking for. The personalised touch would also be appreciated by them. In your cover letter, mention any additional connections you might have with the company. Mention this if you heard about the opportunity from someone who is currently working for the company, as word-of-mouth is a very powerful decision-making instrument.</p>
            </div>
            <div className=' ml-40 mr-40 mt-10' >
                <h1 className='font-bold text-2xl'>Create a cover letter, specific for the Job you're applying for</h1>
                <p>Job candidates typically submit one resume and one cover letter. They then send this one version to all open positions in the hopes that something would stick. Although this tactic can save you time, it will cost you the job because recruiters are used to looking over resumes and can tell when one has been copied and pasted. Make sure the person who will be reading your cover letter appears to have written it specifically for them. First, go over the job description. As soon as you know what they are looking for, you can tailor your cover letter to highlight your qualifications for the job. Give an example of a large team you have managed.</p>
            </div>
            <div className=' ml-40 mr-40 mt-10' >
                <h1 className='font-bold text-2xl'>Utilise the job description's keywords</h1>
                <p>various than SEO ranking, keywords have various uses. Job recruiters increasingly use these searches to sift through the numerous applications they receive. Only resumes and cover letters that closely match the requirements listed in the job description will move on to the next round of screening. Without the proper keywords, they won't even be read. Selecting the right keywords is easy. Simply review the required credentials and ensure that your cover letter includes the relevant qualifications, such as your degree of experience, software knowledge, and industry experience. The effective usage of keywords will be advantageous to both the recruit and the candidate.</p>
            </div>
            <div className=' ml-40 mr-40 mt-10 mb-20' >
                <h1 className='font-bold text-2xl'>Include details that are not in your resume!</h1>
                <p>A resume synopsis is not what a cover letter is. It is an opportunity to share facts that would frequently not fit in the format of a resume. You want it to include important details like: - Why you're applying for the job; - Your qualifications and experiences; - An explanation of any evident gaps in your CV. Interest letters are very important. A cover letter will assist your resume stand out from the competitors, even though they are easy to miss. Use the tips from above to write it. You'll need this if you want to succeed in the fiercely competitive job market.</p>
            </div>
            <Footer />
        </div>
    );
}

export default CoverLetter;