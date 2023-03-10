import React from 'react'

const TempStaffing = () => {
  return (
    <main className='sm:w-[100%] sm:mx-auto'>
        <section className='sm:mt-32 sm:flex sm:w-[90%] sm:mx-auto'>
          
              <div className="sm:justify-center mt-12 sm:mt-0 sm:mb-8 sm:w-[65%] sm:flex sm:flex-col">
                    <div className=' ml-2  flex flex-col sm:justify-between sm:h-[30vh] '>
                        <h1 className='font-quicksand font-[400] text-4xl text-left sm:text-5xl w-[75%] sm:w-[95%] sm:leading-[1.4] sm:mb-8'>
                            Temporary 
                            Staffing
                        </h1>
                        <p className='text-left sm:w-[98%] mt-4 sm:mt-0 font-poppins font-[300]'>
                        Temporary staffing in India has shown to be one of the greatest business options in the market over time. Here are a few benefits of employing temp staffing services.
                        Hire quickly - The Temporary Staffing procedure has eliminated the time-consuming and stressful formalities of interviewing and CV shortlisting. The emerging trend in such temporary services is direct hiring by signing a contract with a staffing agency.

Work flexibility - Candidates are free to work around their schedules. In such temporary jobs, there is no room for a demanding timetable.

                        </p>
                    </div>
              </div>
              <div className='sm:relative sm:right-[-15%] sm:w-[90%]'>
                  <img className='w-[100%] h-auto' src="https://images.unsplash.com/photo-1585713181935-d5f622cc2415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
              </div>
            
        </section>
        <section className='w-full my-12 sm:mt-20'>
        <div className='w-full mb-4 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl font-quicksand font-[400]'>About service</h2>
        </div>
      
        <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)"}} className='bg-cover bg-center w-full sm:h-[55vh]'>
          <div className='  flex flex-col w-full bg-black bg-opacity-[0.7] text-white sm:h-[55vh] sm:justify-center'>
            <div className='w-[95%] sm:w-[89%] mx-auto my-4'>
              <h3 className='text-2xl sm:text-3xl text-left text-cyan-100 font-poppins font-[300]'>
              Our Philosophy
              </h3>
            </div>
            <div className='w-[95%] sm:w-[89%] mx-auto my-4'>
              <p className='text-left sm:w-[85%] font-poppins font-[300]'>
            
              Meraqui offers one of the most advanced and professional hiring processes for temporary and regular employees, especially during critical moments, without interfering with your present initiatives. Skilled and experienced personnel are employed on a temporary/contractual basis to work at a client firm for a set period or a specific project. This will alleviate the strain of staff training and onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
  )
}

export default TempStaffing