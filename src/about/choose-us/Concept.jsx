import React from 'react'
import {RiGitCommitFill, RiPantoneLine, RiLeafLine,  RiHammerLine, RiMapPinUserLine   } from '@remixicon/react'
import Craft from '../about-images/about-four.png'

function Concept() {
  return (
    <div className='w-full flex h-[25vw] justify-around border'>
      <div className='flex gap-2'>
        <div className=' just_col w-20 gap-1  border'>
        <div className='px-2 py-2 rounded-full bg-[#3b765d] text-[#343736] '><RiPantoneLine /></div>
        <RiGitCommitFill className=' rotate-90 text-[#6b6e6d] ' />
        <div className='px-2 py-2 rounded-full bg-[#3b765d] text-[#343736] '><RiLeafLine /></div>
        <RiGitCommitFill className=' rotate-90 text-[#6b6e6d] ' />
        <div className='px-2 py-2 rounded-full bg-[#3b765d] text-[#343736] '>< RiHammerLine /></div>
        <RiGitCommitFill className=' rotate-90 text-[#6b6e6d] ' />
        <div className='px-2 py-2 rounded-full bg-[#3b765d] text-[#343736] '><RiMapPinUserLine  /></div>
        <RiGitCommitFill className=' rotate-90 text-[#6b6e6d] ' />
         </div>
         <div className='w-[28vw] flex_col pt-4 gap-6 border'>
          <div>
            <h4 className='font-semibold text-[#1a1a1a] '>1.Inspired Design</h4>
            <p className='discription'>We start with ideas that blend beauty and function.</p>
          </div>
          <div>
            <h4 className='font-semibold text-[#1a1a1a] '>1.Inspired Design</h4>
            <p className='discription'>We start with ideas that blend beauty and function.</p>
          </div>
          <div>
            <h4 className='font-semibold text-[#1a1a1a] '>1.Inspired Design</h4>
            <p className='discription'>We start with ideas that blend beauty and function.</p>
          </div>
          <div>
            <h4 className='font-semibold text-[#1a1a1a] '>1.Inspired Design</h4>
            <p className='discription'>We start with ideas that blend beauty and function.</p>
          </div>
         </div>
      </div>
         <div className='w-[40vw] just_col border '>
            <img src={Craft} className='h-[80%] w-[80%] object-cover rounded-2xl ' />
         </div>
    </div>
  )
}

export default Concept