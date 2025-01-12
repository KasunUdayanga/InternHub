import React, { useState } from 'react';
import moment from 'moment'; 
import Navbar from '../Component/Navbar';
import { assets, internsApplied } from '../assets/assets';
import Footer from '../Component/Footer';

const Application = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  const handleSaveResume = () => {
    if (resume) {
      console.log('Resume saved:', resume.name);
      setIsEdit(false);
    } else {
      alert('Please select a resume to save.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        {/* Resume Section */}
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="bg-green-100 text-green-600 px-4 py-2 rounded-lg mr-2">
                  Select Resume
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
                onClick={handleSaveResume}
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                className="bg-green-100 text-green-600 px-4 py-2 rounded-lg"
                href={resume ? URL.createObjectURL(resume) : '#'}
                target="_blank"
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
            {internsApplied.map((intern, index) => (
              <tr key={index} className="text-center ">
                <td className=" border-b px-4 py-2 flex items-center gap-2">
                  <img src={intern.logo} alt={`${intern.company} logo`} className="w-8 h-8" />
                  {intern.company}
                </td>
                <td className=" border-b px-4 py-2">{intern.title}</td>
                <td className=" border-b px-4 py-2">{intern.location}</td>
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
