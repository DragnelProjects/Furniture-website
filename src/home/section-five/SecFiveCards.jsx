import React from 'react'
import {RiStarHalfFill} from '@remixicon/react'

function SecFiveCards(props) {
  return (
    <div className=' w-full flex flex-wrap justify-center py-4 gap-8 '>
        {props.reviews.map((elem, idx)=>(
            <div key={idx} className='h-65 w-80 flex flex-col items-center pt-1 pb-4 px-3 rounded bg-[#ffffff] gap-2 bg_sub '>
                <div className='w-full flex items-center justify-between px-2 py-1 gap-2 '>
                    <div className='flex items-center gap-2'>
                        <img src={elem.profilePic} className='h-6 w-6 object-cover rounded-full ' />
                        <h4 className='text-sm font-medium '>{elem.personName}</h4>
                    </div>
                    <span className='flex items-center text-[12px] text-[#363945] font-semibold gap-1'><RiStarHalfFill size={16} color='#ffde08'/>{elem.rating}</span>
                </div>
                <div className='h-40 w-full flex items-center justify-center bg-[#ece7e7] rounded-xl '>
                    <img src={elem.productPic} alt='pic' className='h-20 object-cover' />
                </div>
                <div>
                    <h4 className='text-[14px] font-semibold text-[#1a1a29] '>{elem.productName}</h4>
                    <p className='text-[10.5px] font-medium text-[#7d7d7d] '>{elem.customerReview}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default SecFiveCards