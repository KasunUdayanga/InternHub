import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth, useUser } from "@clerk/clerk-react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const{user}=useUser();
  const{getToken}=useAuth();

  const [searchFilter, setSearchFilter] = useState({ title: "", location: "" });
  const [isSearched, setIsSearched] = useState(false);
  const [interns, setInterns] = useState([]);
  const [shreclogin, setShreclogin] = useState(false);
  const [companyToken, setCompanyToken] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [userApplication, setUserApplication] = useState([]);


  const fetchInterns = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/interns`);
    
      
      if (data.success) {
        setInterns(data.Intern);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch interns.");
      console.error("Error fetching interns:", error);
    }

    
  };

  const fetchCompanyData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/company/company`, {
        headers: { token: companyToken },
      });

      if (data.success) {
        setCompanyData(data.company);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch company data.");
      console.error("Error fetching company data:", error);
    }
  };

  const fetchUserData = async () => {
    try {
        const token =await getToken();
      const { data } = await axios.get(`${backendUrl}/api/users/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (data.success) {
        setUserData(data.user);
      }else{
        toast.error(data.message);
      }
  }catch (error) {
    toast.error(error.response?.data?.message || "Failed to fetch user data.");
    console.error("Error fetching user data:", error);
  }}

  const fetchUserApplications = async ()=>{
    try {
        const token =await getToken();
        const { data } = await axios.get(`${backendUrl}/api/users/applications`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        if (data.success) {
            setUserApplication(data.applications)
        }else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch user applications.");
    }
  }

  useEffect(() => {
    fetchInterns();
    const storedCompanyToken = localStorage.getItem("companyToken");
    if (storedCompanyToken) {
      setCompanyToken(storedCompanyToken);
    }
  }, []);
  
  useEffect(() => {
   if (user) {
     fetchUserData();
        fetchUserApplications();
   }
  }, [user]);

  useEffect(() => {
    if (companyToken) {
      fetchCompanyData();
    }
  }, [companyToken]);

  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    interns,
    setInterns,
    shreclogin,
    setShreclogin,
    companyToken,
    setCompanyToken,
    companyData,
    setCompanyData,
    backendUrl,
    userData,
    setUserData,
    userApplication,
    setUserApplication,
    fetchUserData,
    fetchUserApplications

  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
