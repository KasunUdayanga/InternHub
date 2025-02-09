# Intern Hub

Intern Hub is a web-based platform designed to connect students with internship opportunities, making the process easier for both applicants and recruiters.

## Features
- 🔍 **Internship Listings**: Browse and apply for various internships.
- 👤 **User Authentication**: Secure login and registration for students and recruiters.
- 📝 **Profile Management**: Students can create and update their profiles.
- 📄 **Resume Upload**: Upload and manage resumes for applications.
- 📩 **Application Tracking**: Monitor application status in real-time.


## Technologies Used
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT,Clerk
- **Hosting**: Vercel


Intern Hub is a web-based platform designed to connect students with internship opportunities, making the process easier for both applicants and recruiters.

🚀 **Live Demo**: [Intern Hub](https://intern-hub-client.vercel.app/)  
📂 **GitHub Repository**: [Intern Hub on GitHub](https://github.com/KasunUdayanga/InternHub) 

Clone the repository:
   ```sh
   git clone https://github.com/your-username/intern-hub.git
   cd intern-hub
 ```
 **Install dependencies for both frontend and backend:**
   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

 **Set up environment variables:**
   Create a `.env` file in the root of the backend directory and add the following:
   ```
      JWT_SECRET="your_jwt_secret"
      MONGODB_URL="mongodb+srv://<username>:<password>@<cluster_url>/<dbname>"
      CLOUDINARY_NAME="your_cloudinary_name"
      CLOUDINARY_API_KEY="your_cloudinary_api_key"
      CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
      CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
      CLERK_SECRET_KEY="your_clerk_secret_key"
      CLERK_WEBHOOK_SECRET="your_clerk_webhook_secret"

   ```

 Create a `.env` file in the root of the frontend directory and add the following:
   ```
      VITE_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
      VITE_BACKEND_URL="http://localhost:5000"
   ```

 **Start the development servers:**
   - **Backend:**
     ```sh
     cd backend
     npm install
     npm run server
     ```
   - **Frontend:**
     ```sh
     cd frontend
     npm install
     npm run dev
     ```

