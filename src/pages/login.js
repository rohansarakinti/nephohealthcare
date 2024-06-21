import React from 'react'
import NavbarComponent from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '@mui/material'

const logo = require("../assets/NephoLogo.png")

function Login() {
  return (
    <div className='h-screen'>
        <NavbarComponent />
        <div className='w-full h-full'>


        <section class="bg-gray-50">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a href="/" class="flex items-center mb-6 text-2xl underline font-semibold text-[#fe6601]">
                  <img class="h-16 mr-2" src={logo} alt="logo" />
                  Nepho Healthcare    
              </a>
              <div class="w-full bg-white rounded-lg shadow-2xl border-4 border-[#fe6601] dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Sign in to your account
                      </h1>
                      <form class="space-y-4 md:space-y-6" action="#">
                          <div>
                              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                              <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                          </div>
                          <div>
                              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                          </div>
                          <div class="flex items-center justify-between">
                              <div class="flex items-start">
                                  <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-[#fe6601] rounded" required="" />
                                  </div>
                                  <div class="ml-3 text-sm">
                                    <label for="remember" class="text-[#fe6601]">Remember me</label>
                                  </div>
                              </div>
                              <a href="#" class="text-sm font-medium text-[#fe6601] hover:underline ">Forgot password?</a>
                          </div>
                          <Button type="submit" variant='outlined' href="/" className='w-full' sx={{paddingX:6,paddingY:1, fontFamily:"'Poppins', sans-serif", fontWeight:"bold", borderRadius:4,borderColor:'#fe6601',bgcolor:'#fe6601', color:'white',"&:hover":{backgroundColor:'white', color:'#fe6601',borderColor:'#fe6601'}}}>Sign In</Button>
                          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                              Don’t have an account yet? <a href="#" class="font-medium text-[#fe6601] hover:underline">Sign up</a>
                          </p>
                      </form>
                  </div>
              </div>
          </div>
        </section>


        </div>
        <Footer />
    </div>
  )
}

export default Login