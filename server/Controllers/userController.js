import intern from "../Models/Intern.js";
import InternApplication from "../Models/InternApplication.js";
import User from "../Models/User.js";
import {v2 as cloudinary} from 'cloudinary';

export const getUserData = async(req,res)=>{
    const userId =req.auth.userId;

    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.json({success:false, error:"User not found"})
        }
        res.json({success:true, user})
    } catch (error) {
        res.json({success:false, error:error.message})
    }
}

export const applyForIntern = async(req,res)=>{
    const{internId}=req.body
    const userId = req.auth.userId;

    try {
        const isApplied = await InternApplication.find({userId,internId})

        if(isApplied.length>0){
            return res.json({success:false, error:"Already Applied"})
        }
        const internData = await intern.findById(internId)
        if(!internData){
            return res.json({success:false, error:"Intern not found"})
        }

        await InternApplication.create({
            companyId:internData.companyId,
            userId,
            internId,
            date:Date.now()
        })
        res.json({success:true, message:"Application submitted"})
    } catch (error) {
        res.json({success:false, error:error.message})
    }
}

export const getUserInternApplication = async(req,res)=>{
  try {
    const userId =req.auth.userId
    const applications = await InternApplication.find({userId})
    .populate('companyId','name email image')
    .populate('internId','title description location category level salary')
    .exec()

    if(!applications){
        return res.json({success:false, error:"No applications found"})
    }
    res.json({success:true, applications})
  } catch (error) {
    res.json({success:false, error:error.message})
  }
}

export const updateUserResume = async(req,res)=>{
    try {
        const userId = req.auth.userId;
        const resume = req.file;

        const userData =await User.findById(userId);

        if(resume){
            const resumeUpload=await cloudinary.uploader.upload(resume.path)
            userData.resume=resumeUpload.secure_url
        }
        await userData.save();
        res.json({success:true, message:"Resume updated"})
    } catch (error) {
        res.json({success:false, error:error.message})
    }
}