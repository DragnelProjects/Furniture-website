import React from 'react'
import IntroPic from '../about-images/about-one.png'
import IntroTwo from '../about-images/about-two.png'
import IntroThree from '../about-images/about-three.png'
import IntroFour from '../about-images/about-four.png'

function RightContent() {
  return (
    <div className=' w-[50%] relative just_col items-center '>
      <img src={IntroPic} className='h-[40%] w-[40%] absolute object-cover rounded translate-x-15 translate-y-12 z-10 ' />
      <img src={IntroTwo} className='h-[30%] w-[30%] absolute object-cover rounded-xl translate-x-20 -translate-y-26 ' />
      <img src={IntroThree} className='h-[50%] w-[40%] absolute object-cover rounded-xl -translate-x-35 -translate-y-20 ' />
      <img src={IntroFour} className='h-[40%] w-[40%] absolute  object-cover rounded-xl -translate-x-55 translate-y-22 ' />
    </div>
  )
}

export default RightContent