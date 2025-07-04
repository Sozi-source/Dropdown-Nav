import React from 'react'
import {useNavigate } from 'react-router-dom'
import heroImage from '../assets/images/image-hero-desktop.png'
import todoImage from '../assets/images/icon-todo.svg'
function Home() {

 
    return (
    <div className='flex max-w-[1200px] mx-auto flex-col items-center justify-center'>
      {/* Navigation links */}
      <nav className='flex justify-between items-center float-left p-4 w-full'>
        
        <div className='flex gap-4 items-center ml-24'>
          {/* Logo */}
          <img src="/src/assets/images/logo.svg" alt="logo" className='w-12 h-6'/>
          {/* Dropdown Menu */}
          <select name="Feature" id="">
          <option value="">Features</option>
          <option value="">Todo List</option>
          <option value="">Calender</option>
          <option value="">Reminder</option>
          <option value="">Planning</option>
        </select>

         <select name="Company" id="">
          <option value="">Company</option>
          <option value="">History</option>
          <option value="">Our Team</option>
          <option value="">Blog</option>
        </select>

        <ul className='flex gap-4 mr-24'>
          <li><a href="">Career</a></li>
          <li><a href="">About</a></li>
        </ul>

        </div>
      
      {/* Other links */}
        <ul className='flex gap-4'>
          <li><a href="">Login</a></li>
          <li><a href="">Register</a></li>
        </ul>
        
      </nav>

      <main className='relative flex justify-between items-center p-4 w-full'>
        <div className='flex flex-col gap-4 w-1/2 max-w-[400px] p-5 ml-20'>
          <h1 className='text-5xl font-extrabold'>Make remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar</p>
          <button className='flex start-0 bg-black rounded-md w-25 text-white p-2'>Learn more</button>

          {/* bottom icons */}
          <div className='flex gap-4 items-center justify-center mt-10'>
            <img src="/src/assets/images/client-databiz.svg" alt="" />
            <img src="/src/assets/images/client-audiophile.svg" alt="" />
            <img src="/src/assets/images/client-meet.svg" alt="" />
            <img src="/src/assets/images/client-maker.svg" alt="" />
          </div>
        </div>      

        <div className='w-1/2 '>
          <img src={heroImage} alt="heroImage" className='w-[350px] h-[400px] -mt-12'/>
        </div>
      </main>
    </div>
  )
}

export default Home