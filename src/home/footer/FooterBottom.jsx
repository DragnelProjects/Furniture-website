import React from 'react'
import {RiMastercardFill,  RiPaypalFill,  RiVisaFill  } from '@remixicon/react'

function FooterBottom() {
  return (
    <div className='h-[20%] flex justify-between py-2'>
      <p className='text-mist-300 text-[12px] tracking-wider '>&#xA9; 2024 FurniNest.<span className='text-[10px] text-mist-400'>All rights reserved</span></p>
      <div className='flex gap-4'>
        <p className='text-[12px] text-mist-400 font-medium '>Payment Methods</p>
        <div className='flex gap-3'>
          <h4 className='text-gray-300 h-6 w-7 flex items-center justify-center bg-mauve-800 hover:scale-115 duration-300 ease-in-out '><RiMastercardFill size={18}  /></h4>
          <h4 className='text-gray-300 h-6 w-7 flex items-center justify-center bg-mauve-800 hover:scale-115 duration-300 ease-in-out '> < RiPaypalFill size={18}  /></h4>
          <h4 className='text-gray-300 h-6 w-7 flex items-center justify-center bg-mauve-800 hover:scale-115 duration-300 ease-in-out '>< RiVisaFill size={18}  /></h4>
          
        </div>
        <p className='text-[12px] text-mist-300 font-medium '>Terms of Service</p>
      </div>
    </div>
  )
}

export default FooterBottom