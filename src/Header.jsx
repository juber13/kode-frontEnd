import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

import {useNavigate} from 'react-router-dom'

const Header = () => {
      const navigate = useNavigate();
      const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token')); 

    const handleLogout = async () => {
      try {
        // Call the backend logout API
        const response = await axios.post(
          "https://kode-backend.onrender.com/api/logout"
        );

        localStorage.removeItem("token"); 
        sessionStorage.removeItem("user"); 

        toast.success(response.data.message);
        // Redirect to login page
        navigate("/login"); 
      } catch (error) {
        console.error("Logout failed:", error);
        toast.error("Logout failed, please try again.");
      }
    };

  return (
    <div className='flex justify-between items-center p-4 w-full bg-gray-100'> 
        <div className='bg-gray-100'>kode</div>
        {isLoggedIn ? (
        <div className='right-info border p-1 font-bold' onClick={handleLogout}>Logout</div>
        ) : (
        <div className='right-info cursor-pointer border p-1 font-bold' onClick={() => navigate("/login")}>Login</div>
        )}
    </div>
  )
}

export default Header