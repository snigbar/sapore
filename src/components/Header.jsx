import React from 'react'
import heroImg from "../assets/headerImg.png"

const Header = () => {
  return (
        <div className="hero min-h-screen bg-base-50 md:w-10/12 mx-auto">
        <div className="hero-content flex-col-reverse md:flex-row-reverse gap-4 text-center md:text-left">
            <img src={heroImg} className="w-3/5 rounded-lg md:ml-4" />
            <div className='w-11/12 lg:w-full'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-violet-950 font-bold">Discover the <span className='text-amber-500'>taste of Italy</span> with every bite</h1>
            <p className="my-6">Unleash your inner chef with our authentic Italian recipes!</p>

            <div className='flex flex-row gap-2 md:gap-4 justify-center md:justify-start'>
            <button className="btn btn-warning text-white bg-amber-500 hover:bg-amber-400">Get Started</button>
            <button className="btn btn-primary bg-indigo-950 px-4">Join Us</button>
            </div>

            </div>
        </div>
        </div>
  )
}

export default Header