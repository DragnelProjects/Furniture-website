import React from 'react'
import ChooseTop from './ChooseTop'
import ChooseBottom from './ChooseBottom'
import {RiBrushAi3Line, RiOpenArmLine, RiTruckLine, RiRefundLine, RiBold, RiMediumLine } from '@remixicon/react'

function Choose() {

  const reasons = [
    {
      logo:<RiBrushAi3Line size={46} />,
      service:'Curated Collections',
      discrip:'Handpicked pieces for every room and style'
    },
    {
      logo:<RiOpenArmLine size={46}/>,
      service:'Curated Collections',
      discrip:'Handpicked pieces for every room and style'
    },
    {
      logo:<RiTruckLine size={46}/>,
      service:'Curated Collections',
      discrip:'Handpicked pieces for every room and style'
    },
    {
      logo:<RiRefundLine size={46}/>,
      service:'Curated Collections',
      discrip:'Handpicked pieces for every room and style'
    }
  ]
  
  return (
    <div className='min-h-screen border flex_col gap-8 py-2 '>
      <ChooseTop reasons={reasons}/>
      <ChooseBottom/>
    </div>
  )
}

export default Choose