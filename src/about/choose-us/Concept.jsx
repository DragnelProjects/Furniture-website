import React from 'react'
import {RiGitCommitFill, RiPantoneLine, RiLeafLine,  RiHammerLine, RiMapPinUserLine   } from '@remixicon/react'
import Craft from '../about-images/about-four.png'

function Concept() {
  return (
    <div className='w-full flex h-[25vw] justify-around px-25 '>
      <div className='flex gap-2'>
        <div className=' just_col pb-4 w-20 gap-1 '>
        <div className='px-2 py-2 rounded-full bg-[#50ae87] text-[#3a4743] '><RiPantoneLine /></div>
        <RiGitCommitFill  className=' rotate-90 text-[#04241aa3] ' />
        <div className='px-2 py-2 rounded-full bg-[#50ae87] text-[#3a4743] '><RiLeafLine /></div>
        <RiGitCommitFill className=' rotate-90 text-[#04241aa3] ' />
        <div className='px-2 py-2 rounded-full bg-[#50ae87] text-[#3a4743] '>< RiHammerLine /></div>
        <RiGitCommitFill className=' rotate-90 text-[#04241aa3]' />
        <div className='px-2 py-2 rounded-full bg-[#50ae87] text-[#3a4743] '><RiMapPinUserLine  /></div>
        
         </div>
         <div className='w-[28vw] flex_col pt-4 gap-7 '>
          <div>
            <h4 className='font-semibold text-[#1a1a1a] tracking-wide '>1.Inspired Design</h4>
            <p className='discription tracking-wider '>We start with ideas that blend beauty and function.</p>
          </div>
          <div>
            <h4 className='font-semibold text-[#1a1a1a] tracking-wide '>2.Quality Materials</h4>
            <p className='discription tracking-wider '>We source durable, sustainable materials.</p>
          </div>
          <div>
            <h4 className='font-semibold text-[#1a1a1a] tracking-wide '>3.Expert Crafting</h4>
            <p className='discription tracking-wider '>Skilled makers bring each pice to life. </p>
          </div>
          <div>
            <h4 className='font-semibold text-[#1a1a1a] tracking-wide '>4.Delivered To Your Home</h4>
            <p className='discription tracking-wider '>Carefully package and shipped with care.</p>
          </div>
         </div>
      </div>
         <div className='w-[40vw] just_col  '>
            <img src={Craft} className='h-[90%] w-[90%] object-cover rounded-2xl ' />
         </div>
    </div>
  )
}

export default Concept