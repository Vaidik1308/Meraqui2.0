import React from 'react'

const Contact = () => {
  return (
    <main className='w-full h-fill my-8 sm:mt-24' id='contact'>
        <section className='w-full flex flex-col mb-10 sm:flex-row sm:justify-center sm:w-[95%] sm:mx-auto'>
            <div className='w-[100%] flex flex-col justify-evenly h-[45vh] sm:w-[35%]'>
                <div className='w-full sm:ml-2'>   
                    <h1 className='sm:text-5xl sm:text-left text-3xl font-quicksand font-[400]'>Let's Get in touch</h1>
                </div>
                <div className=' mt-2 w-full flex justify-center'>
                    <p className='text-[1rem] w-[95%] sm:leading-[2] sm:text-left font-poppins font-[300]'>
                        Workforce planning can help an organization better prepare for the future and forecast potential challenges. Connect with us to find the workforce that fits your business.
                    </p>
                </div>
                <div className='w-full sm:flex sm:justify-start sm:ml-2 sm:w-[80%]'>
                    <button className=' font-poppins font-[400] h-[5vh] bg-cyan-100 border-[1px] border-cyan-400 w-[40%] sm:text-[0.8rem] sm:font-bold'>Contact Us</button>
                </div>
            </div>
            <div className='w-full flex justify-center sm:w-[50%] sm:justify-end sm:relative sm:right-[-10%] '>
                <img className='w-[95%]' src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="" />
            </div>
        </section>
        <section className='bg-cyan-100 w-full h-fill pt-10 sm:flex sm:flex-row sm:h-[40vh]'>
            <div className=' w-full sm:w-[40%] flex justify-center '>
                <div className=' flex flex-row w-[90%]'>
                    <div className=' w-[45%] sm:w-[25%]'>
                        <img className='w-[100%]' src={require('../image/address.png')} alt="" />
                    </div>
                    <div className='ml-2 w-[60%] sm:ml-8'>
                        <div className='w-full'>
                            <h2 className=' text-xl   text-left sm:text-[1rem] font-poppins font-[500]'>ADDRESS:</h2>
                        </div>
                        <div className='w-full mt-2 flex'>
                            <p className='text-left font-poppins font-[300]'>
                                Meraqui Ventures Pvt. <br /> Ltd.,Pranik Chambers ,<br />B-125, 1st Floor, Saki Vihar <br /> Road, Sakinaka, Andheri <br />
                                (E), Mumbai – 400072, <br /> India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full sm:w-[40%] flex justify-center '>
                <div className=' flex flex-row w-[90%]'>
                    <div className=' w-[45%] sm:w-[25%]'>
                        <img className='w-[100%]' src={require('../image/address.png')} alt="" />
                    </div>
                    <div className='ml-2 w-[60%] sm:ml-8'>
                        <div className='w-full'>
                            <h2 className=' font-poppins font-[500] text-xl   text-left sm:text-[1rem]'>PHONE:</h2>
                        </div>
                        <div className='w-full mt-2 flex'>
                            <p className='text-left font-poppins font-[300]'>
                            +91-9560772719
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full sm:w-[40%] flex justify-center '>
                <div className=' flex flex-row w-[90%]'>
                    <div className=' w-[45%] sm:w-[25%]'>
                        <img className='w-[100%]' src={require('../image/address.png')} alt="" />
                    </div>
                    <div className='ml-2 w-[60%] sm:ml-8'>
                        <div className='w-full'>
                            <h2 className=' text-xl   text-left sm:text-[1rem] font-poppins font-[300]'>WORK HOURS:</h2>
                        </div>
                        <div className='w-full mt-2 flex'>
                            <p className='text-left font-poppins font-[300]'>
                                Monday - Saturday <br />
                                10.00 AM - 6:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>
        <section className='sm:flex sm:flex-row sm:mt-12 sm:w-full'>
            <div className='sm:relative sm:left-[-18%] h-fill sm:w-[60%] sm:h-[65vh]'>
                <div  className='sm:relative sm:left-[20%] sm:h-[65vh] sm:w-[90%] bg-getInTouch h-[40vh] bg-center bg-cover w-[100%]'>
                    <div className='w-full sm:flex sm:flex-col sm:justify-center sm:h-[65vh] h-[40vh] bg-black bg-opacity-[0.6] sm:bg-opacity-[0.5] text-white'>
                        <div className='w-full sm:flex sm:justify-end sm:pr-24 py-4'>
                            <h2 className=' text-2xl sm:text-3xl sm:text-right sm:w-[85%] font-poppins font-[300]'>Get in touch with us. Let's <br /> talk!</h2>
                        </div>
                        <div className='w-full  sm:flex sm:justify-end sm:pr-24 py-4'>
                            <p className='w-[95%] text-[0.9rem] text-left ml-2  sm:text-left sm:w-[50%] sm:leading-[1.8] font-poppins font-[300]'>
                                We align our understanding according to your business needs and proactively initiate the HR processes to suit your requirements leveraging the power of Artificial Intelligence. We have a robust pan India presence in over 22 states, 55 cities, and are aiming to grow significantly in the times to come.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' my-8 w-full sm:w-[35%]'>
                <div className='w-full sm:w-[75%] flex justify-center '>
                    <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' type="text" placeholder='Name' name="" id="" />
                </div>
                <div className='w-full flex justify-center mt-4 sm:w-[75%]'>
                    <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' type="text" placeholder='Designation' name="" id="" />
                </div>
                <div className='w-full flex justify-center mt-4 sm:w-[75%]'>
                    <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' type="text" placeholder='Organization' name="" id="" />
                </div>
                <div className='w-full flex justify-center mt-4 sm:w-[75%]'>
                    <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' type="email" placeholder='Official Email Id' name="" id="" />
                </div>
                <div className='w-full flex justify-center mt-4  sm:w-[75%]'>
                    <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' type="number" placeholder='Contact no.' name="" id="" />
                </div>
                <div className='w-full flex justify-center mt-4 sm:w-[75%]'>
                    <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' type="text" placeholder='Enquiry type' name="" id="" />
                </div>
                <div className='w-[93%] mt-4 flex justify-end sm:justify-start'>
                    <button className='w-[40%] h-[5vh] bg-cyan-200 font-poppins font-[500] rounded' type='submit' >Submit</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Contact