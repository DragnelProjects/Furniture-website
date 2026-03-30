import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function TopIntro() {
  return (
    <div className='h-[30vw] flex border'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default TopIntro