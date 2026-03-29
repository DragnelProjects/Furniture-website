import React from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

function Footer() { 
  return (
    <div className='h-70 flex flex-col bg-[#161617] px-4'>
        <FooterTop/>
        <FooterBottom/>
    </div>
  )
}

export default Footer