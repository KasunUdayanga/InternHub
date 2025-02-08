import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Recruterlog = () => {
  const navigate = useNavigate();
  
  // State Management
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isTextDateSubmitted, setIsTextDateSubmitted] = useState(false);

  const { setShreclogin, backendUrl, setCompanyToken, setCompanyData } = useContext(AppContext);

  // Image Upload Handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Form Submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (isSignup && !isTextDateSubmitted) {
      return setIsTextDateSubmitted(true);
    }

    try {
      if (!isSignup) {
        // Login Request
        const { data } = await axios.post(`${backendUrl}/api/company/login`, { email, password });

        if (data.success) {
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem('companyToken', data.token);
          setShreclogin(false);
          navigate('/dashboard');
        } else {
          toast.error(data.message);
        }
      } else {
        // Signup Request
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        if (image) formData.append("image", image);

        const { data } = await axios.post(`${backendUrl}/api/company/register`, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });

        if (data.success) {
          setCompanyData(data.company);
          setCompanyToken(data.token);
          localStorage.setItem('companyToken', data.token);
          setShreclogin(false);
          navigate('/dashboard');
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message || "An unexpected error occurred");
    }
  };

  // Prevent Page Scrolling when Modal is Open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className='absolute top-0 left-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
      <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500 w-96'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{isSignup ? 'Sign Up' : 'Login'}</h1>
        <p className='text-sm text-center mt-2'>Welcome back! Please {isSignup ? 'sign up' : 'log in'} to continue...</p>

        {isSignup && isTextDateSubmitted ? (
          <div className='flex flex-col items-center gap-4 my-10'>
            <label htmlFor="image" className='cursor-pointer'>
              <img 
                className='w-16 h-16 rounded-full object-cover' 
                src={imagePreview || assets.upload_area} 
                alt="Company Logo"
              />
              <input onChange={handleImageChange} type="file" id='image' hidden />
            </label>
            <p className='text-sm'>Upload Company Logo</p>
          </div>
        ) : (
          <>
            {isSignup && (
              <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={assets.person_icon} alt="Person Icon" />
                <input 
                  className='outline-none text-sm w-full' 
                  type='text' 
                  placeholder='Company Name' 
                  required 
                  onChange={e => setName(e.target.value)} 
                  value={name} 
                />
              </div>
            )}

            <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
              <img src={assets.email_icon} alt="Email Icon" />
              <input 
                className='outline-none text-sm w-full' 
                type="email" 
                placeholder='Email' 
                required 
                onChange={e => setEmail(e.target.value)} 
                value={email} 
              />
            </div>

            <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
              <img src={assets.lock_icon} alt="Lock Icon" />
              <input 
                className='outline-none text-sm w-full' 
                type="password" 
                placeholder='Password' 
                required 
                onChange={e => setPassword(e.target.value)} 
                value={password} 
              />
            </div>
          </>
        )}

        {!isSignup && (
          <p className='text-sm text-gray-950 my-4 cursor-pointer text-green-800' onClick={() => toast.info("Forgot password feature coming soon!")}>
            Forgot password?
          </p>
        )}

        <button className='bg-green-500 hover:bg-green-700 text-white py-2 w-full rounded-full mt-4'>
          {isSignup ? (isTextDateSubmitted ? 'Create Profile' : 'Next') : 'Login'}
        </button>

        <p className='mt-5 text-center'>
          {isSignup ? (
            <>Already have an account? <span className='text-gray-800 cursor-pointer text-green-800' onClick={() => setIsSignup(false)}>Login</span></>
          ) : (
            <>Don't have an account? <span className='text-gray-800 cursor-pointer text-green-800' onClick={() => setIsSignup(true)}>Sign Up</span></>
          )}
        </p>

        <img onClick={() => setShreclogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="Close" />
      </form>
    </div>
  );
};

export default Recruterlog;
