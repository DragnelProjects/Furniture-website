import React from 'react'
import IntroText from './IntroText'
import Sofa from './product-images/large-sofa-images/sofa.jpeg'

function IntroSection() {
  return (
    <div className='h-screen flex flex-col items-center relative  overflow-hidden z-10 '>
        <img src={Sofa}  className=' h-full w-full absolute object-cover contrast-100 brightness-40 -z-10 ' />
        <IntroText/>
    </div>
  )
}

export default IntroSection