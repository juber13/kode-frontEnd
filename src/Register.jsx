import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({email: "", message: ""});

  const [loading , setLoading] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSign = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await axios.post(
        "https://kode-backend.onrender.com/api/send-email",
        userInfo
      );
      localStorage.setItem("token", res.data.token);
      toast.success(res.data.message);
      setUserInfo({ email: "", message: "" });
      navigate("/login");
    } catch (err) {
      console.log(err);
      // toast.error(err.response);
      const errorMessage = err.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className='w-full border shadow-md max-w-sm m-auto mt-10 p-10 rounded-md'>
      <div className='signup-section max-w-6xl m-auto'>
        <div className='left'>
          <div className='heading flex gap-4 flex-col'>
            <h2 className='text-2xl mb-3'>Register</h2>
          </div>

          <form className='flex flex-col gap-3' onSubmit={handleSign}>
            <div className='flex gap-3 flex-col'>
              <div className='flex flex-col flex-1'>
                <input
                  name='email'
                  className='border rounded-md p-3 outline-none text-xs'
                  type='text'
                  placeholder='Enter Email'
                  onChange={handleChange}
                />
              </div>

              <div className='flex flex-col flex-1'>
                <input
                  name='password'
                  className='border rounded-md p-3 outline-none text-xs'
                  type='password'
                  placeholder='Enter Password'
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='flex gap-3'>
              <button
                className='p-2 rounded-md text-xs bg-yellow-500 text-white font-semibold'
                type='submit'
              >
                {loading ? "Registering..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
