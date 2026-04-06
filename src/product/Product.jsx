import React from 'react'
import IntroSection from './IntroSection'
import Categories from './product-categories/Categories'
import { Outlet } from 'react-router-dom'

function Product() {



  return (
    <div className='h-full w-full flex flex-col bg-[#ffffe8]  scroll-smooth '>
      <IntroSection/>
      <Categories />
    </div>
  )
}

export default Product