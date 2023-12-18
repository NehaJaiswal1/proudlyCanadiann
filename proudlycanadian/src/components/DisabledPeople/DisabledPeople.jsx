
import {React , useEffect}from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import manOnChair from '../../images/disabledPeople.png';

function DisabledPeople() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
        <div>
            <Navbar />
            <div style={{ height: '100px' }}></div>
            <div className='flex ml-40'>
                <div className='w-1/2 p-4 mt-20'>
                    <img src={manOnChair} alt="manOnChair" className="w-full" />
                </div>
                <div className='w-1/2 ml-10 mr-40 mt-20'>
                    <p className='mt-10'>
                        To succeed, small businesses must leverage the labour market to its full potential.
                        Unfortunately, it is a typical mistake that is costing recruiters more money than
                        they can ever imagine by ignoring people with impairments. 80 percent of disabled persons
                        still struggle to find employment. This indicates that there is still a talent gap in the
                        employment market. Businesses who take a chance and hire disabled persons later realise
                        that it was one of their greatest choices. Here are a few methods for doing it.
                    </p>
                </div>
            </div>
            <div className=' ml-40 mr-40 mt-10' >
                <h1 className='font-bold text-2xl'>TAX BENEFITS</h1>
                <p>Governments love to give tax benefits to businesses who hire disabled individuals on a regular basis. The simplest way to obtain such breaks is to hire a disabled person, but governments are also doing some cost-saving measures for businesses who have offices that are easily accessible with features like ramps and dedicated parking for the disabled. If these businesses hire employees with unique employment needs, they might even qualify for the work opportunity credits. Making accommodations for disabled workers can have advantages for the business, including lower insurance and training costs, more production, and improved morale. Additionally, if people with disabilities are employed, it implies that less tax money is needed because every dollar counts. In this manner, this project could have a substantial impact on Canadian society in terms of both social and economical consequences.</p>
            </div>
            <div className=' ml-40 mr-40 mt-10' >
                <h1 className='font-bold text-2xl'>LOW MAINTENANCE</h1>
                <p>Contrary to popular belief, people with disabilities hardly ever need accommodations at work. Only 20% of people, according to the Conference Board of Canada, require lodging, and in 65% of those instances, the entire cost was between $1 and $500.</p>
            </div>
            <div className=' ml-40 mr-40 mt-10' >
                <h1 className='font-bold text-2xl'>MOTIVATIONAL WORKERS</h1>
                <p>There is no question that persons with disabilities are highly driven. There is a wealth of data showing that workers with disabilities are more active at work than physically fit workers. According to a poll, people with disabilities made up 86% of the audience. However, 70% of the workforce was made up of able bodies. Additionally, disabled people are a gold mine of talent, and no one can match their level of focus. They also grumble less about their possessions and place more value on teamwork.</p>
            </div>
            <div className=' ml-40 mr-40 mt-10 mb-20'  >
                <h1 className='font-bold text-2xl'>RAISE YOUR COMPANY’S REPUTATION</h1>
                <p>Because a renowned workforce includes all types of workers, handicapped are also a part of it, it demonstrates that organisations care about the community, are against discrimination, and don't believe in selfishness. By hiring disabled employees, businesses can set the best example for other organisations, and this can help them gain name and fame in society.</p>
            </div>
            <Footer />
        </div>
    );
}

export default DisabledPeople;