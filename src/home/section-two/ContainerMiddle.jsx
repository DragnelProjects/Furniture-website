import React from 'react'
import Small from '../images/sigel-sofa-chair.png'

function ContainerMiddle() {
  return (
    <div className='h-[60vh] flex items-center justify-around '>
        <div className='bg-[white] h-[90%] w-[45%] flex flex-col items-center justify-center px-6 gap-4 rounded-xl bg_items '>
            <h2 className='text-[18px] text-center font-semibold '>Crafted for Comfort, Modern Furniture for Modern Living</h2>
            <h5 className='text-[14px] text-justify text-[#373a44] '>Discover thoughtfully crafted furniture designed to bring comfort, balance, and timeless elegance into your home. From statement pieces to everyday essentials, each design blends quality materials with modern aesthetics to create spaces that feel warm, inviting, and uniquely yours.</h5>
            <div className='flex  gap-4'>
                <button className='bg-[#0d0d36] text-[white] text-[12px] font-semibold py-2 px-4 rounded-2xl '>Shop Chair</button>
                <button className=' text-[12px] font-semibold py-2 px-4 rounded-2xl border border-[#acacac]'>Explore More</button>
            </div>
        </div>
        <div className='h-[90%] w-[45%] flex items-center justify-center bg-[#7981f7] rounded-xl overflow-hidden '>
            <img src={Small} className='h-[80%] w-[60%] object-center ' />
        </div>
    </div>
  )
}

export default ContainerMiddle