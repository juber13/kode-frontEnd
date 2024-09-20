import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link , useNavigate } from "react-router-dom";

const Login = () => {

  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post("https://kode-backend.onrender.com/api/login",userInfo);
      console.log(res.data)
      localStorage.setItem('token' , res.data.token);
      toast.success(res.data.message);
      setLoading(false);  
      setUserInfo({ email: "", password: "" });
      navigate("/");
    } catch (err) {
      console.log(err);
      // toast.error(err.response);
      const errorMessage = err.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='right border shadow-md flex flex-col gap-6 p-8 rounded-md text-xs max-w-sm m-auto mt-10'>
      <div className=''>
        <h2 className='text-2xl font-bold'>Login</h2>
      </div>
      <div className=''>
        <input
          type='text'
          className='rounded-md outline-none p-2 border text-sm w-full'
          placeholder='Email'
          onChange={handleChange}
          name="email"
        />
      </div>

      <div className='grid grid-cols-1'>
        <input
          type='password'
          className='rounded-md outline-none p-2 border text-sm'
          placeholder='Password'
          onChange={handleChange}
          name="password"
        />
      </div>
      <div className='grid grid-cols-1 gap-3'>
        <Link
          to='/forgot-password'
          className='font-bold text-blue-400 underline'
        >
          Forgot Password
        </Link>
        <Link to='/signup' className='font-bold text-blue-400 underline'>
          New user
        </Link>
        <button
          className='bg-yellow-500 p-2 rounded-md text-white font-semibold shadow-lg'
          onClick={handleLogin}
        >
          {loading ? "Finding..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
