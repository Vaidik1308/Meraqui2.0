import React,{useState} from 'react'
import {BsFillQuestionCircleFill} from 'react-icons/bs';





const MEngine = () => {

    const [slide1,setSlide1] = useState(true);
    const [slide2,setSlide2] = useState(false);
    const [slide3,setSlide3] = useState(false);
    const [slide4,setSlide4] = useState(false);
    const [originalIndex,setOriginalIndex] = useState(0)
   



    
    const AddClass1 = (e) => {
        // e.target.classList.add("slide")
        setSlide2(false)
        setSlide1(true)
        setSlide3(false)
        setSlide4(false)
        setOriginalIndex(e.target.value)
    }
    const AddClass2 = (e) => {
        // e.target.classList.add("slide")
        setSlide2(true)
        setSlide1(false)
        setSlide3(false)
        setSlide4(false)
        setOriginalIndex(e.target.value)
    }
    const AddClass3 = (e) => {
        // e.target.classList.add("slide")
        setSlide2(false)
        setSlide1(false)
        setSlide3(true)
        setSlide4(false)
        setOriginalIndex(e.target.value)
    }
    const AddClass4 = (e) => {
        // e.target.classList.add("slide")
        setSlide2(false)
        setSlide1(false)
        setSlide3(false)
        setSlide4(true)
        setOriginalIndex(e.target.value)
    }
   
    

   
    const content = [
        {
            header1:"Recruitment",
            header2:"at Scale",
            body:"Sheldon allows employers to hire workers in large volumes in a number of industries across India.",
            para1:"Reducing sourcing costs & turnaround times by up to 30%",
            para2:"Reducing sourcing costs & turnaround times by up to 30%",
            img:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            url:"../image/whyChooseUs/CHAT.mp4",
        },
        {
            header1:"AUTOMATED",
            header2:"CONTACTLESS ONBOARDING",
            body:"The M-Engine enables KYC data collection, UAN no. creation, ESIC registration, Appointment letter generations & self onboarding of candidates in large volumes across the country.",
            para1:" Reducing backend team cost & turnaround times by up to 45%",
            para2:"Assembles all data in a single dashboard to get organizational analytics",
            img:"https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            url:"../image/whyChooseUs/ONBOARDING.mp4",
        },
        {
            header1:"AUTOMATED",
            header2:"PAYROLL",
            body:"The M-Engine gathers attendance data, fills it as per policy rules and creates payroll sheet as per organizational needs",
            para1:"Reducing processing time by more than 50%",
            para2:" Uploads data onto HRMS for advanced insights into the organization",
            img:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            url:"../image/whyChooseUs/PAYROLL.mp4",
        },
        {
            header1:"DIGITAL",
            header2:"COMPLIANCE MANAGEMENT",
            body:"The M-Engine assembles all compliance data and assists with timely filling of all statutory compliances with minimal human intervention.",
            para1:"Minimizes time needed to generate UAN, ESIC Number and all other essential compliances by 70%",
            para2:"Reduce dependence on external vendors for compliance and also helps audit outsourced vendors compliances",
            img:"https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            url:"../image/whyChooseUs/COMPLIANCE.mp4",
        },
    ]
    
    console.log(content[originalIndex].url);
    
  return (
    <main className='w-full h-fill mb-4 sm:w-[85%] sm:mx-auto sm:mt-8'>
        <section className='mt-4 pt-4 sm:mt-20 w-[95%] mx-auto flex sm:flex-row sm:justify-between flex-col'>
            <div className=' w-full sm:w-[40%] flex flex-col sm:h-[55vh] sm:justify-center'>
                <div className='w-full '>
                    <h2 className=' text-left text-3xl sm:text-5xl font-quicksand font-[400] w-full sm:text-left sm:ml-2'>
                        KARAM-AI
                    </h2>
                </div>
                <div className=' mt-2 text-left sm:mt-12'>
                    <p className='text-black font-poppins font-[300] sm:text-[1.2rem]  sm:leading-[1.8]'>
                        Sheldon is an Al-based companion who uses chat bot functionality to interact with candidates and employers.He doesn’t generate just leads or qualified leads. He runs his proprietary match logic to zero in on the most suitable candidates. His Background verification engine ensures that only verified candidates get on-boarded.
                    </p>
                </div>
            </div>
            <div className='sm:w-[60%] my-4 rounded sm:h-[85vh] sm:relative sm:right-[-20%]'>
                <img className='rounded w-[100%] mx-auto sm:h-[65vh]' src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
        </section>
        <section className='flex flex-col w-full mt-8 sm:mt-0 font-poppins font-[300]'>
            <div className='w-full ml-4 '>
                <h1 className='text-4xl  w-full text-left sm:w-[100%] sm:text-center sm:text-4xl'>About Karam-AI</h1>
            </div>
            <div className='w-full  mt-4 sm:mt-12'>
                <p className='  text-left w-[95%] mx-auto sm:text-[1.2rem]'>
                    With user-friendly On-boarding engine, Sheldon helps them with seamless self- onboarding. Sheldon’s role doesn’t end with hiring a candidate. He works tirelessly to record their daily attendance with a single motto: Candidates’ salary must get credited on time along with compliance. Every month. Flawlessly. <br />
                    Sheldon comes handy in their times of dire need of money. He extends them salary advance, loans apart from their rightful cover under statutory dues and/or other insurance packages. <br />
                    Sheldon tracks a candidate’s life cycle from hire to retire and becomes organisations go-to person to solve daily HR needs.
                </p>
            </div>
        </section>
        <section className='flex flex-col w-full mt-14 font-poppins font-[300] sm:w-[95%] sm:mx-auto'>
            <div className='w-full'>
                <h2 className='text-[1.8rem] sm:text-4xl px-1'>Why you'll love Karam-AI</h2>
            </div>
            <div className='sm:flex sm:flex-row duration-500'>
            <div className='sm:hidden h-[2vh] flex flex-row my-12 w-[90%] mx-auto'>
                    <button  value='0' style={slide1 ? {height: "6px", marginBottom: "5px"} : null }  onClick={(e) => AddClass1(e)}   id='btn1' className='sm:hidden outline-none  duration-300 before:content-["1"] before:font-semibold before:text-[0.8rem] before:relative before:w-[100%] before:text-left before:-top-[20px] w-[25%] flex flex-row justify-center bg-cyan-400 h-[1.5px] '></button>
                    <button style={slide2 ? {height: "6px", marginBottom: "5px"} : null } value='1' onClick={(e) => AddClass2(e)}  id='btn2' className='sm:hidden outline-none  duration-300 before:content-["2"] before:font-semibold before:text-[0.8rem] before:relative before:w-[100%] before:text-left before:-top-[20px] w-[25%] flex flex-row justify-center bg-cyan-400 h-[1.5px] '></button>
                    <button style={slide3 ? {height: "6px", marginBottom: "5px"} : null }  onClick={(e) => AddClass3(e)} value='2' id='btn3'  className='sm:hidden outline-none  duration-300 before:content-["3"] before:font-semibold before:text-[0.8rem] before:relative before:w-[100%] before:text-left before:-top-[20px] w-[25%] flex flex-row justify-center bg-cyan-400 h-[1.5px] '></button>
                    <button style={slide4 ? {height: "6px", marginBottom: "5px"} : null }  onClick={(e) => AddClass4(e)} value='3' id='btn4'  className='sm:hidden outline-none  duration-300 before:content-["4"] before:font-semibold before:text-[0.8rem] before:relative before:w-[100%] before:text-left before:-top-[20px] w-[25%] flex flex-row justify-center bg-cyan-400 h-[1.5px] '></button>   
                </div>
                <div className='w-full sm:w-[100%] sm:mt-16 flex flex-col sm:h-[65vh] mt-4 sm:justify-between'>
                    <div className='w-full text-left text-2xl ml-4  sm:mb-8 sm:text-4xl'>
                        <h3 className=''>{content[originalIndex].header1} <span className='text-cyan-300 duration-500'>{content[originalIndex].header2}</span></h3>
                    </div>
                    <div className='w-full mt-2 sm:mb-8'>
                        <p className='ml-4  text-left'>
                            {content[originalIndex].body}
                        </p>
                    </div>
                    <div className='w-full flex flex-row justify-evenly mt-2 sm:mb-8 sm:text-[1.1rem]'>
                        <span className=' ml-4 w-[10%] text-2xl mt-1'><BsFillQuestionCircleFill className='text-cyan-400 sm:text-[2rem] sm:relative sm:bottom-[15%]' /></span>
                        <p className='w-[90%] text-left'>{content[originalIndex].para1}</p>
                    </div>
                    <div className='w-full flex flex-row justify-evenly sm:text-[1.1rem]'>
                        <span className=' ml-4 w-[10%] text-2xl sm:text-3xl mt-1'><BsFillQuestionCircleFill className='text-cyan-400 sm:text-[2rem] sm:relative sm:bottom-[15%]' /></span>
                        <p className='w-[90%] text-left'>{content[originalIndex].para2}</p>
                    </div>
                    <div className='hidden sm:w-[92%] my-auto sm:mx-auto sm:h-[6vh]  sm:flex sm:flex-row sm:justify-center duration-500'>
                        
                        <button  value='0' style={slide1 ? {height: "6px", marginBottom: "5px"} : null }  onClick={(e) => AddClass1(e)}   id='btn1' className=' outline-none  duration-300 sm:before:content-["1"] sm:before:font-semibold sm:before:text-[0.8rem] sm:before:relative sm:before:w-[100%] sm:before:text-left sm:before:-top-[20px] sm:w-[25%] sm:flex sm:flex-row sm:bg-cyan-400 sm:h-[1.5px] '></button>
                        <button style={slide2 ? {height: "6px", marginBottom: "5px"} : null } value='1' onClick={(e) => AddClass2(e)}  id='btn2' className='outline-none duration-300 sm:before:content-["2"] sm:before:font-semibold sm:before:text-[0.8rem] sm:before:relative sm:before:w-[100%] sm:before:text-left sm:before:-top-[20px] sm:w-[25%] sm:flex sm:flex-row sm:bg-cyan-400 sm:h-[1.5px] '></button>
                        <button style={slide3 ? {height: "6px", marginBottom: "5px"} : null }  onClick={(e) => AddClass3(e)} value='2' id='btn3' className=' outline-none duration-300 sm:before:content-["3"] sm:before:font-semibold sm:before:text-[0.8rem] sm:before:relative sm:before:w-[100%] sm:before:text-left sm:before:-top-[20px] sm:w-[25%] sm:flex sm:flex-row sm:bg-cyan-400 sm:h-[1.5px] '></button>
                        <button style={slide4 ? {height: "6px", marginBottom: "5px"} : null }  onClick={(e) => AddClass4(e)} value='3' id='btn4' className=' outline-none duration-300 sm:before:content-["4"] sm:before:font-semibold sm:before:text-[0.8rem] sm:before:relative sm:before:w-[100%] sm:before:text-left sm:before:-top-[20px] sm:w-[25%] sm:flex sm:flex-row sm:bg-cyan-400 sm:h-[1.5px] '></button>   
                    </div>
                </div>
                <div className=' rounded-sm sm:w-[100%] w-[80%]   h-[60vh] mx-auto sm:relative sm:right-[-10%] sm:mt-8 '>
                    {slide1 && <video 
                        autoPlay 
                        muted 
                        className='rounded-sm w-[100%] h-[60vh] transition'  
                        controls
                        src={require("../image/whyChooseUs/CHAT.mp4")}
                    />}
                    {slide2 && <video 
                        autoPlay 
                        muted 
                        className='rounded-sm w-[100%] h-[60vh] transition'  
                        controls
                        src={require("../image/whyChooseUs/ONBOARDING.mp4")}
                    />}
                    {slide3 && <video 
                        autoPlay 
                        muted 
                        className='rounded-sm w-[100%] h-[60vh] transition'  
                        controls
                        src={require("../image/whyChooseUs/PAYROLL.mp4")}
                    />}
                    {slide4 && <video 
                        autoPlay 
                        muted 
                        className='w-[100%] h-[60vh] transition rounded-sm'  
                        controls
                        src={require("../image/whyChooseUs/COMPLIANCE.mp4")}
                    />}
                </div>
                
            </div>
        </section>
        
    </main>
  )
}

export default MEngine