import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment'; 
import Navbar from '../Component/Navbar';
import { assets } from '../assets/assets';
import Footer from '../Component/Footer';
import { AppContext } from '../context/AppContext';
import { useAuth, useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Application = () => {
  const{user}=useUser();
  const {getToken}=useAuth()
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  const{backendUrl,userData,userApplication,fetchUserData,fetchUserApplications}=useContext(AppContext)

  const updateResume=async()=>{
    try {
      const formData=new FormData();
      formData.append('resume',resume)
      const token=await getToken()

      const{data}=await axios.post(`${backendUrl}/api/users/update-resume`,formData,{
        headers:{Authorization:`Bearer ${token}`}})
        if(data.success){
          toast.success(data.message)
          await fetchUserData()
         
        }else{
          toast.error(data.message)
        }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message)
    }
    setIsEdit(false)
    setResume(null)
  }
useEffect(()=>{
  if (user) {
    fetchUserApplications()
  }
},[user])
  

  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        {/* Resume Section */}
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit || userData && userData.resume ==="" ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="bg-green-100 text-green-600 px-4 py-2 rounded-lg mr-2">
                  {resume? resume.name :"select resume"}
                </p>
                <input
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setResume(e.target.files[0])}
                  id="resumeUpload"
                />
                <img src={assets.profile_upload_icon} alt="Upload Icon" />
              </label>
              <button
                className="bg-green-100 border border-green-600 rounded-lg px-4 py-2"
                onClick={updateResume}
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a href={userData.resume} target="_blank" 
                className="bg-green-100 text-green-600 px-4 py-2 rounded-lg"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <button
                className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            </div>
          )}
        </div>

        {/* Interns Applied Section */}
        <h2 className="text-lg font-semibold mb-4">Interns Applied</h2>
        <table className="table-auto w-full  border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border-b  border-gray-300 px-4 py-2">Company</th>
              <th className="border-b  border-gray-300 px-4 py-2">Intern Title</th>
              <th className="border-b  border-gray-300 px-4 py-2">Location</th>
              <th className="border-b  border-gray-300 px-4 py-2">Date</th>
              <th className="border-b  border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {userApplication.map((intern, index) => (
              <tr key={index} className="text-center ">
                <td className=" border-b px-4 py-2 flex items-center gap-2">
                  <img src={intern.logo} alt={`${intern.companyId.image} logo`} className="w-8 h-8" />
                  {intern.companyId.name}
                </td>
                <td className=" border-b px-4 py-2">{intern.internId.title}</td>
                <td className=" border-b px-4 py-2">{intern.internId.location}</td>
                <td className=" border-b px-4 py-2">
                  {moment(intern.date).format('ll')}
                </td>
                <td className=" border-b px-4 py-2">
                  <span className={`${intern.status=== 'Accepted'?'bg-green-300':intern.status === 'Rejected' ?'bg-red-300': 'bg-blue-300' } px-4 py-1.5 rounded`}>
                  {intern.status}
                  </span></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

       <Footer />
    </>
  );
};

export default Application;
