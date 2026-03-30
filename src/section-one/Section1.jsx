import React from 'react'
import sofa from '../home/images/big-sofa.png'
import OneMiddle from './OneMiddle'

function Section1() {
  return (
    <div className='h-screen flex flex-col items-center relative  overflow-hidden z-10 '>
      <img src={sofa} className=' h-full w-full absolute object-center contrast-100 brightness-60 -z-10 ' />
      
      <OneMiddle />
    </div>
  )
}

export default Section1