import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Loading from '../Component/Loading';
import Navbar from '../Component/Navbar';
import { assets } from '../assets/assets';
import kconvert from 'k-convert';
import moment from 'moment';
import Footer from '../Component/Footer';
import InternCard from '../Component/InternCard'; 
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '@clerk/clerk-react';

const ApplyIntern = () => {
  const { id } = useParams();
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [intern, setIntern] = useState(null);
  const [isAlreadyApplied, setIsAlreadyApplied] = useState(false);
  const { interns, backendUrl, userData, userApplication = [], fetchUserApplications } = useContext(AppContext);

  // ✅ Fetch Intern Details
  const fetchInterns = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/interns/${id}`);
      if (data.success) {
        setIntern(data.Intern);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch intern.");
      console.error("Error fetching intern:", error);
    }
  };

  // ✅ Apply for Internship
  const applyHandlers = async () => {
    try {
      if (!userData) {
        toast.error("Please login to apply for intern.");
        return;
      }

      if (!userData.resume) {
        navigate('/applications'); 
        toast.error("Upload resume to apply.");
        return;
      }

      const token = await getToken();
      if (!token) {
        toast.error("Authentication failed. Please log in again.");
        return;
      }

      const { data } = await axios.post(
        `${backendUrl}/api/users/apply`,
        { internId: intern?._id }, // ✅ Optional chaining
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);
        fetchUserApplications();
      } else {
        toast.error(data.error?.message || "Already Applied.");
      }
    } catch (error) {
      console.error("Error applying for internship:", error);
      toast.error(error.response?.data?.message || "An unexpected error occurred.");
    }
  };

  // ✅ Check if User Already Applied
  const checkAlreadyApplied = () => {
    if (!intern || userApplication.length === 0) return; // ✅ Prevents null errors

    const hasApplied = userApplication.some(item => item?.internId?._id === intern?._id);
    setIsAlreadyApplied(hasApplied);
  };

  // ✅ Fetch Intern Details when ID Changes
  useEffect(() => {
    fetchInterns();
  }, [id]);

  // ✅ Check Application Status when User Data Updates
  useEffect(() => {
    if (intern && userApplication.length > 0) {
      checkAlreadyApplied();
    }
  }, [intern, userApplication]);

  return intern ? (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
        <div className="bg-white text-black rounded-lg w-full">
          <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-green-200 border border-emerald-600 rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border"
                src={intern?.companyId?.image}
                alt={`${intern?.companyId?.name} logo`}
              />
              <div className="text-center md:text-left text-neutral-900">
                <h1 className="text-2xl sm:text-4xl font-medium">{intern?.title}</h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="Suitcase icon" />
                    <p>{intern?.companyId?.name}</p>
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="Location icon" />
                    <p>{intern?.location}</p>
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="Person icon" />
                    <p>{intern?.level}</p>
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="Money icon" />
                    <p>Rs: {kconvert.convertTo(intern?.salary)}</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
              <button onClick={applyHandlers} className="bg-green-600 p-2.5 px-10 text-white rounded">
                {isAlreadyApplied ? 'Already Applied' : 'Apply Now'}
              </button>
              <p className="mt-2 text-gray-600">Posted {moment(intern?.date).fromNow()}</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="font-bold text-2xl mb-4">Intern Description</h2>
              <div className="rich-text" dangerouslySetInnerHTML={{ __html: intern?.description }}></div>
              <button onClick={applyHandlers} className="bg-green-600 p-2.5 px-10 text-white rounded mt-10">
                {isAlreadyApplied ? 'Already Applied' : 'Apply Now'}
              </button>
            </div>
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
              <h1 className='text-xl font-medium'>More Internships from {intern?.companyId?.name}</h1>
              {interns
                .filter(job => job?._id !== intern?._id && job?.companyId?._id === intern?.companyId?._id)
                .filter(job => !userApplication.some(app => app?.internId?._id === job?._id))
                .slice(0, 2)
                .map((job, index) => (
                  <InternCard key={index} intern={job} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default ApplyIntern;
