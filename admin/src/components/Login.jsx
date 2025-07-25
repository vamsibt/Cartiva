import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify'
const Login = ({setToken}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmitHandler = async(e) =>{
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + "/api/user/admin", {email, password});
            if(response.data.success){
                setToken(response.data.token)
            } else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    
  return (
    <div className='flex items-center justify-center w-full min-h-screen'>
      <div className='max-w-md px-8 py-6 bg-white rounded-lg shadow-md'>
        <h1 className='mb-4 text-2xl font-bold'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
            <div className='mb-3 min-w-72'>
                <p className='mb-2 text-sm font-medium text-gray-700'>Email Address</p>
                <input onChange={(e) =>setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-300 rounded-md' type="email" placeholder='your@email.com' required />
            </div>

            <div className='mb-3 min-w-72'>
                <p className='mb-2 text-sm font-medium text-gray-700'>Password</p>
                <input onChange={(e) =>setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-300 rounded-md' type="password" placeholder='Enter your password' required />
            </div>

            <button className='w-full px-4 py-2 mt-2 text-white bg-black rounded-md' type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
