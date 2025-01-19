import { useEffect } from "react";
import { createContext, useState } from "react";
import { internCard } from "../assets/assets";

export const AppContext =createContext();

export const AppContextProvider=(props)=>{

    const[searchFilter,setSearchFilter]=useState({
        title:'',
        location:''
    })
    const [isSearched,setIsSearched]=useState(false)
    const [jobs, setJobs]=useState([])
    const [shreclogin,setShreclogin]=useState(false)

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
        shreclogin,setShreclogin
    }


    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}