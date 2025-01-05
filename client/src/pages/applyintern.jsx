import React,{useContext,useState}from 'react'
import { useParams } from 'react-router-dom';

const applyintern = () => {
    const { id }=useParams();

    const [intern,setIntern]=useState(null);

    const{intern}
    const fetchIntern=async()=>{
        try {
            const res=await axios.get(`/interns/${id}`);
            setIntern(res.data);
        } catch (error) {
            console.log(error);
        }
    }





  return (
    <div>applyintern</div>
  )
}

export default applyintern