import React from 'react'

function FeaturedProduct(props) {

    const featuredItems = props.filtered.filter((p) => p.isFeatured === true ).slice(0, 6);

  return (
    <div id='productDiv' className='w-full min-h-[50vw] grid grid-cols-3 auto-rows-fr gap-4 p-4'>
      {featuredItems.map((el, idx) => (
        <div
          key={idx}
          className={`bg-[#eeeded5f] rounded flex flex-col justify-center items-center p-2 ${idx === 0 || idx === featuredItems.length - 1 ? 'col-span-2 h-[32vw]' : 'col-span-1 h-[20vw]'}`}
        >
          <img src={el.image} alt={el.name} className='h-[60%] w-full rounded-xl shadow mb-2' />
          <h4 className='text-sm font-semibold text-[#212435] text-center'>{el.name}</h4>
          <p className='text-[14px] text-[#2b2727] font-bold'>&#8377;{el.price}</p>
        </div>
      ))}
    </div>
  )
}

export default FeaturedProduct