import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  assets,
  internCard,
  JobCategories,
  JobLocations,
} from "../assets/assets";
import InternCard from "./InternCard.jsx";

const Internlist = () => {
  const { isSearched, searchFilter, setSearchFilter } = useContext(AppContext);

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

        {/* Categories */}
        <div className="max-lg:hidden">
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
        <div className="max-lg:hidden">
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
          {internCard.map((intern, index) => (
            <InternCard key={index} intern={intern} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Internlist;
