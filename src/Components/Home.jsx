import React from 'react'
import DP from '../assets/Dp.jpg'
import '../Css/Home.css'
import { useNavigate } from 'react-router-dom'
function Home() {

 const navigate=useNavigate();
 function f(){
  navigate('/About')
 }

  return (

    <div className='w-full min-h-[93vh] bg-cyan-900 flex  flex-col min-[900px]:flex-row-reverse min-[900px]:justify-end max-[900px]:items-center gap-5 mr-4  max-[900px]:bg-white max-[900px]:pt-5  animate-opac'>
      <div className='w-full flex h-screen max-[900px]:h-auto  justify-center items-center  w-[900px]:h-[10px] max-[900px]:max-w-[390px] pr-4'>
        <img src={DP} alt="" className=' bg-teal-500  p-1 rounded-full w-full  aspect-square 
        min-w-[200px]
        max-w-[550px]  h-auto
        
        border-l-8 border-l-blue-500
        border-r-8 border-r-blue-500
        
        '  />
      </div>
      <div className="flex flex-col items-center justify-center  min-[900px]:bg-gray-100 text-center px-4 
      max-w-[600px] h-auto w-full min-[900px]:border-x-black border-[3px]  ">
      <h1 className="text-4xl font-bold mb-4 overflow  animate-slideDown text-violet-950 max-[900px]:text-3xl max-[580px];">
        Welcome in Shivraj's Portfolio
      </h1>
      <h2 className='text-4xl max-[900px]:text-3xl font-bold mb-4 text-indigo-700 animate-fadeSlideRight animation-delay-20000'>Shivraj Singh Pateliya</h2>
      <p className="text-lg font-serif  max-w-xl h-30 animate-fadeSlideLeft animation-delay-500 text-violet-950 min-[900px]:mt-10 ">
        Hello its Me, Shivraj,Competitve Programmer, passionate and creative front-end developer with a focus on building clean, responsive, and user-friendly web experiencesI specialize in React.js, Tailwind Css with strong Foundation in HTML,CSS,JavaScript,I'm always eager to learn new technologies and push my skills further.
      </p>
      <button className='max-sm:hidden
      bg-blue-900 text-white rounded-lg px-2 py-1 hover:bg-indigo-950 min-[900px]:my-8 animate-opac' onClick={f}>More about Me</button>
    </div>
    </div>
  )
    
}

export default Home
