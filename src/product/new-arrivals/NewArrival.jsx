import React from 'react'
import ArrivalText from './ArrivalText'
import TopArrival from './TopArrival'
import BootomArrival from './BootomArrival'
import { showcaseProduct } from '../../javascript/product'
import { useSearchParams } from 'react-router-dom'

function NewArrival() {

  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const active = category || "all2";

  const filtered = showcaseProduct.filter((p) => p.category === active);

  return (
    <div className='min-h-[50vw] w-full  items_col py-4 px-5 overflow-x-auto perspective-distant gap-4'>
      <ArrivalText/>
      <TopArrival showcaseProduct={showcaseProduct} filtered={filtered} />
      <BootomArrival showcaseProduct={showcaseProduct} filtered={filtered} />
    </div>
  )
}

export default NewArrival