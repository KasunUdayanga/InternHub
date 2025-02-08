import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'



const Dashboard = () => {

  const navigate= useNavigate()
  const {companyData,setCompanyData,setCompanyToken}= useContext(AppContext);

  const logout=()=>{
    setCompanyData(null)
    setCompanyToken(null)
    localStorage.removeItem('companyToken')
    navigate('/')
  }
// useEffect(()=>{
//   if(companyData){
//     navigate('/dashboard/manageintern')
//   }})


  return (
    <div className='min-h-screen'>
      <div className='shadow py-4'>
        <div className='px-5 flex justify-between items-center' >
          <img onClick={e => navigate('/')} className='max-sm:w-30 w-40 cursor-pointer' src={assets.logo} alt="" />
          {companyData &&(
            <div className='flex items-center gap-3'>
            <p className='max-sm:hidden'>Welcome {companyData.name}</p>
            <div className='relative group'>
              <img className='w-8 border rounded-full' src={companyData.image} alt="" />
              <div className='absolute hidden group-hover:block top-1 right-1 z-30 text-black rounded pt-12'>
                <ul className='list-none m-0 p-1  bg-red-300 rounded-lg border text-sm'>
                  <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
          ) }
       
        </div>
      </div>
      <div className='flex items-start'>

          <div className='inline-block min-h-screen border-r-2'>
            <ul className='flex flex-col items-start pt-5 text-5 text-gray-800'>
              <NavLink className={({isActive})=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-green-100 border-r-4 border-green-500'}`} to={'/dashboard/addIntern'}>
              <img className='min-w-4' src={assets.add_icon} alt="" />
              <p className='max-sm:hidden '>Add Intern</p>
              </NavLink>

              <NavLink className={({isActive})=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-green-100 border-r-4 border-green-500'}`}  to={'/dashboard/manageintern'}>
              <img className='min-w-4' src={assets.home_icon} alt="" />
              <p className='max-sm:hidden '>Manage Intern</p>
              </NavLink>

              <NavLink className={({isActive})=>`flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-green-100 border-r-4 border-green-500'}`}  to={'/dashboard/viewapplication'}>
              <img  className='min-w-4'src={assets.person_tick_icon} alt="" />
              <p className='max-sm:hidden '>View Application</p>
              </NavLink>
            
            </ul>
          </div>
          <div>
            <Outlet />
          </div>

      </div>
    </div>
  )
}

export default Dashboard