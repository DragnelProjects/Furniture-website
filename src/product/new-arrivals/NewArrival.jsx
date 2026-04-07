import React from 'react'
import ArrivalText from './ArrivalText'
import TopArrival from './TopArrival'
import BootomArrival from './BootomArrival'

function NewArrival() {
  return (
    <div className='min-h-screen items_col py-4 border'>
      <ArrivalText/>
      <TopArrival/>
      <BootomArrival/>
    </div>
  )
}

export default NewArrival