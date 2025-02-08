import jwt from "jsonwebtoken";
import Company from "../models/Company.js";

export const protectCompany =async (req,response,next)=>{
    const token =req.headers.token 
    if(!token){
        return response.status(401).json({success:false, message:"No token, authorization denied"})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.company =await Company.findById(decoded.id).select("-password")
        next()
    } catch (error) {
        response.json({success:false, message:error.message})
    }
}