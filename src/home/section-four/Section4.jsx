import React from 'react'
import SecFourText from './SecFourText'
import Services from './Services'
import { RiBox3Line, RiTruckLine, RiSwap2Line } from '@remixicon/react'

function Section4() {

  const services = [
    {
      logo:<RiBox3Line/>,
      service: "Made Your Order",
      discrip: "Your favorite furniture, just a click away."
    },
    {
      logo:<RiTruckLine/>,
      service: "Free Delivery",
      discrip: "We bring it home, free of charge."
    },
    {
      logo:<RiSwap2Line/>,
      service: "Free Exchange",
      discrip: "Easy exchange with no extra cost."
    }
  ]

  return (
    <div className='min-h-[50vh] flex_col bg-[#F3F4E5] gap-4 py-8 border '>
      <SecFourText />
      <Services services={services} />
    </div>
  )
}

export default Section4