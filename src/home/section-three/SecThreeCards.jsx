import React from 'react'

function SecThreeCards(props) {
  return (
    <div className='w-full flex flex-wrap items-center justify-center gap-6'>
      {props.products
        .filter(p=> p.id=== props.category)
        .map((elem, idx) => {
         return <div key={idx} className='h-60 w-80 relative flex flex-col justify-between  bg-[#ececec] z-10'>
            <img src={elem.image} className='h-[60%] w-[60%]  absolute  object-contain top-10 left-10 -z-5  ' />
            <span>{elem.color}</span>
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