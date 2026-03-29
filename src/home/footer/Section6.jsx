import React from 'react'
import Footer from './Footer'
import FooterBg from '../images/bg-footer.png'

function Section6() {
  return (
    <div className='min-h-screen flex flex-col bg-[#F3F4E5] '>
        <div className='h-100  flex flex-col items-center justify-center'>
            <div className='h-[80%] w-[80%] relative  flex flex-col items-center justify-around  rounded-xl gap-2 overflow-hidden z-20 py-15 '>
                <img src={FooterBg} className='h-full w-full absolute object-cover brightness-45 contrast-105 -z-5 ' />
                <h2 className='w-[60%] text-3xl capitalize text-center font-semibold text-[#f5f2f2] '>Build your home with a comfortable Room by using our interior</h2>
                <p className='text-gray-300 text-[14px] w-[60%] font-[450] text-center '>Trasform your space inot a sanctuary of comfort, style,and natural harmony.Design that speaks softly but leaves a lasting impression</p>
                <button className='bg-gray-300 px-4 py-2 rounded-2xl text-xs font-medium '>Shop Now</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Section6