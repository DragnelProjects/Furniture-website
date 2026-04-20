import React, { useRef, useState } from 'react'
import ContactForm from './ContactForm'
import Address from './Address'
import Loader from './Loader'

function FormMain() {
  const mainDisplay = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  
  const handleFormSubmit = async () => {
    setIsLoading(true);
    // Simulate API call or form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowMessage(true);
    // Auto-hide message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div ref={mainDisplay} className='h-[86vh] flex items-center justify-center border relative'>
      {isLoading && (
        <div className='fixed inset-0 bg-[#16151546] backdrop-blur-[5px] bg-opacity-50 flex items-center justify-center z-50'>
          <Loader />
        </div>
      )}
      {showMessage && (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-6 rounded-lg shadow-lg z-50'>
          <p className='text-lg font-semibold text-green-600'>Your message is sent!</p>
        </div>
      )}
      <ContactForm onSubmit={handleFormSubmit} />
      <Address/>
    </div>
  )
}

export default FormMain