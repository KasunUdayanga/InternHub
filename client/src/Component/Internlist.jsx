import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'

const Internlist = () => {
    const {isSearched, searchFilter,setSearchFilter}=useContext(AppContext)   


  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max:lg:space-y-8 py-8'>
        
            {/* sidebar */}
            <div className='w-full  bg-white px-4 '>
                {/* searchfilter from hero component */}
                {
                    isSearched&& (searchFilter.title !== "" || searchFilter.location !== "" )&&(
                        <>
                        <h3 className='font-medium text-lg mb-4 '>Current Search</h3>
                        <div className='mb-4 text-gray-600'>
                            {searchFilter.title  && (
                                <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-r-green-200 px-4 py-1.5 rounded'>
                                    {searchFilter.title}
                                    <img onClick={e =>setSearchFilter(prev => ({...prev,title:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                                </span>
                            )}
                             {searchFilter.location  && (
                                <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-r-blue-200 px-4 py-1.5 rounded'> 
                                    {searchFilter.location}
                                    <img onClick={e =>setSearchFilter(prev => ({...prev,location:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                                </span>
                            )}
                        </div>
                        </>
                    )
                }

                {/* category */}
                <div className='max-lg:hidden'>
                    <h4 className='font-medium text-lg py-4'>Search by Category</h4>
                    <ul className='space-y-4 text-gray-600'>
                       { JobCategories.map((category,index)=>(
                        <li className='flex gap-3 items-center' key={index}>
                            <input className='scale-125' type="checkbox"  />
                            { category}
                        </li>
                       ))}
                    </ul>
                </div>
                {/* location */}
                <div className='max-lg:hidden'>
                    <h4 className='font-medium text-lg py-4 pt-4'>Search by Location</h4>
                    <ul className='space-y-4 text-gray-600'>
                       { JobLocations.map((location,index)=>(
                        <li className='flex gap-3 items-center' key={index}>
                            <input className='scale-125' type="checkbox"  />
                            { location}
                        </li>
                       ))}
                    </ul>
                </div>
            </div>
                       {/* Internlising */}
                       <section className='w-400px lg:left-3/4 text-gray-800  max-lg:px-'>
                       <h3 className='font-medium text-3xl py-3' id='intern-list'>Latest Interns</h3>
                       <p className='mb-8'>Get best intern opportunity from tom companies </p>
                       <div className='grid grid-clos-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>

                       </div>
                       </section>

        
    </div>
  )
}

export default Internlist