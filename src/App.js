import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import User from './components/User/User';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
  <div>

  <BrowserRouter>
  <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users/:userId' element={<User/>}/>
      </Routes>
  </BrowserRouter>
  </div>
  
    
  )
}

export default App





