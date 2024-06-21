import React from 'react'
import NavbarComponent from '../components/Navbar'
import Footer from '../components/Footer'

const joinUs = require("../assets/joinUsHome.jpg")
const servicesbg = require("../assets/servicesbg.png")
const welcomeHome = require("../assets/welcomeHome.jpg")



function Ourservices() {
  return (
    <div className='h-screen'>
        <NavbarComponent />
        <div className='w-full h-auto'>

        <section className='w-full h-[50vh] bg-cover bg-center' style={{backgroundImage: `url(${welcomeHome})`}}>
            <div className='h-full text-center content-center bg-[#fe6601] p-10 bg-opacity-70'>
              <h1 className='text-6xl text-white font-bold'>Our Services</h1>
            </div>
        </section>

        <div className='bg-white p-14'>
          <div class="max-w-screen-md mx-auto">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-[#fe6601]">Explore the different services we offer</h2>
            <p class="sm:text-xl">Here at Nepho we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
        </div>

        <div className='w-full absolute left-0 border-b-4 shadow-2xl border-[#fe6601]'></div>

        <section class="bg-white bg-contain mb-20" style={{backgroundImage: `url(${servicesbg})`}}>
          <div class="py-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

              <div>
                <div class="space-y-20 min-[780px]:grid min-[780px]:grid-cols-2 min-[780px]:gap-12 min-[780px]:space-y-8 mb-14">
                    <div className='relative max-[385px]:w-full min-[385px]:w-[40vh] mt-8 mx-auto'>
                        {/* <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </div> */}
                        <div class="flex w-full justify-center items-center rounded-full bg-primary-100 ">
                            <img className="border border-4 border-[#fe6601] rounded-2xl shadow-2xl" src={joinUs} />
                        </div>
                        <div className='border border-4 border-[#fe6601] rounded-2xl shadow-2xl p-2 absolute top-3/4 left-1/4 w-4/5 max-[385px]:left-0 max-[385px]:w-full bg-white'> 
                          <h3 class="mb-2 text-xl font-bold ">Marketing</h3>
                          <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        
                    </div>
                    <div className='relative max-[385px]:w-full min-[385px]:w-[40vh] mb-40 mx-auto'>
                        {/* <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </div> */}
                        <div class="flex justify-center items-center rounded-full bg-primary-100">
                            <img className="border border-4 border-[#fe6601] rounded-2xl shadow-2xl" src={joinUs} />
                        </div>
                        <div className='border border-4 border-[#fe6601] rounded-2xl shadow-2xl p-2 absolute top-3/4 left-1/4 w-4/5 max-[385px]:left-0 max-[385px]:w-full bg-white'> 
                          <h3 class="mb-2 text-xl font-bold">Marketing</h3>
                          <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        
                    </div>
                    <div className='relative max-[385px]:w-full min-[385px]:w-[40vh] mb-40 mx-auto'>
                        {/* <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </div> */}
                        <div class="flex justify-center items-center rounded-full bg-primary-100 dark:bg-primary-900">
                            <img className="border border-4 border-[#fe6601] rounded-2xl shadow-2xl" src={joinUs} />
                        </div>
                        <div className='border border-4 border-[#fe6601] rounded-2xl shadow-2xl p-2 absolute top-3/4 left-1/4 w-4/5 max-[385px]:left-0 max-[385px]:w-full bg-white'> 
                          <h3 class="mb-2 text-xl font-bold ">Marketing</h3>
                          <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        
                    </div>
                    <div className='relative max-[385px]:w-full min-[385px]:w-[40vh] mb-40 mx-auto'>
                        {/* <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </div> */}
                        <div class="flex justify-center items-center rounded-full bg-primary-100 ">
                            <img className="border border-4 border-[#fe6601] rounded-2xl shadow-2xl" src={joinUs} />
                        </div>
                        <div className='border border-4 border-[#fe6601] rounded-2xl shadow-2xl p-2 absolute top-3/4 left-1/4 w-4/5 max-[385px]:left-0 max-[385px]:w-full bg-white'> 
                          <h3 class="mb-2 text-xl font-bold ">Marketing</h3>
                          <p class="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        
                    </div>
                </div>
              </div>
              
          </div>
        </section>


        </div>
        <Footer />
    </div>
  )
}

export default Ourservices