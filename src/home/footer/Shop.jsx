import React from 'react'

function Shop() {
  return (
    <div className='h-[80%] w-40 border-r border-r-[#2b2626] px-3 pr-4'>
        <h4 className='text-[#c7c7c7] text-[14px] font-medium pt-3 pb-2 border-b border-b-[#3f3d3d] '>Shop</h4>
        <ul className='text-[12px] text-[gray] flex flex-col gap-1 py-2 '>
            <li>Living Rome</li>
            <li>Bedroom</li>
            <li>Dining</li>
            <li>Office</li>
            <li>Sale</li>
        </ul>
    </div>
  )
}

export default Shop