import React from 'react'
import Section2 from './section-two/Section2'
import Section3 from './section-three/Section3'
import Section4 from './section-four/Section4'
import Section5 from './section-five/Section5'
import Section1 from '../section-one/Section1'

function Home() {
  return (
    <div className='h-full w-full flex flex-col bg-[#f5f1eb] scroll-smooth '>
        <Section1/>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
    </div>
  )
}

export default Home