import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'


const Hero = () => {

    const{setSearchFilter, setIsSearched} =useContext(AppContext)
    const titleRef=useRef(null)
    const locationRef=useRef(null)

    const onSearch=() =>{
        setSearchFilter({
            title:titleRef.current.value,
            location:locationRef.current.value
        })

        setIsSearched(true)
        console.log({
            title:titleRef.current.value,
            location:locationRef.current.value})
    }




  return (
    <div className='container 2xl:px-20 mx-auto py-10'>
        <div className='bg-gradient-to-r from-green-400 to-green-800 p-10 rounded-lg text-white py-16 text-center mx-2 rounded-b-xl'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Find Your Intern Here</h1>
            <p className='mb-8 max-w-xl mx-auto text-sm font-light px-30'>Empowering Your Career Journey – Find Internships, Gain Experience, and Build Your Future!</p>
            <div className='flex items-center justify-between bg-white rounded text-gray-700 max-w-xl pl-4 mx-4 sm:mx-auto'>
                <div className='flex items-center'>
                    <img className='h-4 sm:h-5' src={assets.search_icon} alt=""  />
                    <input type="text" 
                    placeholder='Search For Intern'
                    className='max-sm:text-xs p-2 rounded outline-none w-full'
                    ref={titleRef}/>
                </div>
                <div className='flex items-center'>
                    <img className='h-4 sm:h-5' src={assets.location_icon} alt=""  />
                    <input type="text" 
                    placeholder='Location'
                    className='max-sm:text-xs p-2 rounded outline-none w-full'
                    ref={locationRef}/>
                </div>
                <button onClick={onSearch} className='bg-green-900 px-6 py-2 rounded text-white m-1 hover:bg-green-500'>Search</button>
            </div>
        </div>
        <div className='border boder-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
            <div className='flex justify-items-center gap-10 lg:gap-13 flex-wrap'>
            <p className='font-medium mx-2'>Trusted by</p>
            <img  className='h-6'src={assets.amazon_logoo} alt="" />
            <img  className='h-6'src={assets.google} alt="" />
            <img  className='h-6'src={assets.ibmlogo} alt="" />
            <img  className='h-6'src={assets.virtusa} alt="" />
            <img className='h-6' src={assets.microsoft_logo} alt="" />
            <img  className='h-6'src={assets.walmart_logo} alt="" />
            <img className='h-6' src={assets.accenture_logo} alt="" />
            <img className='h-6' src={assets.samsung_logo} alt="" />
            <img className='h-6' src={assets.adobe_logo} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Hero