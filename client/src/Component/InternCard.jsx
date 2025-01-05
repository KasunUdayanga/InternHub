import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const InternCard = ({ intern }) => {

  const navigate =useNavigate();
  return (
    <div className="border p-6 shadow-lg rounded">
      <div className="flex justify-between items-center">
        <img className="h-8" src={assets.company_icon} alt="" />
      </div>
      <h4 className="font-medium text-xl mt-2">{intern.title}</h4>
      <div className="flex items-center gap-3 mt-2 text-xs">
        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">{intern.location}</span>
        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">{intern.level}</span>
      </div>
      <p className="text-gray-500 text-sm mt-4" dangerouslySetInnerHTML={{__html:intern.description.slice(0,150)}}></p>
      <div className="mt-4 flex gap-4 text-sm">
        <button onClick={()=>{navigate(`/applyintern/${intern._id}`); scrollTo(0,0)}} className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">Apply Now</button>
        <button onClick={()=>{navigate(`/applyintern/${intern._id}`); scrollTo(0,0)}} className="text-gray-500 border border-gray-500 rounded px-4 py-2">Learn More</button>
      </div>
    </div>
  );
};

export default InternCard;
