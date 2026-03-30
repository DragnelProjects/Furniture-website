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
      title: 'Founded With Passion',
      discription: 'Started in 2015, FurniNest was born a passion for beautiful and functional living spaces'
    }
    ,{
      logo:<RiCustomerService2Fill/>,
      title: 'Founded With Passion',
      discription: 'Started in 2015, FurniNest was born a passion for beautiful and functional living spaces'
    }
  ]

  return (
    <div  className='min-h-[50vh] just_col border'>
      <h2 className='title_text'>Our story</h2>
      <div className='flex'>
        {story.map((elem, idx) => (
          <div key={idx} className='bg-amber-100'>
            <div>{elem.logo}</div>
            <h2>{elem.title}</h2>
            <p>{elem.discription}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BottomIntro