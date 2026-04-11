import React from 'react'
import ArrivalText from './ArrivalText'
import TopArrival from './TopArrival'
import BootomArrival from './BootomArrival'
import { showcaseProduct } from '../../javascript/product'
import { useParams } from 'react-router-dom'

function NewArrival() {

  const { category } = useParams();
  const active = category || "sofa2";

  const filtered = showcaseProduct.filter((p) => p.category === active);

  return (
    <div className='min-h-[50vw] w-full  items_col py-4 px-5 overflow-x-auto perspective-distant border'>
      <ArrivalText/>
      <TopArrival showcaseProduct={showcaseProduct} filtered={filtered} />
      <BootomArrival showcaseProduct={showcaseProduct} filtered={filtered} />
    </div>
  )
}

export default NewArrival