import React from 'react'
import Flower from '../images/flower-pot.jpeg'

function ContainerBottom() {
  return (
    <div className='h-[60vh] flex items-center justify-around  '>
        <div className=' h-60 w-80 rounded-2xl overflow-hidden bg_second '>
            <img src={Flower} className='h-full relative w-full object-bottom object-cover' />
        </div>
        <div className='h-60 w-[50%] flex flex-col items-center justify-between gap-2 py-6 px-6 bg-[#F1F1F1]  rounded-2xl bg_items border-[#dcdcdc]  '>
            <h2 className='text-[2.5vw] text-center font-semibold capitalize '>Elevate every corner</h2>
            <h5 className='text-[14px] text-justify text-[#373a44] '>
              Discover handcrafted vases, delicated florals, and timeless decore pieces designed to bring balance, texture, and quiet elegance into your space. Every details  is chosen to turn everyday corners into refined visual stories.
            </h5>
            <div className='flex gap-4'>
              <button className='bg-[#0d0d36] text-[white] text-[12px] font-semibold py-2 px-4 rounded-2xl '>Shop Decor</button>
              <button className=' text-[12px] font-semibold py-2 px-4 rounded-2xl border border-[#acacac]'>Explore More</button>
            </div>
             
        </div>
    </div>
  )
}

export default ContainerBottom