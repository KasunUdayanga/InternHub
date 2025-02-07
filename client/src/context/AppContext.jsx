import { useEffect } from "react";
import { createContext, useState } from "react";
import { internCard } from "../assets/assets";

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
    useEffect(()=>{
        fetchJobs()
    },[]);

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