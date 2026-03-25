import React from 'react'
import { useParams } from 'react-router-dom'

function SecThreeCards(props) {

  const { category } = useParams();
  const active = category || 'all';

  const filtered = props.products.filter((p)=> p.id === active);

  return (
    <div className='w-full flex flex-wrap items-center justify-center gap-6 py-6 px4'>
      {filtered.map((elem, idx) => (
        <div key={idx} className='h-60 w-80 relative flex flex-col items-start justify-between  bg-linear-to-tl from-[#929fba] to-[#e2ecff] rounded-2xl py-2 px-4 z-10'>
            <img src={elem.image} className='h-[60%] w-[60%]  absolute  object-contain top-10 left-10 -z-5  ' />
            <span className='bg-[white] text-[#0d0d41]  text-[12px] font-medium  px-3 rounded-full mt-4 ml-2 '>{elem.color}</span>
            <div>
              <p>{elem.name}</p>
              <p>{elem.price}</p>
            </div>
          </div>
      ))}
    </div>
  )
}

export default SecThreeCards