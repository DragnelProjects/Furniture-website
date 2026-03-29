import React from 'react'

function FooterAbout() {
  return (
    <div className='h-[80%] w-80 pr-4 '>
        <h2 className='text-[#c7c7c7] text-[14px] font-medium pt-3 pb-2 border-b border-b-[#3f3d3d] '>About Us</h2>
        <p className='text-mist-300 text-[12px] font-medium tracking-wider mt-2 mb-2'>Subscribe to our newsletter</p>
        <div className='h-7 w-90 flex  border-amber-50 '>
          <input type="text" placeholder='Enter your email' className='w-[70%] text-[12px] font-medium pl-3 bg-amber-50 rounded-l outline-0 ' />
          <input type="submit" value="Subscribe" className='w-[30%] bg-[#a05b25] text-[14px] text-mist-200 font-medium rounded-l-[5px] rounded-r -ml-2 ' />
        </div>
    </div>
  )
}

export default FooterAbout