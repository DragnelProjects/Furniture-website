import React from 'react'

function SecThreeLinks(props) {

 

  return (
    <div className='w-full flex justify-center gap-6 '>
        <button onClick={() => props.setCategory("all")} className='border border-[gray] text-[12px] text-gray-600 px-4 rounded-full '>All</button>
        <button onClick={() => props.setCategory("sofa")}  className='border border-[gray] text-[12px] text-gray-600 px-4 rounded-full active:scale-95 '>Sofa</button>
        <button onClick={() => props.setCategory("table")} className='border border-[gray] text-[12px] text-gray-600 px-4 rounded-full '>Tabel</button>
        <button onClick={() => props.setCategory("chair")} className='border border-[gray] text-[12px] text-gray-600 px-4 rounded-full '>Chair</button>
        <button onClick={() => props.setCategory("decorative")} className='border border-[gray] text-[12px] text-gray-600 px-4 rounded-full '>Decorate</button>
    </div>
  )
}

export default SecThreeLinks