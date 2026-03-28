import React from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

function Footer() {
  return (
    <div className='h-70 flex flex-col bg-[#0b0b0b]'>
        <FooterTop/>
        <FooterBottom/>
    </div>
  )
}

export default Footer