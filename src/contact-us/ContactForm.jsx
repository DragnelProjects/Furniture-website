import React from 'react'

function ContactForm() {
  return (
    <div className='bg-[white] min-h-[90%] w-[35vw] py-5 px-5 '>
        <h2>Contact Form</h2>
        <h5>Fill this out so we can learn more about you and your needs.</h5>
        <form action="#" className='w-full h-[26vw] flex flex-col border'>
            <div className=' h-[3.5vw] w-full relative '>
              <input type="text" 
                id='userName'
                className='h-full w-full outline-0 border-b-2 border-gray-300 ' 
              />
              <span className='absolute left-2 top-1/5 '>Name and Surname</span>
            </div>
            <div className=' h-[3.5vw] w-full relative '>
              <input type="text" 
                id='userEmail' 
                className='h-full w-full outline-0 border-b-2 border-gray-300 '
                />
            <span className='absolute left-2 top-1/5 ' >Email Address</span>
            </div>
            <div className=' h-[3.5vw] w-full relative '>
              <input type="text" 
                id='userPhone' 
                className='h-full w-full outline-0 border-b-2 border-gray-300 '
                />
              <span className='absolute left-2 top-1/5 ' >Phone Number</span>
            </div>
            <textarea  id="userMessage" className='border'>Write your message here</textarea>
        </form>
    </div>
  )
}

export default ContactForm