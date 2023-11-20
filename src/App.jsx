import React from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import HireMe from './Pages/HireMe'
import Projects from './Pages/About'


const App = () => {
  return (
    <>
      <div className="bg-slate-950 min-h-screen font-poppins">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/hireme' element={<HireMe/>}></Route>\
          <Route path='/home' element={<Main/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App