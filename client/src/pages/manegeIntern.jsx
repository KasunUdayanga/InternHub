import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../Component/Loading';

const ManageIntern = () => {
  const navigate = useNavigate();
  const [intern, setIntern] = useState(false); 
  const { backendUrl, companyToken } = useContext(AppContext);

  const fetchCompanyIntern = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/company/list-interns`, {
        headers: { token: companyToken }
      });

      if (data.success && Array.isArray(data.internData)) { 
        setIntern(data.internData.reverse());
      } else {
        toast.error(data.message || "Invalid data format received");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const changeJobVisibility = async (id) => {
    try {
      const{data} =await axios.post(backendUrl+'/api/company/change-visibility',
        {id},{headers:{token:companyToken}})
      
        if (data.success) {
          toast.success(data.message);
          fetchCompanyIntern();
        }else{
          toast.error(data.message);
        }
    } catch (error) {
      toast.error(error.message);
    }

  }

  useEffect(() => {
    if (companyToken) {
      fetchCompanyIntern();
    }
  }, [companyToken]);

  return intern ? intern.length === 0 ?(<div className='flex items-center justify-center h-[70vh]'>
    <p className='text-xl sm:text-2xl'>No Intern Available</p>
  </div>): (
    <div className="container p-4 max-w-5xl">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">#</th>
              <th className="py-2 px-4 border-b text-left">Intern Title</th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">Date</th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">Location</th>
              <th className="py-2 px-4 border-b text-left">Application</th>
              <th className="py-2 px-4 border-b text-left">Visible</th>
            </tr>
          </thead>
          <tbody>
            {intern.length > 0 ? (
              intern.map((intern, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="py-2 px-4 border-b max-sm:hidden">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{intern.title}</td>
                  <td className="py-2 px-4 border-b max-sm:hidden">{moment(intern.date).format('ll')}</td>
                  <td className="py-2 px-4 border-b max-sm:hidden">{intern.location}</td>
                  <td className="py-2 px-4 border-b text-center">{intern.applicants}</td>
                  <td className="py-2 px-4 border-b">
                    <input onChange={()=>changeJobVisibility(intern._id)} className="scale-125 ml-4" type="checkbox" checked={intern.visible} readOnly />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-center text-gray-500">
                  No Internships Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={() => navigate('/dashboard/addIntern')} className="bg-green-600 text-white py-2 px-4 rounded">
          Add New Intern
        </button>
      </div>
    </div>
  ):<Loading/>
};

export default ManageIntern;
