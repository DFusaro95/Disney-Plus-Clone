import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiHome, HiPlus, HiSearch, HiStar } from 'react-icons/hi'
import { RiMovie2Line } from 'react-icons/ri'
import { TbDeviceTvOld } from 'react-icons/tb' 
import {signIn} from 'next-auth/react'

function Header() {
  return (
    <div className='sticky bg-[#040714] top-0 z-[100] flex items-center px-10 h-[72px] md:px-12'>
      <Image 
      src='/images/logo.svg' 
      width={80} 
      height={80} 
      className='cursor-pointer'
      onClick={() => router.push("/")}/>
      <ul className=' hidden ml-10 md:flex items-center space-x-6'>
        <Link href={'/'} className='text-white header-link group'>
          <HiHome className='h-4' />
          <span className='span'>Home</span>
        </Link>
        <Link href={'/'} className='text-white header-link group'>
          <HiSearch className='h-4' />
          <span className='span'>Search</span>
        </Link>
        <Link href={'/'} className='text-white header-link group'>
          <HiPlus className='h-4' />
          <span className='span'>Watchlist</span>
        </Link>
        <Link href={'/'} className='text-white header-link group'>
          <HiStar className='h-4' />
          <span className='span'>Originals</span>
        </Link>
        <Link href={'/'} className='text-white header-link group'>
          <RiMovie2Line className='h-4' />
          <span className='span'>Movies</span>
        </Link>
        <Link href={'/'} className='text-white header-link group'>
          <TbDeviceTvOld className='h-4' />
          <span className='span'>Series</span>
        </Link>
      </ul>
      <button className="ml-auto uppercase border px-4 py-1.5 rouded font-medium tracking-wide hover:bg-white hover:text-[#040714] transition duration-200" onClick={signIn}>Login</button>
    </div>
  )
}

export default Header