import React from 'react'
import ContactIntro from './ContactIntro'
import FormMain from './FormMain'


function Contact() {

  return (
    <div  className='h-full w-full flex flex-col bg-[#ffffe8] scroll-smooth '>
      <ContactIntro/>
      <FormMain />
    </div>
  )
}

export default Contact