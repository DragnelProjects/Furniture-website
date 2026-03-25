import React from 'react'
import { Link } from 'react-router-dom'

function SecThreeLinks() {
  return (
    <div className='w-full flex justify-center gap-6 '>
      
        <Link to='/all' className='link_theme active:scale-95' >All</Link>
        <Link to='/sofa' className='link_theme active:scale-95'>Sofa</Link>
        <Link to='table' className='link_theme active:scale-95'>Tabel</Link>
        <Link to='chair' className='link_theme active:scale-95'>Chair</Link>
        <Link to='decorative' className='link_theme active:scale-95'>Decorate</Link>
    </div>
  )
}

export default SecThreeLinks