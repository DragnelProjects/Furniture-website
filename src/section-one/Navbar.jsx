import React from 'react'
import { Link } from 'react-router-dom'
import {RiSearch2Line, RiHeartLine, RiLuggageCartLine } from '@remixicon/react'
import { useCart } from '../hooks/useCart'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Navbar() {
  const { getTotalItems } = useCart()
  useGSAP(() => {
    const navTime = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    })
    navTime.fromTo('nav', {backgroundColor: 'transparent'}, {
      backgroundColor: '#00000080',
      duration: 0.5,
      ease: 'power1.inOut'
    })
  })

  return (
    <nav className=' flex w-full fixed top-0 items-center justify-between py-1 px-12 z-100 '>
      <h2 className='text-3xl text-[#ebebeb] font-light '>FurniNest</h2>
      <div className=' flex text-[14px] text-[#ebebeb] font-[250]  gap-12'>
       <Link to='/' >Home</Link>
       <Link to='/about' className='active:scale-95' >About</Link>
       <Link to='/product' >Product</Link>
       <Link to='/contact' >Contact</Link>
      </div>
      <div className=' flex items-center gap-5'>
        <RiSearch2Line size={16} color='#d1d1d1' />
        <RiHeartLine size={16} color='#d1d1d1' />
        <Link to='/cart' className='relative'>
          <RiLuggageCartLine size={16} color='#d1d1d1' />
          {getTotalItems() > 0 && (
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
              {getTotalItems()}
            </span>
          )}
        </Link>
        <h5 className='text-[#ebebeb] text-[14px] border-l border-l-[#858585] pl-2 '>Login</h5>
      </div>
    </nav>
  )
}

export default Navbar