import React from 'react'
import SecThreeText from './SecThreeText'
import SecThreeLinks from './SecThreeLinks'

function Section3() {
  return (
    <div className='min-h-screen bg-[#f8f9ef] flex flex-col items-center border py-4 '>
      <SecThreeText />
      <SecThreeLinks />
    </div>
  )
}

export default Section3