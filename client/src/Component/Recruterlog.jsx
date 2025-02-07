import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Recruterlog = () => {
  const navigate = useNavigate()

  const [state, setState] = useState('Login')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState()
  const [isTextDateSubmited, setIsTextDateSubmited] = useState(false)

  const { setShreclogin, backendUrl, setCompanyToken, setCompanyData } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    
    if (state === 'Sign Up' && !isTextDateSubmited) {
      return setIsTextDateSubmited(true)
      
    }

    try {
      if (state === 'Login') {
        const { data } = await axios.post(`${backendUrl}/api/company/login`, { email, password })

        if (data.success) {
          setCompanyData(data.company)
          setCompanyToken(data.token)
          localStorage.setItem('companyToken', data.token)
          setShreclogin(false)
          navigate('/dashboard')
        } else {
          toast.error(data.error || "Login failed")
        }
      } else {
        // Handle signup request
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("image", image)
        if (image) formData.append("image", image)

        const { data } = await axios.post(`${backendUrl}/api/company/register`, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })

        if (data.success) {
          setCompanyData(data.company)
          setCompanyToken(data.token)
          localStorage.setItem('companyToken', data.token)
          setShreclogin(false)
          navigate('/dashboard')
        } else {
          toast.error(data.error || "Signup failed")
        }
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error(error.response?.data?.error || "Something went wrong")
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'unset')
  }, [])

  return (
    <div className='absolute top-0 left-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
      <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p className='text-sm text-center mt-2'>Welcome back! Please {state.toLowerCase()} to continue...</p>

        {state === 'Sign Up' && isTextDateSubmited ? (
          <div className='flex items-center gap-4 my-10'>
            <label htmlFor="image">
              <img className='w-16 rounded-full' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
              <input onChange={e => setImage(e.target.files[0])} type="file" id='image' hidden />
            </label>
            <p>Upload Company Logo</p>
          </div>
        ) : (
          <>
            {state === 'Sign Up' && (
              <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={assets.person_icon} alt="" />
                <input className='outline-none text-sm' type='text' placeholder='Company Name' required onChange={e => setName(e.target.value)} value={name} />
              </div>
            )}

            <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
              <img src={assets.email_icon} alt="" />
              <input className='outline-none text-sm' type="email" placeholder='Email' required onChange={e => setEmail(e.target.value)} value={email} />
            </div>

            <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
              <img src={assets.lock_icon} alt="" />
              <input className='outline-none text-sm' type="password" placeholder='Password' required onChange={e => setPassword(e.target.value)} value={password} />
            </div>
          </>
        )}

        {state === 'Login' && (
          <p className='text-sm text-gray-950 my-4 cursor-pointer text-green-800'>Forgot password?</p>
        )}

        <button className='bg-green-500 hover:bg-green-700 text-white py-2 w-full rounded-full'>
          {state === 'Login' ? 'Login' : isTextDateSubmited ? 'Create Profile' : 'Next'}
        </button>

        <p className='mt-5 text-center'>
          {state === 'Login' ? (
            <>Don't have an account? <span className='text-gray-800 cursor-pointer text-green-800' onClick={() => setState("Sign Up")}>Sign Up</span></>
          ) : (
            <>Already have an account? <span className='text-gray-800 cursor-pointer text-green-800' onClick={() => setState("Login")}>Login</span></>
          )}
        </p>

        <img onClick={() => setShreclogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="Close" />
      </form>
    </div>
  )
}

export default Recruterlog
