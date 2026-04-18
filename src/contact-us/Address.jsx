import React from 'react'

function Address() {
  return (
    <div className='h-[90%] w-[25vw] flex flex-col gap-4 border '>
      <h2 className='text-[1.4rem] tracking-wider font-medium'>FurniNest</h2>
      <div>
        <h2 className='text-[0.9rem] text-[#4e4b4b] font-semibold '>Address</h2>
        <ul>
          <li>Unit 24 Suite 3-The Coda centre</li>
          <li>189 Munster Road</li>
          <li>London</li>
          <li>SW6 6AW</li>
        </ul>
      </div>
      <div>
          <h2 className='text-[0.9rem] text-[#4e4b4b] font-semibold '>Email us</h2>
          <h4><span className='text-[0.8rem] text-[#7b7b7b] font-medium '>Email:</span> hello@furninest.in</h4>
          <h2 className='text-[0.9rem] text-[#4e4b4b] font-semibold '>Call us</h2>
          <h4><span className='text-[0.8rem] text-[#7b7b7b] font-medium '>Call:</span> +44(0)64396139649</h4>
          <h2>Monday - Friday: 9:00 AM to 6:00pm </h2>
      </div>
      <div>
        face
      </div>
    </div>
  )
}

export default Address