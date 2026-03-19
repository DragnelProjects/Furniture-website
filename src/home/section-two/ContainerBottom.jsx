import React from 'react'
import Flower from '../images/flower-pot.jpeg'

function ContainerBottom() {
  return (
    <div className='h-[60vh] flex bg-white '>
        <div className='h-full w-[50%] '>
            dnlan
        </div>
        <div className=' '>
            <img src={Flower} className='h-full relative w-full object-bottom object-cover' />
        </div>
    </div>
  )
}

export default ContainerBottom