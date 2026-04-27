import React from 'react'
import Wall from '../product/product-images/wall-hangings/wall-hanging (11).png'
import IntroText from '../product/IntroText'

function AboutIntro() {
  return (
    <div className='h-screen flex flex-col items-center relative  overflow-hidden z-10 '>
        <img src={Wall}  className=' h-full w-full absolute object-cover contrast-100 brightness-40 -z-10 ' />
        <IntroText/>
    </div>
  )
}

export default AboutIntro