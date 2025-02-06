import'./config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clerkWebhook } from './Controllers/webhook.js';
import companyRoutes from './routes/companyRoutes.js';
import connectCloudinary from './config/cloudinary.js';


const app = express();

await connectDB();
await connectCloudinary();


app.use(cors());
app.use(express.json());



app.get('/',(req,res)=>res.send("Api working"));
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
app.post('/webhook',clerkWebhook);
app.use('/api/company',companyRoutes);



const PORT = process.env.PORT  || 5000;
Sentry.setupExpressErrorHandler(app);
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));