import React from 'react'

function SecThreeCards(props) {
  return (
    <div className='w-full flex flex-wrap items-center justify-center gap-6'>
      {props.products
        .filter(p=> p.id=== props.category)
        .map((elem, idx) => {
         return <div key={idx} className='h-60 w-80 relative flex flex-col items-start justify-between  bg-linear-to-tl from-[#929fba] to-[#e2ecff] rounded-2xl py-2 px-4 z-10'>
            <img src={elem.image} className='h-[60%] w-[60%]  absolute  object-contain top-10 left-10 -z-5  ' />
            <span className='bg-[white] text-[#0d0d41]  text-[12px] font-medium  px-3 rounded-full mt-4 ml-2 '>{elem.color}</span>
            <div>
              <p>{elem.name}</p>
              <p>{elem.price}</p>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default SecThreeCards