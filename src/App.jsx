import React from 'react'
import './App.css'
import {Toaster } from 'react-hot-toast'

import { BrowserRouter , Routes  , Route } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Header from './Header'
import Home from './Home'
function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
         <Route path='/' element={<Home />} /> 
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Toaster position='top-center' reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App
