import { GlobeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { Activelink } from '../active-link/ActiveLink';


const items = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Pricing', href: '/pricing' },
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-700 opacity-20 p-2 m-2 rounded justify-around'>
        <Link href={'/'} className='flex items-center'>
          <GlobeIcon />
        <span className='px-3'>Home</span>
        </Link>
        <div className='flex flex-.5'></div>

        {items.map((item) => (
          <Activelink key={item.name} path={item.href} text={item.name} />
        ))}

       
    </nav>
  )
}
