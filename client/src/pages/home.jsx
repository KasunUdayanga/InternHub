import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Internlist from '../Component/Internlist'
import Footer from '../Component/Footer'

const home = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <Internlist/>
        <Footer/>
    </div>
  )
}

export default home