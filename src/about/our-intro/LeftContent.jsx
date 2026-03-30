import React from 'react'

function LeftContent() {
  return (
    <div className=' w-[50%] flex_col justify-center gap-2 pb-8 px-10 '>
        <h2 className='title_text'>Who we are</h2>
        <p className='sub_text tracking-wide leading-7 '>Founded by a team of design enthassians and home decore experts, FurniNest is dedicated to brings you a curated selection of quality furniture that high standards of desgin and functionality. With years of experience and a keen eye foe details, we are commited to helping you create spaces that feel both luxuries and livable.</p>
        <button className='text-[12px] font-semibold bg-[#196344c0] text-[#d7ffee] w-45 rounded-full py-2 mt-4 greenBtn  '>View Our Collection &#x2022; </button>
    </div>
  )
}

export default LeftContent