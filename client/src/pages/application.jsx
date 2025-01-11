import React, { useState } from 'react'
import Navbar from '../Component/Navbar'

const application = () => {
  const [isEdit,setIsEdit] = useState(false);
  return (
    <>
    <Navbar/>
    <div>
      <h2>Your Resume</h2>
    </div>
    <div>

    </div>
    </>
  )
}

export default application