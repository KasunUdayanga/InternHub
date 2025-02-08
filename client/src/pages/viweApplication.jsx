import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../Component/Loading";

const ViewApplication = () => {
  const { backendUrl, companyToken } = useContext(AppContext);
  const [applicants, setApplicants] = useState([]);

  // Fetch company intern applications
  const fetchCompanyInternApplications = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/company/applicants`, {
        headers: { token: companyToken },
      });

      if (data.success && Array.isArray(data.applications)) {
        setApplicants([...data.applications].reverse());
      } else {
        toast.error(data.message || "Unexpected response format");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // Change job application status
  const changeJobApplicationStatus = async (id, status) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/company/change-status`,
        { id, status },
        {
          headers: { token: companyToken },
        }
      );
      if (data.success) {
        fetchCompanyInternApplications();
      } else {
        toast.error(data.message || "Failed to change status");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyInternApplications();
    }
  }, [companyToken]);

  if (!applicants) return <Loading />;

  return (
    <div className="container mx-auto p-4">
      {applicants.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-10">
          No applications available
        </div>
      ) : (
        <div>
          <table className="w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">User Name</th>
                <th className="py-2 px-4 text-left max-sm:hidden">
                  Intern Title
                </th>
                <th className="py-2 px-4 text-left max-sm:hidden">Location</th>
                <th className="py-2 px-4 text-left">Resume</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {applicants
                .filter(
                  (application) => application.internId && application.userId
                )
                .map((application, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b text-center">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border-b text-center flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-3 max-sm:hidden"
                        src={application.userId.image}
                        alt=""
                      />
                      <span>{application.userId.name}</span>
                    </td>
                    <td className="py-2 px-4 border-b max-sm:hidden">
                      {application.internId.title}
                    </td>
                    <td className="py-2 px-4 border-b max-sm:hidden">
                      {application.internId.location}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <a
                        href={application.userId.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-50 text-green-400 px-3 py-1 rounded inline-flex gap-2 items-center"
                      >
                        Resume{" "}
                        <img
                          src={assets.resume_download_icon}
                          alt="Download Icon"
                        />
                      </a>
                    </td>
                    <td className="py-2 px-4 border-b relative">
                      {application.status === "Pending" ? (
                        <div className="relative inline-block text-left group">
                          <button className="text-gray-500 action-button">
                            ...
                          </button>
                          <div className="z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block">
                            <button
                              onClick={() =>
                                changeJobApplicationStatus(
                                  application._id,
                                  "Accepted"
                                )
                              }
                              className="block w-full text-left px-4 py-2 text-green-500 hover:bg-gray-100"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() =>
                                changeJobApplicationStatus(
                                  application._id,
                                  "Rejected"
                                )
                              }
                              className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>{application.status}</div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewApplication;
