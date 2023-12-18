
import {React, useEffect} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import disabledWorker from '../../images/disabledWorker.png';

function DisabledWorker() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <div>
            <Navbar />
            <div style={{ height: '100px' }}></div>
            <div className='flex ml-40'>
                <div className='w-1/2 p-4 mt-20'>
                    <img src={disabledWorker} alt="manOnChair" className="w-full" />
                </div>
                <div className='w-1/2 ml-10 mr-40 mt-20'>
                    <p className='mt-10'>
                    Do you run a business and are unsure about whether or not to hire people with disabilities? If so, the obviously important information offered in this work will be significant to you. Most business owners regularly discriminate against or ignore people with disabilities when hiring new staff for their businesses. If you're going to hire new employees for your company soon, keep in mind that doing so will have several advantages if you choose people with impairments.
                    <br/> <br/> According to studies, the disabled population represents a skilled and underutilised labour force. You may rest guaranteed that if you consider hiring people with disabilities for your business, your consumers and the bottom line will benefit greatly. Here are some advantages that you will surely experience if you consider.
                    </p>
                </div>
            </div>
            <div className=' ml-40 mr-40 mt-10' >
            <h1 className='font-bold text-3xl mb-10'>The benefits of incorporating disabled individuals into your workforce</h1>
                <h1 className='font-bold text-2xl'>You should expand your customer base and revenue</h1>
                <p>Like in other market scenarios, people with disabilities and their family members and friends purchase goods and services from companies that best meet their needs. Employing disabled individuals will show you care for them and their needs, which will considerably increase your chances of growing your clientele and, ultimately, making more money. You can test out proposed marketing methods on people with disabilities by hiring people with disabilities.</p>
            </div>
            <div className=' ml-40 mr-40 mt-10' >
                <h1 className='font-bold text-2xl'>Enhancing corporate culture and overall workplace morale</h1>
                <p>Hiring highly motivated employees and promoting an inclusive culture are made possible by taking into account the needs of persons with disabilities. Employers frequently discriminate against those with impairments because they believe that they are unproductive. However, giving them the tools they need will motivate their coworkers and urge other business owners to care about individuals in need, including their clients.</p>
            </div>
            <div className=' ml-40 mr-40 mt-10' >
                <h1 className='font-bold text-2xl'>Your company's output will probably increase.</h1>
                <p>Once employed, people with disabilities are unquestionably loyal employees who bring a distinctive perspective, life experiences, and skills that can enhance your services or products. Be aware that a disabled person gaining employment will mean a better deal for him or her because individuals with disabilities often face more challenges when seeking employment. People with disabilities are also more likely to excel as team players since they are accustomed to cooperating with others, such as carers and medical professionals, to achieve a goal when working. You may count on them to perform admirably if you assign them tasks that call for collaboration and teamwork.</p>
            </div>
            <div className=' ml-40 mr-40 mt-10' >
                <h1 className='font-bold text-2xl'>Lowering employee churn</h1>
                <p>Low employee turnover can be achieved by taking into account employees with disabilities. People with impairments are more likely to work for your business longer. As a result, your typical hiring and training costs will go down significantly. According to research, disabled workers are less inclined to quit their jobs and look for new ones. You can also avoid the time-consuming procedure of looking for qualified individuals to work for your business by utilising them.</p>
            </div>
            <div className=' ml-40 mr-40 mt-10' >
                <h1 className='font-bold text-2xl'>High levels of efficiency and quality</h1>
                <p>Most employers of people with disabilities concur that these workers frequently deliver high-caliber work. People with disabilities are associated with motivation, engagement, dependability, colleague integration, high-quality work, and regular job attendance. They also work in a variety of industries. They are constantly loyal employees who do a wonderful job of boosting company spirit, so they will assist your business achieve good performance and quality.</p>
            </div>
            <div className=' ml-40 mr-40 mt-10 mb-20' >
                <h1 className='font-bold text-2xl'>To sum up</h1>
                <p>As you can see, having disabled people work for your company has a number of advantages. The next time your business is looking to acquire new staff, you won't likely regret it if you choose to work with them.</p>
            </div>
            <Footer />
        </div>
    );
}

export default DisabledWorker;