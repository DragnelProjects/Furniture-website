import React from 'react'

function IntroText() {
  return (
    <div className='w-full h-[80%] flex flex-col items-center justify-center gap-6 mt-4 '>
        <h2 className='text-4xl text-[white] font-semibold w-150 text-center title '>Find The Perfect Furniture To Complete Your Home</h2>
        <div className=' flex flex-col gap-1 text-center  '>
            <p className='text-[#ababab] text-[12px] font-medium '>Discover furniture curated for modern living Shop, explore and design your perfect space</p>
            <p className='text-[#ababab] text-[12px] font-medium '>Designed to feel like home Styled to feel like you</p>
        </div>
        <button className='bg-[white] text-[14px] text-[#06061d] font-medium py-2 px-6 rounded-full tracking-wider active:scale-95 '>Shop Now</button>
    </div>
  )
}

export default IntroText