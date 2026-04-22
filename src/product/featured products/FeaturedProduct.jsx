import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useCart } from '../../hooks/useCart'

function FeaturedProduct(props) {
  const [activeIndex, setActiveIndex] = useState(null)
  const cardRefs = useRef([])
  const { addToCart } = useCart()

  const featuredItems = props.filtered.filter((p) => p.isFeatured === true).slice(0, 6)

  useEffect(() => {
    cardRefs.current.forEach((card, idx) => {
      if (!card) return
      const isActive = idx === activeIndex
      if (isActive) {
        gsap.set(card, { position: 'fixed', left: '50%', top: '50%', zIndex: 50, transformOrigin: 'center center' })
        gsap.fromTo(card, 
          { x: '-50%', y: '-50%', scale: 1 },
          { x: '-50%', y: '-50%', scale: 1.2, duration: 0.8, ease: 'power3.out' }
        )
      } else {
        gsap.set(card, { position: 'relative', left: 'auto', top: 'auto', zIndex: 1 })
        gsap.to(card, { x: '0%', y: '0%', scale: 1, duration: 0.8, ease: 'power3.out' })
      }
    })
  }, [activeIndex])

  const toggleActive = (idx) => {
    setActiveIndex((current) => (current === idx ? null : idx))
  }

  return (
    <div id='productDiv' className='w-full min-h-[60vw] grid grid-cols-3 gap-4 p-3 place-items-center overflow-visible relative'>
      {activeIndex !== null && (
        <div
          className='fixed inset-0 bg-[#37373771] bg-opacity-50 z-30'
          onClick={() => setActiveIndex(null)}
        ></div>
      )}
      {featuredItems.map((el, idx) => {
        const isActive = idx === activeIndex
        return (
          <div
            key={el.id ?? idx}
            ref={(elRef) => {
              cardRefs.current[idx] = elRef
            }}
            onClick={() => toggleActive(idx)}
            role='button'
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                toggleActive(idx)
              }
            }}
            className={`relative rounded border border-[#d6d6d6] bg-white shadow-sm overflow-visible cursor-pointer transition-all duration-300 ease-out transform-gpu ${
              isActive ? 'shadow-2xl' : 'h-75 w-full hover:shadow-md'
            }`}
            style={{ transformOrigin: 'center center' }}
          >
            <div className='h-55 w-full overflow-hidden rounded-t'>
              <img
                src={el.image}
                alt={el.name}
                className='h-full w-full object-cover transition-transform duration-300 ease-out'
              />
            </div>

            <div className='p-4'>
              <div className='flex items-start justify-between space-x-4'>
                <div>
                  <h4 className='text-base font-semibold text-[#1b1b1f]'>{el.name}</h4>
                  <p className='text-sm font-bold text-[#202020]'>&#8377;{el.price}</p>
                </div>
                {isActive && (
                  <button
                    onClick={(event) => {
                      event.stopPropagation()
                      setActiveIndex(null)
                    }}
                    className='rounded-md border border-[#c3c3c3] bg-white px-3 py-2 text-xs font-semibold text-[#1b1b1f] shadow-sm transition hover:bg-[#f3f3f3]'
                  >
                    Close
                  </button>
                )}
              </div>

              <div className={`mt-4 overflow-hidden transition-all duration-300 ${isActive ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className='text-[13px] leading-6 text-[#4a4a4a] mb-4'>
                  {el.description || 'This product has premium detailing and crafted comfort for your space.'}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(el);
                    setActiveIndex(null);
                  }}
                  className='w-full rounded-md bg-[#1a1b1e] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#333333]'
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div className='absolute inset-x-0 top-0 h-full rounded-lg pointer-events-none'></div>
          </div>
        )
      })}
    </div>
  )
}

export default FeaturedProduct