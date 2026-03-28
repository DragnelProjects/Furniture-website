import React from 'react'
import {RiSofaFill, RiFacebookFill, RiInstagramLine,  RiPinterestLine, RiTwitterFill  } from '@remixicon/react'

function FurniNest() {
  return (
    <div className='h-[80%] w-55 flex flex-col  border-r border-r-[#393737] text-white px-2 gap-3 '>
        <div className=' flex border-b  border-b-[#454343] py-1  gap-2 '>
            <RiSofaFill size={36} color='#c7b69e' />
            <h2 className='text-[#e3d7d7] text-xl font-medium self-center '>FurniNest</h2>
        </div>
        <p className='text-[10px] text-gray-500 font-medium '>Discover comfort and style with our curated slection of modern furniture for your home.</p>
        <div className='flex  gap-2 '>
            <div className='bg-[#201f1f] h-6 w-6 flex items-center justify-center rounded-full'>
                <RiFacebookFill size={16} className='text-[#c3c3c3]' />
            </div>
            <div className='bg-[#201f1f] h-6 w-6 flex items-center justify-center rounded-full'>
                <RiInstagramLine size={16} className='text-[#c3c3c3]' />
            </div>
            <div className='bg-[#201f1f] h-6 w-6 flex items-center justify-center rounded-full'>
                < RiPinterestLine size={16} className='text-[#c3c3c3]'/>
            </div>
            <div className='bg-[#201f1f] h-6 w-6 flex items-center justify-center rounded-full'>
                <RiTwitterFill size={16} className='text-[#c3c3c3]'/>
            </div>   
        </div>
    </div>
  )
}

export default FurniNest