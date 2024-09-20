import React, { useState } from 'react'

const Home = () => {
    const [userName , setUserName] = useState(JSON.parse(localStorage.getItem('userInfo')));
  return (
    <div className='w-full h-screen bg-red-300 flex items-center justify-center text-3xl'>Welcome {userName?.email.slice(0 , 5)}</div>
  )
}

export default Home