import React from 'react'
import Section1 from '../section-one/Section1'
import OurIntro from './our-intro/OurIntro'
import Choose from './choose-us/Choose'
import Curating from './curating-files/Curating'
import OurTeam from './our-team/OurTeam'

function About() {
  return (
    <div className='h-full w-full flex flex-col bg-[#ffffe8]  scroll-smooth '>
      <Section1/>
      <OurIntro/>
      <Choose/>
      <Curating/>
      <OurTeam/>
    </div>
  )
}

export default About