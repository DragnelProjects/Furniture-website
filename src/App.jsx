import React from 'react'
import Home from './home/Home'
import { Routes, Route } from 'react-router-dom'
import About from './about/About'
import Product from './product/Product'
import Contact from './contact-us/Contact'

function App() {
  return (
    <div className='h-full w-full flex flex-col '>
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