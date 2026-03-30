import React from 'react'
import { Link } from 'react-router-dom'
import {RiSearch2Line, RiHeartLine, RiLuggageCartLine } from '@remixicon/react'

function Navbar() {
  return (
    <div className=' flex w-full absolute top-0 items-center justify-between py-1 px-12 bg-[#0000000c] z-20 '>
      <h2 className='text-3xl text-[#cccccc] font-light '>FurniNest</h2>
      <div className=' flex text-[14px] text-[#e8e8e8] font-[250]  gap-12'>
       <Link to='/' >Home</Link>
       <Link to='/about' className='active:scale-95' >About</Link>
       <Link to='/product' >Product</Link>
       <Link to='/contact' >Contact</Link>
      </div>
      <div className=' flex items-center gap-5'>
        <RiSearch2Line size={16} color='#d1d1d1' />
        <RiHeartLine size={16} color='#d1d1d1' />
        <RiLuggageCartLine size={16} color='#d1d1d1' />
        <h5 className='text-[#d1d1d1] text-[14px] border-l border-l-[#858585] pl-2 '>Login</h5>
      </div>
    </div>
  )
}

export default Navbar