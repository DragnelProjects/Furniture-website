import React from 'react'
import TopIntro from './TopIntro'
import BottomIntro from './BottomIntro'

function OurIntro() {
  return (
    <div className='min-h-screen flex_col gap-8 py-10 '>
      <TopIntro/>
      <BottomIntro/>
    </div>
  )
}

export default OurIntro