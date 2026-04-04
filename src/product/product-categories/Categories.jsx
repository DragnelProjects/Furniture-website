import React from 'react'
import ProductCategorie from './ProductCategorie'

function Categories() {
  return (
    <div className='min-h-[25vw] just_col gap-6 py-8 border '>
        <h2 className='title_text'>Top Categories</h2>
        <ProductCategorie/>
    </div>
  )
}

export default Categories