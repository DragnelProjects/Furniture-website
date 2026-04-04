import React from 'react'
import Section1 from '../section-one/Section1'
import MainDisplay from './MainDisplay'
import ProductText from './ProductText'
import IntroSection from './IntroSection'

function Product() {
  return (
    <div className='h-full w-full flex flex-col bg-[#ffffe8] scroll-smooth '>
      <IntroSection/>
      <ProductText/>
      <MainDisplay/>
    </div>
  )
}

export default Product