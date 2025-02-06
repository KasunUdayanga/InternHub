import Company from "../Models/Company.js";
import bcrypt from "bcrypt";
import {v2 as cloudinary} from 'cloudinary';
import generateToken from "../utils/generateToken.js";





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
    
}
export const postIntern = async (req, res) => {
    
}
export const getCompanyInternApplicants = async (req, res) => {
    
}
export const getCompanyPostedIntern = async (req, res) => {
    
}

export const ChangeInternApplicationStatus = async (req, res) => {
    
}
export const changeVisibility = async (req, res) => {
    
}
