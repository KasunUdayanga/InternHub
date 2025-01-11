import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import { assets } from '../assets/assets';

const application = () => {
  const [isEdit,setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  return (
    <>
    <Navbar/>
    <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
      <h2 className='text-xl font-semibold'>Your Resume</h2>
      <div className='flex gap-2 mb-6 mt-3'>
        {
          isEdit
          ?<>
          <label className='flex items-center' htmlFor="resumeUpload">
            <p className='bg-green-100 text-green-600 px-4 py-2 rounded-lg mr-2'>Select Resume</p>
            <input type="file" hidden accept='application/pdf' onChange={e=>setResume(e.target.files[0])} id='resumeUpload' />
            <img src={assets.profile_upload_icon} alt="" />
          </label>
          <button className='bg-green-100 border border-green-600 rounded-lg px-4 py-2'>Save</button>

          </>:<div className='flex gap-2'>
            <a className='bg-green-100 text-green-600 px-4 py-2 rounded-lg' href="">
              Resume
            </a>
            <button className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2' onClick={()=>setIsEdit(true)}>
              Edit
            </button>
          
          </div>
        }
        </div>
    </div>
    </>
  )
}

export default application