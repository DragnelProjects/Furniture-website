import React from 'react'
import sofa from '../images/big-sofa.png'
import Navbar from './Navbar'

function Section1() {
  return (
    <div className='h-screen relative  overflow-hidden '>
      <img src={sofa} className=' h-full w-full absolute object-center contrast-100 brightness-60 -z-10 ' />
      <Navbar />
    </div>
  )
}

export default Section1