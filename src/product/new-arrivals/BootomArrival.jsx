import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { RiArrowUpWideLine,  RiArrowDownWideFill  } from '@remixicon/react'

function BootomArrival(props) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsRef = useRef([]);
    const containerRef = useRef();
    const imageRef = useRef();

    const newItems = props.filtered.filter((p) => p.isNew === true);
    const itemCount = newItems.length;

     useGSAP(
    () => {
      itemsRef.current.forEach((items, idx) => {
        const offset = ((idx - currentIndex + itemCount) % itemCount);
        const dist = Math.min(offset, itemCount - offset);

        gsap.to(items, {
          y: offset * 200,
          opacity: dist > 3 ? 0 : 1,
          zIndex: 10 - dist,
          duration: 0.9,
          ease: 'power3.inOut',
        });
      });

      // Animate the main image with fade effect
      const tl = gsap.timeline();
      tl.to(imageRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' })
        .to(imageRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' }, "+=0.1");
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
    <div 
        className='min-h-screen w-full relative flex justify-around border '
        ref={containerRef}
        >
      <div className='border border-amber-200 w-[20vw] relative flex flex-col  items-center overflow-y-hidden py-5 '>
         {newItems.map((elem, idx) => (
        <div key={idx} 
          className='h-[14vw] w-[18vw] shrink-0 absolute flex flex-col justify-center px-1  bg-[#eeeded5f] rounded gap-2  '
          ref={(el) => itemsRef.current[idx] = el}
        >
          <img src={elem.image} alt={elem.name} className='h-[90%] w-[98%] rounded-xl shadow ' />
        </div>
      ))}

      </div>
      <div className='border w-[75%] just_col '>
        <div className='h-[80%] w-[90%] ' ref={imageRef}>
          <img src={newItems[currentIndex]?.image} alt={newItems[currentIndex]?.name} className='h-full w-full object-cover' />
        </div>
      </div>
      <button onClick={handlerPrev} className='absolute left-1/10 top-0 transform -translate-y-1/2 bg-[#212435] text-white p-2 rounded-full shadow hover:bg-[#2b2727] active:scale-95 z-100'>
        < RiArrowUpWideLine />
      </button>
      <button onClick={handleNext} className='absolute left-1/10 -bottom-9 transform -translate-y-1/2 bg-[#212435] text-white p-2 rounded-full shadow hover:bg-[#2b2727] active:scale-95 z-100'>
        < RiArrowDownWideFill />
      </button>
    </div>
  )
}

export default BootomArrival