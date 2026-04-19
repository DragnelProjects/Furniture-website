import React from 'react'


function Address() {

  return (
    <div className='h-[90%] w-[35vw] flex flex-col gap-4 bg-[#91919126] pl-15 pt-4 '>
      <h2 className='text-[1.4rem] tracking-wider font-medium'>FurniNest</h2>
      <div>
        <h2 className='text-[0.9rem] text-[#2a2828] font-semibold '>Address</h2>
        <ul>
          <li>Unit 24 Suite 3-The Coda centre</li>
          <li>189 Munster Road</li>
          <li>London</li>
          <li>SW6 6AW</li>
        </ul>
      </div>
      <div>
          <h2 className='text-[0.9rem] text-[#2a2828]  font-semibold '>Email us</h2>
          <h4 className='text-[0.9rem] text-[#2a2828] font-medium '><span className='text-[0.8rem] text-[#505759]  font-medium '>Email:</span> hello@furninest.in</h4>
          <h2 className='text-[0.9rem] text-[#2a2828]  font-semibold '>Call us</h2>
          <h4 className='text-[0.9rem] text-[#2a2828] font-medium '><span className='text-[0.8rem] text-[#505759]  font-medium '>Call:</span> +44(0)64396139649</h4>
          <h2 className='text-[0.9rem] text-[#2d3031] font-medium italic '>Monday - Friday: 9:00 AM to 6:00pm </h2>
      </div>
      <div>
        face
      </div>
    </div>
  )
}

export default Address