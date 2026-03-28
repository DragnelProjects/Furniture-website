import React from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

function Footer() {
  return (
    <div className='min-h-screen flex flex-col border'>
        <FooterTop/>
        <FooterBottom/>
    </div>
  )
}

export default Footer