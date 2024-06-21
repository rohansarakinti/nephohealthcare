import React from 'react'
import NavbarComponent from '../components/Navbar'
import Footer from '../components/Footer'

const welcomeHome = require("../assets/welcomeHome.jpg")

function Jobopenings() {
  return (
    <div className='h-screen'>
        <NavbarComponent />
        <div className='w-full h-auto'>
          <section className='w-full h-[50vh] bg-cover bg-center' style={{backgroundImage: `url(${welcomeHome})`}}>
            <div className='h-full text-center content-center bg-[#fe6601] p-10 bg-opacity-70'>
              <h1 className='text-6xl text-white font-bold'>Job Openings</h1>
            </div>
          </section>

          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-[#fe6601]">Designed for business teams like yours</h2>
                    <p class="mb-5 font-light sm:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                <div class="">
                    <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-2xl">
                        <h3 class="mb-4 text-2xl font-semibold text-[#fe6601]">Wanted Nurses</h3>
                        <h1 class="font-light sm:text-lg mb-4 text-left font-semibold">Eligibility</h1>

                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                <span>Individual configuration</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <span>Team size:</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <span>Premium support:</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <span>Free updates:</span>
                            </li>
                        </ul>
                        <h1 class="font-light sm:text-lg mb-4 text-left font-semibold">Benefits</h1>
                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Individual configuration</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Team size: </span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Premium support: </span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Free updates: </span>
                            </li>
                        </ul>
                        <a href="contact" class="text-white bg-[#fe6601] border-2 border-white hover:bg-white hover:border-2 hover:border-[#fe6601] hover:text-[#fe6601] focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                    </div>
                </div>
            </div>
          </section>
        </div>
        <Footer />
    </div>
  )
}

export default Jobopenings