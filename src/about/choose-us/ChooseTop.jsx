import React from 'react'

function ChooseTop(props) {
  return (
    <div className='min-h-[25vw] items_col gap-4'>
        <p className='text-[12px] text-[#717881] tracking-wider font-semibold '>Why choose FurniNest</p>
        <h2 className='title_text '>Furniture you can feel good about</h2>
        <div className='flex gap-6 '>
            {props.reasons.map((elem, idx) => (
                <div key={idx} className='bg-[#ffffff] h-[16vw] w-[18vw] just_col px-3 gap-2 rounded-xl bg_sub '>
                    <h1 className='text-[#699482] '>{elem.logo}</h1>
                    <h4 className='font-bold text-[#27292e] '>{elem.service}</h4>
                    <p className='discription'>{elem.discrip}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ChooseTop