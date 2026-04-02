import React from 'react'
import CuratingImg from '../about-images/curating.png'
import CuratingText from './CuratingText'

function Curating() {
  return (
    <div className='min-h-screen items_col py-10 gap-4 bg-[#ffffe9] border border-rose-500 '>
      <h2 className='title_text '>Curating for you</h2>
      <div className='w-full h-[30vw] flex items-center justify-center gap-8  '>
        <img src={CuratingImg} className='h-[90%] w-[30%] object-cover rounded-xl ' />
        <CuratingText/>
      </div>
    </div>
  )
}

export default Curating