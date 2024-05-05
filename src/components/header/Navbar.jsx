import React from 'react'
import Image from 'next/image';
import '@/styles/navbar.scss';
import Link from 'next/link';
import { GrYoutube } from "react-icons/gr";
import AuthLinks from '../authLinks/authLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='navbar_social'>
        <GrYoutube className='navbar_social_youtube'/>
        <Image src={'/facebook.png'} alt="Facebook" width={24} height={24}/>
        <Image src={'/instagram.png'} alt="instagram" width={24} height={24}/>
        </div>
        <div className='navbar_logo'>The Use AI</div>
        <div className='navbar_links'>
          <ThemeToggle/>
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          <AuthLinks/>
        </div>
      </div>

    </>
  )
}

export default Navbar
