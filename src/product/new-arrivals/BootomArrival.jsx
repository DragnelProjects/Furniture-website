import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { RiArrowUpWideLine,  RiArrowDownWideFill  } from '@remixicon/react'
import { useCart } from '../../hooks/useCart'

function BootomArrival(props) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsRef = useRef([]);
    const containerRef = useRef();
    const imageRef = useRef();
    const { addToCart } = useCart();


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

  useGSAP(() => {
     const prodcutInfoTime = gsap.timeline({
      scrollTrigger:{
        trigger: '#slideRef',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    });
    prodcutInfoTime.from('#productInfo', {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
     })
  })

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
        className='min-h-screen w-full relative flex pt-8  justify-around '
        ref={containerRef}
        id='slideRef'
        >
      <div className=' h-[75vh] w-[20vw] relative flex flex-col items-center overflow-y-hidden py-5 '>
         {newItems.map((elem, idx) => (
        <div key={idx} 
          className='h-[10vw] w-[16vw] shrink-0 absolute flex flex-col justify-center px-1  bg-[#eeeded5f] rounded gap-2  '
          ref={(el) => itemsRef.current[idx] = el}
        >
          <img src={elem.image} alt={elem.name} className='h-[90%] w-[98%] rounded-xl shadow ' />
        </div>
      ))}

      </div>
      <div  className=' h-[70vh] w-[75%] just_col'>
        <div className='h-[90%] w-[90%] relative flex justify-end rounded-xl  overflow-hidden ' ref={imageRef}>
          <img src={newItems[currentIndex]?.image} alt={newItems[currentIndex]?.name} className='h-full w-full absolute object-cover brightness-75 contrast-115 -z-2 ' />
          <div id='productInfo' className='h-full w-[20vw] flex flex-col bg-[#0000005f] backdrop-blur-[2px] px-3 gap-2 '>
              <h2 className=' text-[#f4f5f6]  font-semibold py-2'>
                {newItems[currentIndex]?.name}
              </h2>
              <h5 className='text-xs text-[#f4f5f6]  tracking-wider leading-5 '>{newItems[currentIndex].description}</h5>
              <h3 className='text-[18px] text-[#f4f5f6]  font-semibold '>&#8377;{newItems[currentIndex].price}</h3>
              <button
                onClick={() => addToCart(newItems[currentIndex])}
                className='w-32 bg-linear-to-r from-[#151515] to-[rgb(49,49,49)] h-10 my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-[#151515] before:to-[rgb(82,80,80)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[white] active:scale-90'
              >
                Add to Cart
              </button>
          </div>
        </div>
      </div>
      <button onClick={handlerPrev} className='absolute left-1/11 top-14 transform -translate-y-1/2 bg-[#212435] text-white px-4 rounded-full shadow hover:bg-[#2b2727] active:scale-95 z-100'>
        < RiArrowUpWideLine />
      </button>
      <button onClick={handleNext} className='absolute left-1/11 bottom-22 transform -translate-y-1/2 bg-[#212435] text-white  px-4 rounded-full shadow hover:bg-[#2b2727] active:scale-95 z-100'>
        < RiArrowDownWideFill />
      </button>
    </div>
  )
}

export default BootomArrival