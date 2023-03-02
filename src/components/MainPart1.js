import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube'







const MainPart1 = () => {
    const slides1 = [
        {
            url:require('../image/whyChooseUs/Requirements.jpg'),
            header:" 1000 workers required for your new plant? ",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"Requirements Received "
        },
        {
            url:require('../image/whyChooseUs/NanoInvestments.jpg'),
            // header:" 1000 workers required for your new plant? 2",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"Automation RE to Nodes "
        },
        {
            url:require('../image/whyChooseUs/Line.png.png'),
            // header:" 1000 workers required for your new plant? 3",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"Line up on WMP"
        },
        {
            url:require('../image/whyChooseUs/MEngine2.jpg'),
            // header:" 1000 workers required for your new plant? 4",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"M Engine run for shortlisting "
        },
        {
            url:require('../image/whyChooseUs/EHandholding.jpg'),
            // header:" 1000 workers required for your new plant? 5",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"e-Handholding "
        },
        {
            url:require('../image/whyChooseUs/Logic.jpeg'),
            // header:" 1000 workers required for your new plant? 6",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"Logistics at destination",
        },
    ]
    const slides2 = [
        {
            url:require('../image/whyChooseUs/OCR.png'),
            header:"500 Sales rep on our platform in 4 hours?",
            body:"Cutting edge technology | end-to-end Hire & Manage Tech Platform",
            sub_header:"OCR-enabled Paperless DIY Onboarding",
        },
        {
            url:require('../image/whyChooseUs/Geo.jpg'),
            header:" 1000 workers required for your new plant? 2",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"Geo Fenced / Facial Recognition based Attendance System",
        },
        {
            url:require('../image/whyChooseUs/Automated.png'),
            header:" 1000 workers required for your new plant? 3",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"Automated Payroll, Compliance & Invoicing",
        },
        {
            url:require('../image/whyChooseUs/SomeMarquee.jpg'),
            header:" 1000 workers required for your new plant? 4",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"Real-time Client Dashboard ",
        },
        {
            url:require('../image/whyChooseUs/Jobtraining.webp'),
            header:" 1000 workers required for your new plant? 5",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"On-The-Job Training ",
        },
        {
            url:require('../image/whyChooseUs/Unique.webp'),
            header:" 1000 workers required for your new plant? 6",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"Unique Referral Programs ",
        },
    ]
    const slides3 = [
        {
            url:require('../image/whyChooseUs/CuratedContent.jpg'),
            header:"30M+ Happy Man Hours managed till date",
            body:"With initiatives like funds in their account within 30 mins whenever needed, Meraqui is proud of 24% lesser attrition of our workforce",
            sub_header: "Curated Content for Growth"
        },
        {
            url:require('../image/whyChooseUs/Insurance coverage.jpg'),
            header:" 1000 workers required for your new plant? 2",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Insurance coverage "
        },
        {
            url:require('../image/whyChooseUs/Salary.jpg'),
            header:" 1000 workers required for your new plant? 3",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Salary Advances & Mini Loans "
        },
        {
            url:require('../image/whyChooseUs/NanoInvestments.jpg'),
            header:" 1000 workers required for your new plant? 4",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Credit Profiling "
        },
        {
            url:require('../image/whyChooseUs/NanoInvestments2.jpg'),
            header:" 1000 workers required for your new plant? 5",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Some Statistics"
        },
        {
            url:require('../image/whyChooseUs/SomeMarquee.jpg'),
            header:" 1000 workers required for your new plant? 6",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Some Marquee Clients"
        },
    ]
    const slides4 = [
        {
            url:require('../image/whyChooseUs/Frame 92.png'),
            header:" National player | Local flair",
            body:"With our end-to-end sourcing till deployment low code platform and transparent portal to clients and candidates, we are more than happy to customize our offerings to suit YOUR needs ",
            sub_header: "300+ Marquee Clients"
        },
        {
            url:require('../image/whyChooseUs/SomeMarquee.jpg'),
            header:" 1000 workers required for your new plant? 2",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "2M+ Man hours managed every month"
        },
        {
            // url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            url:require('../image/whyChooseUs/business.jpg'),
            header:" 1000 workers required for your new plant? 3",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "26 States across nation"
        },
        {
            // url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            url:require('../image/whyChooseUs/modern.jpg'),
            header:" 1000 workers required for your new plant? 4",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "150+ locations covered"
        },
        {
            // url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            url:require('../image/img/4.jpg.jpg'),
            header:" 1000 workers required for your new plant? 5",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "0.5M+ sq. ft. warehouse space being managed"
        },
        {
            // url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            url:require('../image/img/5.jpg.jpg'),
            header:" 1000 workers required for your new plant? 6",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Pan India presence "
        },
    ]
    
  return (
    <main className='flex flex-col w-full mx-2 font-bold sm:w-[85%] sm:mx-auto'>
         <section className='w-full mt-4 font-thin'>
            <h3 className='text-[1.5rem] sm:text-5xl sm:py-14 font-quicksand font-[400]'>Why choose Meraqui?</h3>
        </section>
        <section className='flex flex-row w-[95%] mx-auto  '>
            <div className=' w-[100%] h-[30vh] sm:h-auto my-auto  flex flex-col justify-center'>
                <div className='flex w-[100%]'>
                    <p className='w-[100%] sm:w-[65%] text-left sm:text-4xl font-quicksand font-[400]'>
                        {slides1[0].header}
                    </p>
                </div>
                <div className='w-full mt-4 sm:mt-8'>
                    <p className=' w-[85%] text-left sm:text-2xl  font-poppins font-[300] text-[0.6rem]'>
                        {slides1[0].body}
                    </p>
                </div>
            </div>
            <Swiper 
        className=' w-[100%] sm:w-[100%] sm:h-[70vh]'
       
        modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true,hide:false }}
        scrollbar={{ draggable: true ,hide:false}}
        loop={true}
        autoplay
        
      >
            
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides1[0].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[400] z-[99] sm:text-3xl'>{slides1[0].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides1[1].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[400] z-[99] sm:text-3xl'>{slides1[1].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides1[2].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[400] z-[99] sm:text-3xl'>{slides1[2].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides1[3].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[400] z-[99] sm:text-3xl'>{slides1[3].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides1[4].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[400] z-[99] sm:text-3xl'>{slides1[4].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides1[5].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[400] z-[99] sm:text-3xl'>{slides1[5].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </section>
        <section className='flex flex-row w-[95%] mx-auto  '>
            <div className=' w-[100%] h-[35vh] sm:h-auto py-auto flex flex-col justify-center'>
                <div className='flex w-[100%]'>
                    <p className='w-[100%] sm:w-[65%] text-left font-quicksand font-[400] sm:text-4xl '>
                        {slides2[0].header}
                    </p>
                </div>
                <div className='w-full mt-4 sm:mt-8'>
                    <p className=' w-[85%] text-left sm:text-2xl  font-poppins font-[300] text-[0.6rem]'>
                        {slides2[0].body}
                    </p>
                </div>
            </div>
            <Swiper 
        className=' w-[100%] sm:w-[100%] sm:h-[70vh]'
        // install Swiper modules
        modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true,hide:false }}
        scrollbar={{ draggable: true ,hide:false}}
        loop={true}
        autoplay
        
      >
            
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides2[0].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides2[0].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides2[1].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides2[1].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides2[2].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides2[2].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides2[3].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides2[3].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides2[4].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides2[4].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides2[5].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides2[5].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </section>
        <section className='flex flex-row w-[95%] mx-auto  '>
            <div className=' w-[100%] flex flex-col justify-center'>
                <div className='flex w-[100%]'>
                    <p className='w-[100%] sm:w-[65%] text-left  sm:text-4xl font-quicksand font-[400]'>
                        {slides3[0].header}
                    </p>
                </div>
                <div className='w-full mt-4 sm:mt-8'>
                    <p className=' w-[85%] text-left sm:text-2xl  font-poppins font-[300] text-[0.6rem]'>
                        {slides3[0].body}
                    </p>
                </div>
            </div>
            <Swiper 
        className=' w-[100%] sm:w-[100%] sm:h-[70vh]'
        // install Swiper modules
        modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true,hide:false }}
        scrollbar={{ draggable: true ,hide:false}}
        loop={true}
        autoplay
        
      >
            
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides3[0].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides3[0].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides3[1].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides3[1].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides3[2].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides3[2].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides3[3].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides3[3].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides3[4].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides3[4].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides3[5].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides3[5].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </section>
        <section className='flex flex-row w-[95%] mx-auto  '>
            <div className=' w-[100%] h-[35vh] sm:h-auto pb-4 sm:pb-0 flex flex-col justify-center'>
                <div className='flex w-[100%]'>
                    <p className='w-[100%] sm:w-[65%] text-left font-quicksand font-[400] sm:text-4xl '>
                        {slides4[0].header}
                    </p>
                </div>
                <div className='w-full mt-4 sm:mt-8'>
                    <p className=' w-[85%] text-left sm:text-2xl  font-poppins font-[300] text-[0.6rem]'>
                        {slides4[0].body}
                    </p>
                </div>
            </div>
            <Swiper 
        className=' w-[100%] sm:w-[100%] sm:h-[70vh]'
        // install Swiper modules
        modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true,hide:false }}
        scrollbar={{ draggable: true ,hide:false}}
        loop={true}
        autoplay
        
      >
            
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides4[0].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides4[0].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides4[1].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides4[1].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides4[2].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides4[2].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides4[3].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides4[3].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides4[4].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides4[4].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides4[5].url} alt="photo1" className='mt-2   w-[100%] flex  h-[20vh] sm:h-[55vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[300] z-[99] sm:text-3xl'>{slides4[5].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </section>
    </main>
  )
}

export default MainPart1