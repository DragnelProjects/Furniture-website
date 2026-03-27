import React from 'react'

function Services(props) {
  return (
    <div className='w-full flex items-center justify-center gap-8 '>
        {props.services.map((elem, idx) => (
            <div key={idx} className='h-55 w-50 bg-[#d4e9da] flex flex-col items-center justify-center rounded duration-300 ease-in-out hover:scale-110 hover:bg-[#bbecca] px-4 gap-4 '>
                <h2 className='text-[#4e5452]'>{elem.logo}</h2>
                <div className='flex flex-col items-center justify-center '>
                  <h2 className='text-[20px] font-semibold text-[#2b2b48] '>{elem.service}</h2>
                  <h5 className='text-[12px] text-gray-500  '>{elem.discrip}</h5>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Services