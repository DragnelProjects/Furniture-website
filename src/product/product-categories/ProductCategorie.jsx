import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'
import { RiArrowRightWideLine, RiArrowLeftWideLine } from '@remixicon/react'

function ProductCategorie(props) {
  const [currentIndex, setCurrentIndex] = useState(2);
  const itemsRef = useRef([]);
  const containerRef = useRef();

  useGSAP(() => {
    itemsRef.current.forEach((el, index) => {
      const offset = index - currentIndex;

      gsap.to(el,{
        x:offset * 200,
        rotateY: offset * 18 ,
        scale: offset === 0 ? 1.2 : 0.8,
        opacity: Math.abs(offset) > 2 ? 0 : 1,
        zIndex: 10 - Math.abs(offset),
        boxShadow: offset === 0 ? "0 10px 25px rgba(0,0,0,0.15) " : "0 10px 25px rgba(0,0,0,0.05) ",
        filter: offset === 0 ? "blur(0px" : "blur(0px)",
        duration: 0.6,
        ease: "power3.inOut",
      });
    });
  },{dependencies: [currentIndex], scope:[containerRef]});

  const handlePrev = () => {
    setCurrentIndex((prev) => prev === 0 ? props.categories.lenght - 1 : prev - 1 );
  }

  const handleNext = () => {
    setCurrentIndex((prev) => prev ===  props.categories.lenght - 1 ? 0 : prev + 1 );
  }
  

  return (
    <div className=' h-[20vw] w-full relative  flex  justify-center   pt-5  overflow-x-auto  perspective-distant '
        ref={containerRef}
    >
        {props.categories.map((items, index) => (
          <div key={index}
              ref={(el)=>(itemsRef.current[index] = el)}
              className=' absolute h-[12vw] w-[15vw] flex flex-col items-center justify-center py-1 bg-[#ffff] rounded     transition-all duration-300  '
          >
            <img src={items.image} className='h-[80%] w-[90%]   object-contain mx-auto ' />
            <p className='mt-2 text-sm font-medium text-gray-700 '>{items.name}</p>
          </div>
        ))}
        <button
          onClick={handlePrev}
          className='bg-[#c4c4c4c0] text-[#565656] absolute rounded bottom-1 left-[45%] active:scale-95 active:bg-[#a9a9a9c0] active:text-[#454545]'><RiArrowLeftWideLine size={38}/></button>
        <button 
          onClick={handleNext}
          className='bg-[#c4c4c4c0] text-[#565656] absolute rounded bottom-1 left-[50%] active:scale-95 active:bg-[#a9a9a9c0] active:text-[#454545] '>< RiArrowRightWideLine size={38} /></button>
    </div>
  )
}

export default ProductCategorie