import React from 'react'
import Long from '../images/long-sofa.png'

function ContainerTop() {
  return (
    <div className='h-[60vh] flex items-center justify-around'>
        <img src={Long} className='h-60 w-100 rounded-2xl ' />
        <div className='h-60 w-[40%] flex flex-col items-center justify-around bg-neutral-100 rounded-2xl '>
            <h2 className='bg-[#c3faf4] text-[1.1vw] text-[#037b5f] font-semibold border border-[#348a81]  px-4 rounded-full '>Premium Living</h2>
            <h4 className='text-[1.1vw] text-justify  '>
              Explore beautifully crafted designed to bring comfort, elegance and timeless style into your living space. From plush sofas to refinde accents.
            </h4>
            <div>
              <button>Shop Now</button>
              <button>Explore more</button>
            </div>
        </div>
    </div>
  )
}

export default ContainerTop