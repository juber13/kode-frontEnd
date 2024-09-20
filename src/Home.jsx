import React from 'react'

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className='w-full h-screen bg-red-300 flex items-center justify-center text-3xl'>Welcome {user}</div>
  )
}

export default Home