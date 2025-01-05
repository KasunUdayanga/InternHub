import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Loading from '../Component/Loading';
import Navbar from '../Component/Navbar';
import { assets } from '../assets/assets';
import kconvert from 'k-convert';
import moment from 'moment';
import Footer from '../Component/Footer';
import InternCard from '../Component/InternCard'; // Ensure the path is correct

const ApplyIntern = () => {
  const { id } = useParams();
  const [intern, setIntern] = useState(null);
  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    if (jobs && jobs.length > 0) {
      const data = jobs.filter((job) => job._id === id);
      if (data.length !== 0) {
        setIntern(data[0]);
      }
      console.log(data[0]);
    }
  };

  useEffect(() => {
    fetchJob();
  }, [id, jobs]);

  return intern ? (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
        <div className="bg-white text-black rounded-lg w-full">
          <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-green-200 border border-emerald-600 rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border"
                src={intern.companyId.image}
                alt={`${intern.companyId.name} logo`}
              />
              <div className="text-center md:text-left text-neutral-900">
                <h1 className="text-2xl sm:text-4xl font-medium">{intern.title}</h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="Suitcase icon" />
                    <p>{intern.companyId.name}</p>
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="Location icon" />
                    <p>{intern.location}</p>
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="Person icon" />
                    <p>{intern.level}</p>
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="Money icon" />
                    <p>Rs: {kconvert.convertTo(intern.salary)}</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
              <button className="bg-green-600 p-2.5 px-10 text-white rounded">Apply Now</button>
              <p className="mt-2 text-gray-600">Posted {moment(intern.date).fromNow()}</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="font-bold text-2xl mb-4">Intern Description</h2>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: intern.description }}
              ></div>
              <button className="bg-green-600 p-2.5 px-10 text-white rounded mt-10">Apply Now</button>
            </div>
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
              <h1 className='text-xl font-medium'>More Internships from {intern.companyId.name}</h1>
              {jobs
                .filter((job) => job._id !== intern._id && job.companyId._id === intern.companyId._id)
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
