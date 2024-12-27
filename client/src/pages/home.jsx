import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Internlist from '../Component/Internlist'

const home = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <Internlist/>
    </div>
  )
}

export default home