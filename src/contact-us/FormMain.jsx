import React, { useRef } from 'react'
import ContactForm from './ContactForm'
import Address from './Address'

function FormMain() {
  const mainDisplay = useRef();
  
 

  return (
    <div ref={mainDisplay}  className='h-[86vh] flex items-center justify-center  border '>
        <ContactForm  />
        <Address/>
    </div>
  )
}

export default FormMain