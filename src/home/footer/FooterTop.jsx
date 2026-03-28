import React from 'react'
import FurniNest from './FurniNest'
import Shop from './Shop'
import Customer from './Customer'
import FooterAbout from './FooterAbout'

function FooterTop() {
  return (
    <div className='h-[80%] flex items-center justify-center gap-6 border-b border-b-[#373535]'>
        <FurniNest/>
        <Shop/>
        <Customer/>
        <FooterAbout/>
    </div>
  )
}

export default FooterTop