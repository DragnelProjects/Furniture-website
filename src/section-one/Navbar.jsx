import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {RiSearch2Line, RiHeartLine, RiLuggageCartLine } from '@remixicon/react'
import { useCart } from '../hooks/useCart'
import { useAuth } from '../hooks/useAuth'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Navbar() {
  const { getTotalItems } = useCart()
  const { user } = useAuth()
  const location = useLocation()
  
  const getLinkClass = (path) => {
    const baseClass = 'active:scale-95 transition-colors duration-200'
    const isActive = location.pathname === path
    return isActive 
      ? `${baseClass} text-[#D47968] font-semibold` 
      : baseClass
  }
  useGSAP(() => {
    const navTime = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    })
    navTime.fromTo('nav', {backgroundColor: 'transparent'}, {
      backgroundColor: '#00000070',
      duration: 1,
      ease: 'power1.inOut'
    })
  })

  return (
    <nav className=' flex w-full fixed top-0 items-center justify-between py-1 px-12 z-100 '>
      <h2 className='text-3xl text-[#ebebeb] font-light '>FurniNest</h2>
      <div className=' flex text-[14px] text-[#ebebeb] font-[250]  gap-12'>
       <Link to='/' className={getLinkClass('/')}>Home</Link>
       <Link to='/about' className={getLinkClass('/about')}>About</Link>
       <Link to='/product' className={getLinkClass('/product')}>Product</Link>
       <Link to='/contact' className={getLinkClass('/contact')}>Contact</Link>
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
        
        {user ? (
          <div className='relative'>
            <Link to='/profile'>
              <button
                className='w-10 h-10 rounded-full overflow-hidden border-2 border-[#D47968] hover:border-[#ebebeb] transition-colors'
              >
                <img
                  src={user.profileImage}
                  alt={user.username}
                  className='w-full h-full object-cover'
                />
              </button>
            </Link>
          </div>
        ) : (
          <Link to='/login' className='text-[#d1d1d1] hover:text-[#eeedec] transition-colors'>Login</Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar