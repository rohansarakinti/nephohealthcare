import React from 'react'
import NavbarComponent from '../components/Navbar'
import Footer from '../components/Footer'

const welcomeHome = require("../assets/welcomeHome.jpg")
const Companybg = require("../assets/companybg.png")

function Companyoverview() {
  return (
    <div className='h-screen'>
        <NavbarComponent />
        <div className='w-full h-auto'>

          <section className='w-full h-[50vh] bg-cover bg-center' style={{backgroundImage: `url(${welcomeHome})`}}>
            <div className='h-full text-center content-center bg-[#fe6601] p-10 bg-opacity-70'>
              <h1 className='text-6xl text-white font-bold'>Company Overview</h1>
            </div>
          </section>
          <div className="w-full h-full py-40 bg-cover p-5" style={{backgroundImage: `url(${Companybg})`}}>
            <div class="gap-16 items-center bg-white py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 border-4 border-[#fe6601] shadow-2xl rounded-2xl">
              <div class="font-light sm:text-lg pl-2">
                <h2 className='text-2xl underline uppercase font-semibold text-[#fe6601]'>About</h2>
                <h2 class="mb-4 mt-4 text-4xl tracking-tight font-extrabold text-[#fe6601]">Nepho Healthcare</h2>
                <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                <h3 className='text-2xl font-semibold text-[#fe6601] mb-4'>Subheading</h3>
                <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h3 className='text-2xl font-semibold text-[#fe6601] mb-4'>Subheading</h3>
                <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
              </div>
            </div>
          </div>
        
        </div>
        <Footer />
    </div>
  )
}

export default Companyoverview