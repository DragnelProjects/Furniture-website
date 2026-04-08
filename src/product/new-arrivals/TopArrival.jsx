import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

function TopArrival(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsRef = useRef([]);
  const containerRef = useRef();

  const newItems = props.filtered.filter((p) => p.isNew === true);
  const itemCount = newItems.length;

  useGSAP(
    () => {
      itemsRef.current.forEach((items, idx) => {
        const offset = ((idx - currentIndex + itemCount) % itemCount);
        const dist = Math.min(offset, itemCount - offset);

        gsap.to(items, {
          x: offset * 290,
          opacity: dist > 3 ? 0 : 1,
          zIndex: 10 - dist,
          duration: 0.9,
          ease: 'power3.inOut',
        });
      });
    },
    { dependencies: [currentIndex], scope: containerRef }
  );

  const handleNext = () => {
    if (itemCount === 0) return;
    setCurrentIndex((prev) => (prev + 1) % itemCount);
  }

  const handlerPrev = () => {
    if (itemCount === 0) return;
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }

  return (
    <div className='h-[26vw] relative w-full flex items-center overflow-x-auto overflow-y-hidden gap-4 px-1'
      ref={containerRef}
    >
      {newItems.map((elem, idx) => (
        <div key={idx} 
          className='h-[24vw] w-[23vw] shrink-0 absolute left-0 flex flex-col justify-center px-1  bg-[#eeeded5f] rounded gap-2  '
          ref={(el) => itemsRef.current[idx] = el}
        >
           <div className='h-[60%] w-full just_col '>
                <img src={elem.image} alt={elem.name} className='h-[90%] w-[98%] rounded-xl shadow ' />
           </div>
           <div className='flex flex-col h-[5vw] justify-center bg-[#ffffff6f] px-2 shadow '>
                <h4 className='text-sm font-semibold text-[#212435] '>{elem.name}</h4>
                <p className='text-[14px] text-[#2b2727] font-bold '>&#8377;{elem.price}</p>
           </div>
        </div>
      ))}
      
      <button onClick={handlerPrev} className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#212435] text-white p-2 rounded-full shadow hover:bg-[#2b2727] active:scale-95 z-100'>
        &lt;
      </button>
      <button onClick={handleNext} className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#212435] text-white p-2 rounded-full shadow hover:bg-[#2b2727] active:scale-95 z-100'>
        &gt;
      </button>
    </div>
  )
}

export default TopArrival