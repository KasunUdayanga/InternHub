import React from 'react'
import { assets } from '../assets/assets'
import { useClerk,useUser,UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'



const Navbar = () => {
    const{openSignIn} =useClerk()
    const{user}=useUser()






  return (
    <div className='shadow py-5'>
        <div className=' container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        <img src={assets.logo} alt=""/>
        {
            user ? (
                <div className='flex gap-5'>
                   <Link to={"/applications"}>Apply Intern</Link>
                   <p>|</p>
                   <p>Hi ,{user.firstName+" "+user.lastName}</p>
                   <UserButton/>
                </div>
            ):(
        <div className='flex gap-5 max-sm:text-xs'>
            <button className='text-gray-600'> Recrute Login</button>
            <button onClick={ e =>openSignIn()}className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full'>Login</button>
        </div>
         )
        }
        </div>
    </div>
  )
}

export default Navbar