import React from 'react'

function FeaturedProduct(props) {

    const featuredItems = props.filtered.filter((p) => p.isFeatured === true ).slice(0, 6);

  return (
    <div id='productDiv' className='w-full min-h-[50vw] grid grid-cols-4  auto-rows-fr gap-4 p-1'>
      {featuredItems.map((el, idx) => (
        <div
          key={idx}
          className={`bg-[#eeeded5f] relative rounded flex flex-col justify-center items-center border  ${idx === 0 || idx === featuredItems.length - 1 ? 'col-span-2 h-[24vw] w-[48vw]' : 'col-span-1 h-[20vw]'}`}
        >
          <img src={el.image} alt={el.name} className='h-[90%] w-[90%] object-cover rounded brightness-75 contrast-125 shadow' />
          <div className='absolute bottom-3 w-[90%] just_col bg-[#ffffff59] backdrop-blur-[2px] py-2  '>
            <h4 className='text-sm font-semibold text-[#1a1b1e] text-center'>{el.name}</h4>
            <p className=' text-[14px] text-[#242121] font-extrabold '>&#8377;{el.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedProduct