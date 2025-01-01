import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  assets,
  JobCategories,
  JobLocations,
} from "../assets/assets";
import InternCard from "./InternCard.jsx";
import { useState } from "react";

const Internlist = () => {
  const { isSearched, searchFilter, setSearchFilter,jobs } = useContext(AppContext);
  const[showFilter,setShowFilter]=useState(false);
  const[currentPage,setCurrentPage]=useState(1);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Sidebar */}
      <div className="w-full bg-white px-4">
        {/* Search Filter from Hero Component */}
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-600">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                    {searchFilter.title}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt="Clear Title Filter"
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                    {searchFilter.location}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt="Clear Location Filter"
                    />
                  </span>
                )}
              </div>
            </>
          )}
          <button onClick={e=>setShowFilter(prev =>!prev)} className="px-6 py-1.5 rounded border border-gray-400 lg:hidden">
          {showFilter ? "Hide Filter" : "Show Filter"}
            </button>

        {/* Categories */}
        <div className={showFilter ? "" :"max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search by Category</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" />
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div className={showFilter ? "" :"max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search by Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Intern Listing */}
      <section className="text-gray-800">
        <h3 className="font-medium text-3xl py-3" id="intern-list">
          Latest Interns
        </h3>
        <p className="mb-8">Get the best internship opportunities from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
          {jobs.slice((currentPage-1)*6,currentPage*6).map((intern, index) => (
            <InternCard key={index} intern={intern} />
          ))}
        </div>
        {/* pageInitial */}
          {jobs.length > 0 && (
            <div className="flex items-center justify-center space-x-2 mt-10">
              <a href="#intern-list">
                <img src={assets.left_arrow_icon } alt="" />
              </a>
              {Array.from({length:Math.ceil(jobs.length/6)}).map((_,index)=>
                <a href="#intern-list">
                  <button onClick={(()=>setCurrentPage(index+1))} className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded-sm ${currentPage === index + 1 ? 'bg-green-100 text-black-500': 'text-gray-500' }`}>{index+1}</button>
                </a>
              )}
              <a href="#intern-list">
                <img src={assets.right_arrow_icon} alt="" />
              </a>
          </div>
        
        
        )}
      </section>
    </div>
  );
};

export default Internlist;
