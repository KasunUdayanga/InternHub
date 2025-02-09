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
   JWT_SECRET="random#secret"
   STRIPE_SECRET_KEY="your key"
   ```

 **Start the development servers:**
   - **Backend:**
     ```sh
     cd backend
     npm run server
     ```
   - **Frontend:**
     ```sh
     cd frontend
     npm run dev
     ```
   - **Admin Panel:**
     ```sh
     cd admin
     npm run dev
     ```
