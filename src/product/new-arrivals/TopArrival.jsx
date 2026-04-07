import React from 'react'
import { useParams } from 'react-router-dom'


function TopArrival(props) {

  const { category } = useParams();
  const active = category || "sofa2";

  const filtered = props.showcaseProduct.filter((p) => p.category === active);
  const newItems = filtered.filter((p)=> p.isNew === true  );

  return (
    <div className='h-[26vw]  w-full  flex items-center  overflow-x-auto gap-6   border'>
      {newItems.map((elem, idx) => (
        <div key={idx} className='h-[22vw] w-[23vw] shrink-0 relative flex flex-col justify-center px-5 bg-gray-200'>
           <div className='h-[60%] w-full just_col border '>
                <img src={elem.image} alt={elem.name} className='h-full w-full object-contain ' />
           </div>
           <h4 className='sub_text'>{elem.name}</h4>
           <h5 className='text-[14px] text-[#3f3e3e] font-medium '>{elem.price}</h5>
        </div>
      ))}
      
    </div>
  )
}

export default TopArrival