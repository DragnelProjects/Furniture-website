import React from 'react'
import sofa from '../images/big-sofa.png'
import Navbar from './Navbar'

function Section1() {
  return (
    <div className='h-screen relative  overflow-hidden '>
      <img src={sofa} className=' h-full w-full absolute object-center -z-10 ' />
      <Navbar />
    </div>
  )
}

export default Section1