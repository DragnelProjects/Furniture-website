import React from 'react'
import LeftNavigate from './LeftNavigate'
import Showcase from './Showcase'

function MainDisplay() {
  return (
    <div className='min-h-screen flex '>
        <LeftNavigate/>
        <Showcase/>
    </div>
  )
}

export default MainDisplay