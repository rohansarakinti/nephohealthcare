import React from 'react'
import NavbarComponent from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '@mui/material'

function Contactus() {
  return (
    <div className='h-auto'>
        <NavbarComponent />
        <div className='w-full h-full'>


        <section class="bg-white ">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#fe6601] ">Contact Us</h2>
              <p class="mb-8 lg:mb-16 font-light text-center sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
              <form action="#" class="space-y-8">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                  </div>
                  <div>
                      <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
                      <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                  </div>
                  <div class="sm:col-span-2">
                      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                      <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <Button variant='outlined' href="/" className=''sx={{paddingX:6,paddingY:1, fontFamily:"'Poppins', sans-serif", fontWeight:"bold", borderRadius:4,borderColor:'#fe6601',bgcolor:'#fe6601', color:'white',"&:hover":{backgroundColor:'white', color:'#fe6601',borderColor:'#fe6601'}}}>Send Message</Button>
                  
              </form>
          </div>
        </section>


        </div>
        <Footer />
    </div>
  )
}

export default Contactus