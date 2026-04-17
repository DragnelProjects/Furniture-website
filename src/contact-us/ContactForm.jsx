import React from 'react'

function ContactForm() {
  return (
    <div className='bg-[white] min-h-[90%] w-[35vw] py-5 px-5 '>
        <h2>Contact Form</h2>
        <h5>Fill this out so we can learn more about you and your needs.</h5>
        <form action="#" className='w-full h-[26vw] flex flex-col border'>
            <input type="text" id='userName' />
            <label htmlFor="userName">Name and Suranme</label>
            <input type="text" id='userEmail' />
            <label htmlFor="userEmail">Email Address</label>
            <input type="text" id='userPhone' />
            <label htmlFor="userPhone">Phone Number</label>
            <textarea  id="userMessage" className='border'>Write your message here</textarea>
        </form>
    </div>
  )
}

export default ContactForm