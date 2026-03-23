import React from 'react'
import Section1 from './section-one/Section1'
import Section2 from './section-two/Section2'
import Section3 from './section-three/Section3'
import Section4 from './section-four/Section4'

function Home(props) {
  return (
    <div className='h-full w-full flex flex-col scroll-smooth '>
        <Section1 />
        <Section2 />
        <Section3 products={props.products} setCategory={props.setCategory} category={props.category} />
        <Section4 />
    </div>
  )
}

export default Home