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
          y: offset * 160,
          opacity: dist > 3 ? 0 : 1,
          zIndex: 10 - dist,
          duration: 0.9,
          ease: 'power3.inOut',
        });
      });

      // Animate the main image with fade effect
      const tl = gsap.timeline();
      tl.to(imageRef.current, { opacity: 0, duration: 0.3, ease: 'power3.inOut' })
        .to(imageRef.current, { opacity: 1, duration: 0.8, ease: 'power3.inOut' }, "+=0.1");
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
        className='min-h-screen w-full relative flex justify-around '
        ref={containerRef}
        >
      <div className=' h-[85vh] w-[20vw] relative flex flex-col  items-center overflow-y-hidden py-5 '>
         {newItems.map((elem, idx) => (
        <div key={idx} 
          className='h-[12vw] w-[16vw] shrink-0 absolute flex flex-col justify-center px-1  bg-[#eeeded5f] rounded gap-2  '
          ref={(el) => itemsRef.current[idx] = el}
        >
          <img src={elem.image} alt={elem.name} className='h-[90%] w-[98%] rounded-xl shadow ' />
        </div>
      ))}

      </div>
      <div className=' h-[80vh] w-[75%] just_col '>
        <div className='h-[90%] w-[90%] relative flex justify-end rounded-xl  overflow-hidden ' ref={imageRef}>
          <img src={newItems[currentIndex]?.image} alt={newItems[currentIndex]?.name} className='h-full w-full absolute object-cover brightness-75 contrast-115 -z-2 ' />
          <div className='h-full w-[20vw] flex flex-col bg-[#0000001d] backdrop-blur-[2px] px-3 gap-2 '>
              <h2 className=' text-[#dadee3]  font-semibold py-2'>
                {newItems[currentIndex]?.name}
              </h2>
              <h5 className='text-xs text-mist-200 tracking-wider leading-5 '>{newItems[currentIndex].description}</h5>
              <h3 className='text-[18px] text-mist-300 font-semibold '>&#8377;{newItems[currentIndex].price}</h3>
          </div>
        </div>
      </div>
      <button onClick={handlerPrev} className='absolute left-1/10 top-0 transform -translate-y-1/2 bg-[#212435] text-white p-2 rounded-full shadow hover:bg-[#2b2727] active:scale-95 z-100'>
        < RiArrowUpWideLine />
      </button>
      <button onClick={handleNext} className='absolute left-1/10 bottom-10 transform -translate-y-1/2 bg-[#212435] text-white p-2 rounded-full shadow hover:bg-[#2b2727] active:scale-95 z-100'>
        < RiArrowDownWideFill />
      </button>
    </div>
  )
}

export default BootomArrival