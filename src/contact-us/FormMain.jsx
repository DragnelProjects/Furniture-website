import React from 'react'
import ContactForm from './ContactForm'
import Address from './Address'

function FormMain() {
  return (
    <div className='h-[86vh] flex items-center justify-center  border '>
        <ContactForm/>
        <Address/>
    </div>
  )
}

export default FormMain