import React from 'react'
import IntroSection from './IntroSection'
import Categories from './product-categories/Categories'
import SofaWhite from './product-images/sofa-images/sofa-1 (6).jpeg'
import TableBrown from './product-images/table-images/table (4).jpeg'
import Decorate from './product-images/decorative-images/decorative-items (12).png'
import LargeGraySofa from './product-images/large-sofa-images/sofa-1 (2).jpeg'
import ChairBrown from './product-images/chair-images/chair (9).jpeg'

function Product() {

  const categories = [
  { name: "Sofa", image: SofaWhite },
  { name: "Tables", image: TableBrown },
  { name: "Large Sofa", image: LargeGraySofa },
  { name: "Chair", image: ChairBrown },
  { name: "Decorative", image: Decorate },
  { name: "Chair", image: ChairBrown },
  { name: "Decorative", image: Decorate },
  { name: "Tables", image: TableBrown },
  { name: "Large Sofa", image: LargeGraySofa },
  { name: "Chair", image: ChairBrown },
  { name: "Decorative", image: Decorate },
  { name: "Chair", image: ChairBrown },
  { name: "Decorative", image: Decorate },
];

  return (
    <div className='h-full w-full flex flex-col bg-[#ffffe8]  scroll-smooth '>
      <IntroSection/>
      <Categories categories={categories}/>
    </div>
  )
}

export default Product