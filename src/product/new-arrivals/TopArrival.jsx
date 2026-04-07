import React from 'react'
import { useParams } from 'react-router-dom'


function TopArrival(props) {

  const { category } = useParams();
  const active = category || "sofa2";

  const filtered = props.showcaseProduct.filter((p) => p.category === active);
  const newItems = filtered.filter((p)=> p.isNew === true  );

  return (
    <div className='h-[26vw]  w-full  flex items-center  overflow-x-auto gap-4 px-1'>
      {newItems.map((elem, idx) => (
        <div key={idx} className='h-[24vw] w-[23vw] shrink-0 relative flex flex-col justify-center px-1  bg-[#eeeded5f] rounded gap-2  '>
           <div className='h-[60%] w-full just_col '>
                <img src={elem.image} alt={elem.name} className='h-[90%] w-[98%] rounded-xl shadow ' />
           </div>
           <div className='flex flex-col h-[5vw] justify-center bg-[#ffffff6f] px-2 shadow '>
                <h4 className='text-sm font-semibold text-[#212435] '>{elem.name}</h4>
                <p className='text-[14px] text-[#2b2727] font-bold '>&#8377;{elem.price}</p>
           </div>
        </div>
      ))}
      
    </div>
  )
}

export default TopArrival