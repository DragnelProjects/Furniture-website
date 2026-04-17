import React from 'react'
import Door from './contact-images/gate.png'
import YellowChair from './contact-images/orange-chair.png'
import Leaf from './contact-images/0b05bf27659330497d19485f01c73f5e.png'
import Leaf2 from './contact-images/1716e67d75c823b9632df62f3ce0a331.png'
import Leaf3 from './contact-images/8e1218156a071e26cd7549e613530a99.png'

function ContactIntro() {
  return (
    <div className='h-[40vw] w-full relative just_col z-10 '>
        <div className='h-11 w-full absolute top-0 bg-[#ec3c0bde]'></div>
        <img src={Leaf} className='h-[46vw] absolute rotate-85 -top-4 -left-1 -z-2 ' />
        <h2 className='text-6xl text-center tracking-wide w-130  '>Our do<span className='text-[#f8f8f8] '>ors</span> <span className='text-[#f8f8f8] '>are</span> always <span className='text-[#f8f8f8] '>open!</span></h2>
        <div className='h-[24vw] w-[42vw] absolute top-[28%] left-[44%] bg-[white] -z-5 '>
            <img src={Door} className='h-[26vw]   absolute bottom-12 left-18 object-cover -z-4' />
            <img src={YellowChair} className='h-[22vw] absolute left-55 -bottom-18 z-15 ' />
        </div>
    </div>
  )
}

export default ContactIntro