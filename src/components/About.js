import React,{useState} from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {MdOutlineMailOutline} from 'react-icons/md';
import {FiPhoneCall} from 'react-icons/fi';

const About = () => {

  const clientsInfo = [
      {url:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ClientName:"Lalit Singh",
      industries:"Co-Founder",
      body:"Ex-i2 Technologies, Kaptialtech, Samsung Electronics, Hindustan Unilever IT 15+ years exp",
    },
      {url:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ClientName:"Shalin Maheshwari",
      industries:"Co-Founder",
      body:"Serial entrepreneur, family business 15+ years exp",
    },
      {url:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ClientName:"Amit Duggal",
      industries:"Chief Operating Officer",
      body:"Innovsource, Avsar HR Services 17+ years exp",
    },
      {url:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ClientName:"Anis Kazi",
      industries:"CBO-Logistics & Ecommerce",
      body:"Ex- Manpower group, Adecco, GI Group 15+ years exp",
    },
    {url:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      ClientName:"Sandeep Shewale",
      industries:"CBO- Manufacturing",
      body:"Ex- Yuva Pairvartan, About 19+ years exp",
    },{url:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    ClientName:"Chiranjeev Jha",
    industries:"Business Head- Frontline Staffing",
    body:"Ex-Innovsource, Adecco India 16+ years exp",
  },{url:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  ClientName:"Sachin Chavan",
  industries:"National Head- Recruitment Services",
  body:"Ex-Adecco India, Huntsmen & Barons 16+ years exp",
}
  ];

  const [clientIndex,setClientIndex] = useState(0);
  const prevClient = () => {
    const isFirstSlide  = clientIndex === 0;
    const newIndex = isFirstSlide ? clientsInfo.length - 1 : clientIndex - 1;
    setClientIndex(newIndex)
  }
  const nextClient = () => {
    const isLastSlide = clientIndex === clientsInfo.length - 1;
    const newIndex = isLastSlide ? 0 : clientIndex + 1;
    setClientIndex(newIndex) 
  }



  return (
    <main className='w-full sm:mt-24 ' id='about'>
      <section className='w-[95%] sm:flex sm:flex-row  h-fill my-8 mx-auto h-fill sm:mb-16'>
        <div className='w-full sm:w-[55%] sm:h-[55vh] sm:flex sm:flex-col sm:ml-12 sm:justify-center'>
          <div className='w-full sm:mb-8'>
            <h1 className='text-4xl text-left sm:text-5xl font-quicksand font-[400]'>About MERAQUI</h1>
          </div>
          <div className='w-full mt-3'>
            <p className='text-left sm:w-[75%] font-poppins font-[300]'>
              We are a SaaS-enabled workforce management platform specializing in employee lifecycle management, job and requisition management, and training and interview assessments. We link our expertise with your business demands and proactively begin HR procedures to meet your needs, harnessing the power of Artificial Intelligence. We have a robust pan-India presence in 22 states and 55 cities and are aiming to grow significantly in the times to come.
            </p>
          </div>
        </div>
        <div className='mx-auto w-[95%] sm:w-[55%] sm:relative sm:right-[-5%]'>
          <img className='rounded sm:w-[100%]' src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
        </div>
      </section>
      <section className='w-full my-12 '>
        <div className='w-full mb-4 sm:mb-16'>
          <h2 className='text-3xl sm:text-5xl font-quicksand font-[400]'>Why MERAQUI?</h2>
        </div>
      
        <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}} className='bg-cover bg-center w-full sm:h-[55vh]'>
          <div className='  flex flex-col w-full bg-black bg-opacity-[0.7] text-white sm:h-[55vh] sm:justify-center font-poppins font-[300]'>
            <div className='w-[95%] sm:w-[89%] mx-auto my-4'>
              <h3 className='text-2xl sm:text-3xl text-left text-cyan-100 '>
              Our Philosophy
              </h3>
            </div>
            <div className='w-[95%] sm:w-[89%] mx-auto my-4'>
              <p className='text-left sm:w-[85%]'>
                We believe that "The greatest asset of a company is its people” <br />
                Meraqui will assist your employees to stay up-to-date with <br /> our upskilling solutions and also helps them comply with any tasks that technology and trends throw their way. Our sterling apprenticeship programs and work environment <br /> ensure employee retention. <br />
                Meraqui's mission is to assist and build an organization that people desire to be a part of.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='w-[95%] mx-auto my-12 font-poppins font-[300]'>
        <div className='w-full sm:mb-12'>
          <h2 className='text-3xl sm:text-4xl'>Journey</h2>
        </div>
        <div className='w-full sm:flex sm:flex-row sm:ml-16 sm:justify-center'>
          <div className='w-full mt-6 sm:w-[60%] sm:flex sm:flex-col sm:justify-between sm:h-[25vh] sm:my-auto'>
            <div className='w-full'>
              <h3 className='text-[1.4rem] sm:text-4xl text-left'>The Team</h3>
            </div>
            <div className='w-full mt-1 sm:mt-8 sm:w-[70%]'>
              <p className='text-left sm:w-full'>
                We align our understanding according to your business needs and proactively initiate the HR processes to suit your requirements leveraging the power of Artificial Intelligence. We have a robust pan India presence in over 22 states, 55 cities, and are aiming to grow significantly in the times to come.

              </p>
            </div>
          </div>
          <div className='mt-2 sm:w-[60%] sm:relative sm:right-[-5%]'>
            <img className='sm:w-[100%]' src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
        </div>
      </section>
        <div>
        <div className=' sm:w-[65%] sm:h-[40vh] mt-10  h-[35vh]  m-auto px-4 relative group shadow-md w-[95%] rounded'>
            <div  className='sm:h-[30vh] bg-[#E0FAFF] rounded-sm bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] duration-500'>
              <div className=' sm:w-[95%] sm:mx-auto p-2 pl-4 w-full flex flex-col justify-around h-[20vh] mt-8 '>
                <div className=' text-left text-[1.1rem] text-bold pt-4'>
                  <h3 className='sm:text-[1.5rem]'>{`${clientsInfo[clientIndex].ClientName},${clientsInfo[clientIndex].industries}`}</h3>
                </div>
                <div className='text-left text-[0.8rem] sm:text-[1rem] mt-4 sm:w-[75%]'>
                  <p>{clientsInfo[clientIndex].body}</p>
                </div>
              </div>
              
            
              
            </div>
            
            {/* left arrow */}
            <div className='  bg-opacity-[0.4] sm:hidden sm:group-hover:block absolute -bottom-[4%] -translate-x-0 translate-y-[-50%] left-[30%] text-2xl rounded-full p-2 bg-cyan-100 text-cyan-400 cursor-pointer'>
              <BsChevronCompactLeft onClick={() => prevClient()} size={30}/>
            </div>
            <div className=' bg-opacity-[0.4] sm:hidden sm:group-hover:block absolute -bottom-[4%] translate-x-0 translate-y-[-50%] right-[30%] text-2xl rounded-full p-2 bg-cyan-100 text-cyan-400 cursor-pointer'>
              <BsChevronCompactRight  onClick={() => nextClient()}  className='' size={30}t/>
            </div>
          </div>
        </div>
        <div className='flex flex-col my-8 font-normal sm:w-[65%] sm:mx-auto sm:flex-row'>
          <div className='flex flex-row justify-center w-full '>
            <MdOutlineMailOutline className='mr-2 text-right sm:text-4xl  text-2xl text-[#1ABDDC]'/>
            <a className='sm:text-xl font-poppins font-[300]' href="mailto:support.meraqui@gmail.com">contact@meraqui.com</a>
          </div>
          <div className='flex flex-row justify-center w-[71%] mt-2 sm:w-[93%] relative left-[7%]'>
            <FiPhoneCall className='text-2xl mr-2 text-[#1ABDDC] sm:text-4xl'/>
            <a className='sm:text-xl font-poppins font-[300]' href="#mobile">+91 95607 72719</a>
          </div>
        </div>
      {/* </section> */}
    </main>
  )
}

export default About