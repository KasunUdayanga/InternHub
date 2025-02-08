import { useEffect } from "react";
import { createContext, useState } from "react";
import { internCard } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext =createContext();

export const AppContextProvider=(props)=>{

    const backendUrl =import.meta.env.VITE_BACKEND_URL

    const[searchFilter,setSearchFilter]=useState({
        title:'',
        location:''
    })
    const [isSearched,setIsSearched]=useState(false)
    const [jobs, setJobs]=useState([])
    const [shreclogin,setShreclogin]=useState(false)
    const [companyToken,setCompanyToken]=useState(null)
    const [companyData,setCompanyData]=useState(null)

    const fetchJobs =async()=>{
        setJobs(internCard); 
    }

    const fetchCompanyData=async()=>{
        try {
            const {data}=await axios.get(`${backendUrl}/api/company/company`,{
                headers:{token:companyToken}})
                if(data.success){
                    setCompanyData(data.company)
                    console.log(data);
                    
                }else{
                    toast.error(data.message)
                }

        } catch (error) {
            toast.error(error.message)
        }
    }
    useEffect(()=>{
        fetchJobs()

        const storedCompanyToken=localStorage.getItem('companyToken')

        if(storedCompanyToken){
            setCompanyToken(storedCompanyToken)
        } 
    },[]);
    useEffect(()=>{
        if(companyToken){
            fetchCompanyData()
        }
    },[companyToken])



    const value={
        searchFilter,
        setSearchFilter,
        isSearched,
        setIsSearched,
        jobs,setJobs,
        shreclogin,setShreclogin,
        companyToken,setCompanyToken,
        companyData,setCompanyData,
        backendUrl
    }


    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}