import mongoose from "mongoose";

const InternApplicationSchema = new mongoose.Schema({
    userId:{type: String, ref:"User", required:true},
    companyId:{type: mongoose.Schema.Types.ObjectId, ref:"Company", required:true},
    internId:{type: mongoose.Schema.Types.ObjectId, ref:"Intern", required:true},
    status:{type: String, default:"Pending"},
    date:{type: Number, required:true},
})

const InternApplication = mongoose.model("InternApplication", InternApplicationSchema);

export default InternApplication;