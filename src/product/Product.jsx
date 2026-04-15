import React from 'react'
import IntroSection from './IntroSection'
import Categories from './product-categories/Categories'
import NewArrival from './new-arrivals/NewArrival'
import FeaturedMain from './featured products/FeaturedMain'

function Product() {

  return (
    <div className='h-full w-full flex flex-col bg-[#ffffe8]  scroll-smooth '>
      <IntroSection/>
      <Categories />
      <NewArrival />
      <FeaturedMain />
    </div>
  )
}

export default Product