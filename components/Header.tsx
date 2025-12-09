'use client'
import Image from 'next/image'
import { Nav } from './Nav'
import { MobileNav } from './MobileNav'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdMenu } from 'react-icons/md'

export const Header = () => {

  const [headerActive, setHeaderActive] = useState(false)
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderActive(true)
      } else {
        setHeaderActive(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    
  }, [])
  console.log(headerActive)

  
  return (
    <header className={`${headerActive ? 'h-[100px]' : 'h-[124px]'} fixed max-w-[1920px] top-0 w-full bg-black shadow-md transition-all duration-300 z-50`}>
      <div className='container mx-auto h-full flex items-center justify-between'>
        <Link href="">
          <Image src={'/assets/logo.jpg'} width={100} height={26} alt=''></Image>
        </Link>
        <MobileNav containerStyles={`${headerActive ? 'top-[90px]' : 'top-[124px]'}
        ${openNav ? 'max-h-max pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'}
         flex flex-col text-center gap-8 fixed bg-black w-full left-0 text-base uppercase font-medium text-white transition-all xl:hidden`} />
        <Nav containerStyles=' text-white gap-4 flex hidden xl:flex text-base uppercase font-medium hidden xl:flex transition-all duration-300' />
        {/*Hide/open menu button */}
        <div className='flex items-center gap-4'>
          <div className='text-white flex items-center gap-4'>
            <button className='hover:text-lime-400  transition-all text-base uppercase font-medium'>
              Login
            </button>
            <button className='hover:text-lime-400  transition-all text-base uppercase font-medium'>
              Sign Up
            </button>
          </div>
          <button className='text-white xl:hidden'
          onClick={() => setOpenNav(!openNav)}>
            <MdMenu className='text-4xl'/>
          </button>
        </div>
      </div>
    </header>
  )
}
