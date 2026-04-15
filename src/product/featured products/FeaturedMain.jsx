import React from 'react'
import FeaturedText from './FeaturedText'
import FeaturedProduct from './FeaturedProduct'
import { useSearchParams } from 'react-router-dom';
import { showcaseProduct } from '../../javascript/product'

function FeaturedMain() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const active = category || "all2";
    
    const filteredItems = showcaseProduct.filter((p) => p.category === active  )

  return (
    <div className='min-h-[50vw] border'>
        <FeaturedText/>
        <FeaturedProduct showcaseProduct={showcaseProduct} filteredItems={filteredItems} />
    </div>
  )
}

export default FeaturedMain