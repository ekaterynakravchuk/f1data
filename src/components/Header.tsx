'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Header = () => {
  const pathname = usePathname()
  return (
    <div className='px-6 py-10'>
      <div className='flex items-center justify-between gap-6'>
        <Link href="/">f1data</Link>
        <nav>
          <ul className='flex items-center gap-6'>
            <li className={pathname === '/drivers' ? 'underline' : ''}><Link href="/drivers">Drivers</Link></li>
            <li><Link href="/constructors">Constructors</Link></li>
            <li><Link href="/circuits">Circuits</Link></li>
            <li><Link href="/standings">Standings</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header