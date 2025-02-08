import Company from "../models/Company.js";
import bcrypt from "bcrypt";
import {v2 as cloudinary} from 'cloudinary';
import generateToken from "../utils/generateToken.js";
import intern from "../models/Intern.js";
import InternApplication from "../models/InternApplication.js";






export const registerCompany = async (req, res) => {

        const {name, email, password} = req.body;
        const imageFile =req.file;
        if (!name || !email || !password || !imageFile) {
            return res.json({success: false, message: "Please fill all the fields"});
        }

        try {
            const companyExists = await Company.findOne({email});
            if (companyExists) {
                return res.json({success: false, message: "Company already registered"});
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const imageUpload = await cloudinary.uploader.upload(imageFile.path);

            const company = await Company.create({
                name,
                email,
                password: hashedPassword,
                image: imageUpload.secure_url
            })
            res.json({
                success: true,
                company:{
                    _id : company._id,
                    name: company.name,
                    email: company.email,
                    image: company.image
                },
                token: generateToken(company._id)
            })
        } catch (error) {
            res.json({success: false, message:error.message});
        }
}

export const loginCompany = async (req, res) => {
    const { email, password } = req.body;

    try {
        const company = await Company.findOne({ email });

        // Check if company exists
        if (!company) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, company.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        // Send success response with token
        res.json({
            success: true,
            company: {
                _id: company._id,
                name: company.name,
                email: company.email,
                image: company.image
            },
            token: generateToken(company._id)
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


export const getCompanyData = async (req, res) => {
    const company = req.company
    try {
        res.json({success: true, company})
    } catch (error) {
        res.json({sucess:false,error: error.message})
    }
}
export const postIntern = async (req, res) => {
    const {title, description, location, salary,level,category} = req.body;
    const companyId = req.company._id;
   try {
     const newIntern =new intern({
            title,
            description,
            location,
            salary,
            companyId,
            date: Date.now(),
            level,
            category
     })
        await newIntern.save();
        res.json({success: true, newIntern})
   } catch (error) {
         res.json({success: false, message: error.message})
   }
}
export const getCompanyInternApplicants = async (req, res) => {
    try {
        const companyId = req.company._id;
        const applications = await InternApplication.find({companyId})
        .populate('userId','name image resume')
        .populate('internId','title location category level salary')
        .exec()
        return res.json({success: true, applications})
    } catch (error) {
        res.json({success: false,error: error.message})
    }
}
export const getCompanyPostedIntern = async (req, res) => {
    try {
        const companyId=req.company._id

        const interns = await intern.find({companyId})


        const internData = await Promise.all(interns.map(async (intern) => {
            const applicants = await InternApplication.find({internId: intern._id})
        return{...intern.toObject(), applicants: applicants.length}
        }))

        res.json({success: true, internData})

    } catch (error) {
        res.json({success: false, error: error.message})
    }
}

export const ChangeInternApplicationStatus = async (req, res) => {
    try {
        const {id,status}= req.body

    await InternApplication.findOneAndUpdate({_id:id}, {status})
    
    res.json({success: true, message: "Application status updated"})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}
export const changeVisibility = async (req, res) => {
   try {
    const {id} =req.body
    const companyId=req.company.id
    
    
    const Intern =await intern.findById(id)
    if (companyId.toString() === Intern.companyId.toString()) {
        Intern.visible=!Intern.visible 
    }
    await Intern.save()
    res.json({success:true, Intern})
   } catch (error) {
         res.json({success:false, error:error.message})
   }

}
