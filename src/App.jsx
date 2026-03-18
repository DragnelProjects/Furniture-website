import React from 'react'
import Home from './home/Home'
import { Routes, Route } from 'react-router-dom'
import About from './about/About'
import Product from './product/Product'
import Contact from './contact-us/Contact'
import Navbar from './home/section-one/Navbar'

function App() {
  return (
    <div className='h-full relative w-screen flex flex-col  '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App