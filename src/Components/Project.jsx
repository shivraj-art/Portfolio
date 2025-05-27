import React from 'react'

import todo from '../assets/todo.jpg'
import weather from '../assets/weather5.webp'
import currency from '../assets/currency.avif'
import tic from '../assets/tac.jpg'
import recipe from '../assets/recipe1.avif'
function Project() {
  return (
      <div className='animate-slideDown'>
        <h1 className='text-4xl md:text-5xl p-4 mt-4   font-bold text-center lg:p-6 font-serif text-orange-300 underline animate-opac'>Project</h1>
        
        <div className="flex flex-wrap justify-center gap-10  p-10 min-h-[88vh] ">
          <div className="bg-sky-500 h-96 w-80 relative group overflow-hidden rounded-2xl object-fill hover:cursor-pointer animate-fadeSlideLeft">
            <img src={recipe} alt="" className='h-full w-full object-cover' />
            <div className='absolute  top-[320px] bg-transparent group-hover:top-[-0%] w-full h-full transition-[top] duration-500 opacity-90 overflow-scroll group-hover:bg-yellow-100'>
              <h1 className='text-3xl text-center pt-4 font-bold text-white font-mono group-hover:text-red-600'>Recipe APP</h1>
              <p className='text-start text-xl font-medium text-black p-2 '>The Recipe App is a user-friendly platform designed to help users discover, save, and cook a wide variety of recipes from around the world.  Users can browse recipes by category, search by ingredients, and view step-by-step instructions and cooking tips.
              </p>
              <button className=' 
             bg-red-600 font-bold font-serif shadow-2xl
             rounded text-white ml-[126px] mt-[10px] p-2 hover:bg-red-800' onClick={()=>{
              window.open('https://recipe-app-five-murex.vercel.app/')
               }}>Link</button>
            </div>
          </div>
          
          <div className="bg-sky-500 h-96 w-80 relative group overflow-hidden rounded-2xl object-fill cursor-pointer animate-fadeSlideLeft">
            <img src={currency} alt="" className='h-full w-full object-cover' />
            <div className='absolute  top-[320px] group-hover:top-[-0%] w-full h-full transition-[top] duration-500 opacity-90 overflow-scroll  hover:bg-yellow-100'>
            <h1 className='text-3xl text-center pt-4 font-bold text-white font-mono group-hover:text-red-600 '>Currency-Converter</h1>
            <p className='text-start text-xl font-medium text-black p-2  '>Users can select source and target currencies, enter an amount, and get instant conversions. The app supports over 100 currencies, features a clean and responsive design, and can work seamlessly on both desktop and mobile devices.</p>
            <button className=' 
            bg-red-600 font-bold font-serif shadow-2xl
           rounded text-white ml-[126px] mt-[10px] p-2 hover:bg-red-800' onClick={()=>{
            window.open('https://currency-converter-eosin-rho.vercel.app/')
           }}>Link</button>
          </div>
          </div>

          <div className="bg-sky-500 h-96 w-80 relative group overflow-hidden rounded-2xl object-fill animate-fadeSlideRight">
            <img src={todo} alt="" className='h-full w-full object-cover' />
            <div className='absolute  top-[320px] group-hover:top-[-0%] w-full h-full transition-all duration-500 opacity-90 overflow-scroll bg-transparent group-hover:bg-yellow-100'>
              <h1 className='text-3xl text-center pt-4 font-bold text-white group-hover:text-red-700 font-mono '>Todo-List</h1>
              <p className='text-start text-xl font-medium text-black p-2 '>A  to-do list is a user interface component that allows individuals to record, manage, and organize tasks they intend to complete. In a typical to-do list application, users can add new tasks, mark them as completed, edit existing ones, and delete tasks they no longer need 
              </p>
              <button className=' 
             bg-red-600 font-bold font-serif shadow-2xl
             rounded text-white ml-[126px] mt-[10px] p-2 hover:bg-red-800' onClick={()=>{
              window.open('https://to-do-list-psi-blue-73.vercel.app/')
               }}>Link</button>
            </div>
          </div>

          

          <div className="bg-sky-500 h-96 w-80 relative group overflow-hidden rounded-2xl object-fill animate-fadeSlideRight">
            <img src={weather } alt="" className='h-full w-full object-cover' />
            <div className='absolute  top-[320px] group-hover:top-[-0%] w-full h-full transition-all duration-500 opacity-90 overflow-scroll group-hover:bg-yellow-100  '>
              <h1 className='text-3xl text-center pt-4 text-white group-hover:text-red-700 font-bold font-mono '>Weather-App</h1>
              <p className='text-start text-xl font-medium text-black p-2 '>The Weather App that provides real-time weather updates for any location around the world. Powered by reliable weather APIs, it delivers accurate information including temperature, humidity, wind speed, and forecasts.</p>
              <button className=' 
             bg-red-600 font-bold font-serif
             rounded text-white ml-[126px] mt-[10px] p-2 hover:bg-red-800' onClick={()=>{
              window.open('https://weather-app-self-mu-99.vercel.app/')
               }}>Link</button>
            </div>
          </div>
        </div>
    </div>
        
        
      
  
    
  
    
  )
}

export default Project
