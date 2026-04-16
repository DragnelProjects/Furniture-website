import React from 'react'
import FeaturedText from './FeaturedText'
import FeaturedProduct from './FeaturedProduct'
import { useSearchParams } from 'react-router-dom';
import { showcaseProduct } from '../../javascript/product'

function FeaturedMain() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const active = category || "all2";
    
    const filtered = showcaseProduct.filter((p) => p.category === active  )

  return (
    <div className='min-h-screen flex flex-col items-center py-5 gap-8'>
        <FeaturedText/>
        <FeaturedProduct showcaseProduct={showcaseProduct} filtered={filtered} />
    </div>
  )
}

export default FeaturedMain