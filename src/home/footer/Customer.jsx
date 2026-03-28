import React from 'react'

function Customer() {
  return (
    <div className='h-[80%] w-60 border-r border-r-[#3e3d3d] '>
        <h2 className='text-[#c7c7c7] text-[14px] font-medium pt-3 pb-2 border-b border-b-[#3f3d3d] '>Customer Service</h2>
        <ul className='text-[12px] text-[gray] font-medium flex flex-col gap-1 py-2 '>
            <li>Shipping Info</li>
            <li>Retunrs & Exchange</li>
            <li>FAQ</li>
            <li>Track Order</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Customer