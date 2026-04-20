import React from 'react'
import Loader from './Loader'

function ContactForm() {



  return (
    <div className='bg-[white] min-h-[90%] w-[35vw] flex flex-col py-2 px-5 gap-2 '>
        <h2 className='font-medium text-[1.3rem] tracking-wider text-[#181a1f] '>Contact Form</h2>
        <h2 className='text-[#c1c1c1] text-[0.8rem] w-60 tracking-wider leading-5 '>Fill this out so we can learn more about you and your needs.</h2>
        <form action="#" className='w-full h-[24vw] flex flex-col items-end gap-6 py-2 '>
            <div className=' h-[3.5vw] w-full relative '>
              <input type="text" 
                id='userName'
                required
                className='h-full w-full outline-0 border-b-[1.5px] border-[#e5e5e5] pl-2 ' 
              />
              <span className='absolute text-[0.9rem] text-[#9d9c9c] left-2 top-1/3 lines '>Name and Surname</span>
            </div>
            <div className=' h-[3.5vw] w-full relative '>
              <input type="text" 
                id='userEmail'
                required 
                className='h-full w-full outline-0 border-b-[1.5px] border-[#e5e5e5] pl-2 '
                />
            <span className='absolute text-[0.9rem] text-[#9d9c9c] left-2 top-1/3 lines ' >Email Address</span>
            </div>
            <div className=' h-[3.5vw] w-full relative '>
              <input type="text" 
                id='userPhone'
                required 
                className='h-full w-full outline-0 border-b-[1.5px] border-[#e5e5e5] pl-2 '
                />
              <span className='absolute text-[0.9rem] text-[#9d9c9c] left-2 top-1/3 lines ' >Phone Number</span>
            </div>
            <div className=' h-[3.5vw] w-full relative '>
              <textarea  id="userMessage" 
              className='outline-0 h-full w-full text-[0.9rem]  border-b-[1.5px] border-[#e5e5e5] resize-none pl-2 '></textarea>
              <span className='absolute text-[0.9rem] text-[#9d9c9c] left-2 top-1/3 lines ' >Write your message here</span>
            </div>
            <input  type="submit" value="SEND MESSAGE"
              className='border border-[#777171] w-[8vw] text-[0.6rem] text-[#4f4f57] font-semibold py-1.5 mt-2 active:scale-95 active:text-[black] '
              
              />
            
        </form>
    </div>
  )
}

export default ContactForm