import React from 'react'
import NavbarComponent from '../components/Navbar'
import ImgCarousel from '../components/Carousel'
import { Button } from '@mui/material'
import Footer from '../components/Footer'
//className='h-4/5 w-2/5 bg-[#fe6601] rounded-full absolute right-20 mt-10 p-36 text-center
//width: "500px", height: "500px", line-height: "500px", border-radius: "50%", font-size: "50px", color: "#fff", text-align: "center", background: "#000"

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

      <div className='w-full h-1/2'>
        
      <section className='py-40 px-20' style={{backgroundImage: `url(${subtlebg})`}}>

        <div className='bg-cover bg-center w-full h-[90vh] border-4 border-[#fe6601] rounded-3xl shadow-2xl' style={{backgroundImage: `url(${welcomeHome})`}}>
          <div className='h-full bg-gradient-to-r from-transparent to-white to-70% rounded-3xl '>
              <div className='bg-white border-8 border-[#fe6601] absolute right-40 p-16 content-center mt-10 shadow-2xl' style={{width:'700px', height:'700px', lineHeight: '100px', borderRadius:'50%', fontSize:'50px',textAlign:'center'}}>
                <h1 className='text-4xl text-[#fe6601] font-bold text-center underline'>Welcome To Nepho Healthcare Solutions.</h1>
                <p className='text-lg mt-5 '>Brief descriptionLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
                <Button variant='outlined' sx={{paddingX:6,paddingY:1, fontFamily:"'Poppins', sans-serif", fontWeight:"bold", borderRadius:4,borderColor:'#fe6601', color:'#fe6601',"&:hover":{backgroundColor:'#fe6601', color:'white'}}}>Learn more</Button>
              </div>
          </div>
        </div>

      </section>

      <section className='px-20 py-22 flex items-center' style={{backgroundImage: `url(${subtlebg})`}}>
        <div className='h-full w-2/3 bg-white border-l-4 border-t-4 border-b-4 border-[#fe6601] p-20 rounded-l-2xl shadow-2xl z-30'>
          <h1 className='text-4xl text-[#fe6601] font-bold text-center underline'>Why Join Us</h1>
          <p className='text-lg mt-5 '>Brief descriptionLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
        </div>
        <img src={joinUs} className='  w-1/3 z-10 bg-cover rounded-3xl shadow-2xl'/>
      </section>

        <section className='my-52'>

          <div className='grid grid-rows-1 grid-cols-2 gap-24 p-14 h-[50vh]'>
            <div className='bg-cover w-full h-full rounded-xl' style={{backgroundImage: `url(${ourServices})`}}>
              <div className='border h-full text-center content-center rounded-xl bg-[#fe6601] p-10 bg-opacity-70'>
                <div>
                  <h1 className='text-4xl text-white font-bold'>Our Services</h1>
                  <p className='text-lg mt-5 text-white'>Explore the different services our company offers and what how we can support you.</p>
                </div>
                <div className='mt-10'>
                  <Button variant='outlined' sx={{paddingX:6,paddingY:1,fontFamily:"'Poppins', sans-serif", fontWeight:"bold",borderColor:'white', color:'white',"&:hover":{backgroundColor:'white', color:'orange'}}}>Explore</Button>
                </div>
              </div>
            </div>

            <div className='bg-cover w-full h-full rounded-xl' style={{backgroundImage: `url(${jobPositionsHome})`}}>          
              <div className='border h-full text-center content-center rounded-xl bg-[#fe6601] p-10 bg-opacity-70' background={jobPositionsHome}>
                <div>
                  <h1 className='text-4xl text-white font-bold'>Job Openings</h1>
                  <p className='text-lg mt-5 text-white'>Check out our new job openings and see if they align with your interests.</p>
                </div>
                <div className='mt-10'>
                <Button variant='outlined' sx={{paddingX:6,paddingY:1,borderColor:'white', fontFamily:"'Poppins', sans-serif", fontWeight:"bold",color:'white',"&:hover":{backgroundColor:'white', color:'orange'}}}>Go Now</Button>
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