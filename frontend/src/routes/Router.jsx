import React from 'react'
import Home from "../home/Home"
import Contact from "../home/Contact"
import Login from "../home/Login"
import Services from "../home/Services"
import Singup from "../home/Singup"
import Teacher from '../home/Teacher'
import {Routes , Route} from 'react-router-dom'


const Router = () => {
  return (
    <>
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/services' element={<Services/>} /> 
      <Route path='/singup' element={<Singup/>} />
      <Route path='/teacher' element={<Teacher/>} />
    </Routes>
   </>
  )

}

export default Router