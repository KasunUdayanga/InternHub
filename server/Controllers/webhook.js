import { Webhook } from "svix";
import User from "../models/User.js";


export const clerkWebhook =async(req,res)=>{
    try {
        const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        await whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"]
        });

        const {data,type}=req.body
        switch (key) {
            case 'user.created':{
                const UserData={
                    _id:data.id,
                    email:data.email_address[0].email_address,
                    name:Date.first_name+" "+data.last_name,
                    image:data.image_url,
                    resume:''
                };
                await User.create(UserData);
                res.json({});
                break;
            }
            case 'user.updated':{
                const UserData={
                    email:data.email_address[0].email_address,
                    name:Date.first_name+" "+data.last_name,
                    image:data.image_url,
                };  
                await User.findOneAndUpdate(Date.id,UserData);
                res.json({});
                break;     
            }
            case 'user.deleted':{
                    await User.findByIdAndDelete(Date.id);
                    res.json({});
                    break;
            }

            default:
                break;
                
            
        }



    } catch (error) {
        console.log(error);
        res.status(500).json({message:"webhook Error"});
        
    }
}

