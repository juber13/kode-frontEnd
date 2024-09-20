import React, { useState } from 'react'
import './App.css'
import {Toaster } from 'react-hot-toast'

import { BrowserRouter , Routes  , Route } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Header from './Header'
import Home from './Home'
function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('userInfo')); 



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {isLoggedIn ? (
          <Route path='/' element={<Home />} />
        ) : (
          <Route path='/login' element={<Login />} />
        )}
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App
