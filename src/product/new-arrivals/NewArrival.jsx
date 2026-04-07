import React from 'react'
import ArrivalText from './ArrivalText'
import TopArrival from './TopArrival'
import BootomArrival from './BootomArrival'
import { showcaseProduct } from '../../javascript/product'

function NewArrival() {
  return (
    <div className='min-h-[50vw] w-full  items_col py-4 px-5 overflow-x-auto perspective-distant border'>
      <ArrivalText/>
      <TopArrival showcaseProduct={showcaseProduct} />
      <BootomArrival/>
    </div>
  )
}

export default NewArrival