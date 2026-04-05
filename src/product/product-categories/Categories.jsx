import React, { useRef } from 'react'
import ProductCategorie from './ProductCategorie'

function Categories(props) {

  const containerRef = useRef();

  return (
    <div className='min-h-[25vw] w-full  just_col gap-6 py-8  '
        ref={containerRef}
    >
        <h2 className='title_text'>Top Categories</h2>
        <ProductCategorie categories={props.categories} containerRef={containerRef} />
    </div>
  )
}

export default Categories