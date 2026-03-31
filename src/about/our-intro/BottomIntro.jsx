import React from 'react'
import {RiHeartFill, RiEqualizer2Fill, RiCustomerService2Fill} from '@remixicon/react'

function BottomIntro() {

  const story = [
    {
      logo:<RiHeartFill/>,
      title: 'Founded With Passion',
      discription: 'Started in 2015, FurniNest was born a passion for beautiful and functional living spaces'
    },
    {
      logo:<RiEqualizer2Fill/>,
      title: 'Growing With Quality',
      discription: 'Our journey has been driven by redi-dication to quality, with a best on craftsmanship and timehee design.'
    }
    ,{
      logo:<RiCustomerService2Fill/>,
      title: 'Serving With Trust',
      discription: 'We pride ourselves on excellent customer service, providing a seamless shopping experience from start.'
    }
  ]

  return (
    <div  className='min-h-[50vh] just_col gap-15 py-4'>
      <h2 className='title_text'>Our story</h2>
      <div className='flex gap-8'>
        {story.map((elem, idx) => (
          <div key={idx} className='bg-[#ffffff] relative h-45 w-[22vw] just_col rounded-2xl px-4 gap-3 bg_sub '>
            <div className='h-12 w-12 -top-6 just_col  absolute bg-[#4c9375] rounded-full text-neutral-100 '>{elem.logo}</div>
            <h2 className='text-[16px] text-[#1a1a1a] font-medium '>{elem.title}</h2>
            <p className='sub_text leading-6 '>{elem.discription}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BottomIntro