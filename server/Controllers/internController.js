import intern from "../Models/Intern.js"

export const getIntern= async (req,res)=>{
        try {
            const Intern = await intern.find({visible:true})
            .populate({path:'companyId',select:'-password'})

            res.json({success:true, Intern})
        } catch (error) {
            res.json({success:false, error:error.message})
        }
}


export const getInternById= async (req,res)=>{
    try {
        const {id} = req.params;
        const Intern = await intern.findById(id)
        .populate({path:'companyId',select:'-password'})
        if(!Intern){
            return res.json({success:false, error:"Intern not found"})
        }
        res.json({success:true, Intern})
    } catch (error) {
        res.json({success:false, error:error.message})
    }
} 