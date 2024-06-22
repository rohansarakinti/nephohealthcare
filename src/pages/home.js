import React from 'react'
import NavbarComponent from '../components/Navbar'
import ImgCarousel from '../components/Carousel'
import { Button } from '@mui/material'
import Footer from '../components/Footer'
//className='h-4/5 w-2/5 bg-[#fe6601] rounded-full absolute right-20 mt-10 p-36 text-center
//width: "500px", height: "500px", line-height: "500px", border-radius: "50%", font-size: "50px", color: "#fff", text-align: "center", background: "#000"
//Replace carousel images with around 6 or so diversified nurses and lab technicians

const joinUs = require("../assets/joinUsHome.jpg")
const subtlebg = require("../assets/subtleBackground.png")
const ourServices = require("../assets/ourServicesHome.jpg")
const jobPositionsHome = require("../assets/jobPositionsHome.jpg")
const welcomeHome = require("../assets/welcomeHome.jpg")

function HomePage() {
  return (
    <div className='h-screen'>
      <NavbarComponent />

      <ImgCarousel/>
      
      <h1 className='text-[#fe6601] font-bold text-4xl absolute top-1/2 z-10 mx-5 sm:mx-20 max-[773px]:text-5xl min-[773px]:text-6xl text-center lg:mx-36'>Empowering Healthcare Heroes, Locally and Globally.</h1>
      <a href="#company-overview" class="absolute max-w-[900px] left-10 right-10 uppercase sm:left-52 sm:right-52 ml-auto mr-auto text-center top-3/4 z-20 text-white bg-[#fe6601] border-2 border-[#fe6601] hover:bg-white hover:border-2 hover:border-[#fe6601] hover:text-[#fe6601] focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-lg px-10 py-4 text-center duration-150">Get Started</a>
      
      <div className='w-full h-auto'>

      <section id="company-overview" className='py-40 sm:px-20 px-5' style={{backgroundImage: `url(${subtlebg})`}}>
        <div className='h-full block min-[1010px]:hidden min-[1010px]:w-2/3 bg-white border-4 min-[1010px]:border-l-4 min-[1010px]:border-t-4 min-[1010px]:border-b-4 border-[#fe6601] p-5 min-[1010px]:p-20 rounded-2xl min-[1010px]:rounded-l-2xl shadow-2xl z-30 mx-auto min-[1010px]:m-0'>
          <h1 className='text-4xl text-[#fe6601] font-bold text-center underline'>Welcome To Nepho Healthcare Solutions.</h1>
          <p className='text-lg mt-5 '>Brief descriptionLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
        </div>
        <div className='bg-cover mt-10 bg-center w-full h-[800px] border-4 border-[#fe6601] rounded-3xl shadow-2xl' style={{backgroundImage: `url(${welcomeHome})`}}>
          <div className='h-full bg-gradient-to-r from-transparent to-white to-70% rounded-3xl max-[1010px]:hidden min-[1010px]:block'>
              <div className='bg-white border-8 border-[#fe6601] absolute mx-auto right-40 p-16 content-center mt-10 shadow-2xl' style={{width:'700px', height:'700px', lineHeight: '100px', borderRadius:'50%', fontSize:'50px',textAlign:'center'}}>
                <h1 className='text-4xl text-[#fe6601] font-bold text-center underline'>Welcome To Nepho Healthcare Solutions.</h1>
                <p className='text-lg mt-5 '>Brief descriptionLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
                <Button variant='outlined' href="company" sx={{paddingX:6,paddingY:1, fontFamily:"'Poppins', sans-serif", fontWeight:"bold", borderRadius:4,borderColor:'#fe6601', color:'#fe6601',"&:hover":{backgroundColor:'#fe6601', color:'white'}}}>Learn more</Button>
              </div>
          </div>
        </div>

      </section>

      <section className='sm:px-20 px-5 py-22 max-[955px]:flex-col flex min- items-center' style={{backgroundImage: `url(${subtlebg})`}}>
        <div className='h-full sm:w-2/3 bg-white max-[955px]:border-4 min-[955px]:border-r-0 min-[955px]:border-l-4 min-[955px]:border-t-4 min-[955px]:border-b-4 border-[#fe6601] p-5 lg:p-10 max-[955px]:rounded-2xl rounded-l-2xl min-[955px]::rounded-r-none shadow-2xl z-30 mx-auto sm:m-0'>
          <h1 className='text-4xl text-[#fe6601] font-bold text-center underline'>Why Join Us</h1>
          <p className='text-lg mt-5 '>Brief descriptionLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
        </div>
        <img src={joinUs} className='border-4 border-[#fe6601] sm:border-none mt-10 min-[955px]:m-0 min-[955px]:w-1/3 z-10 bg-cover rounded-3xl shadow-2xl'/>
      </section>

        <section className='my-52'>

          <div className='grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 gap-24 sm:py-14 px-5 sm:px-14 h-1/2'>
            <div className='bg-cover w-full h-full rounded-xl shadow-2xl' style={{backgroundImage: `url(${ourServices})`}}>
              <div className='border h-full text-center content-center rounded-xl bg-[#fe6601] p-10 bg-opacity-70'>
                <div>
                  <h1 className='text-4xl text-white font-bold'>Our Services</h1>
                  <p className='text-lg mt-5 text-white'>Explore the different services our company offers and what how we can support you.</p>
                </div>
                <div className='mt-10'>
                  <Button variant='outlined' href="services" sx={{paddingX:6,paddingY:1,fontFamily:"'Poppins', sans-serif", fontWeight:"bold",borderColor:'white', color:'white',"&:hover":{backgroundColor:'white', color:'orange'}}}>Explore</Button>
                </div>
              </div>
            </div>

            <div className='bg-cover shadow-2xl w-full h-full rounded-xl' style={{backgroundImage: `url(${jobPositionsHome})`}}>          
              <div className='border  h-full text-center content-center rounded-xl bg-[#fe6601] p-10 bg-opacity-70' background={jobPositionsHome}>
                <div>
                  <h1 className='text-4xl text-white font-bold'>Job Openings</h1>
                  <p className='text-lg mt-5 text-white'>Check out our new job openings and see if they align with your interests.</p>
                </div>
                <div className='mt-10'>
                <Button variant='outlined' href="jobs" sx={{paddingX:6,paddingY:1,borderColor:'white', fontFamily:"'Poppins', sans-serif", fontWeight:"bold",color:'white',"&:hover":{backgroundColor:'white', color:'orange'}}}>Go Now</Button>
                </div>
              </div>
            </div>
          </div>

        </section>

        <Footer />
        

      </div>
    </div>
    
  )
}

export default HomePage