import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'


const Navbar = () => {
  const session = null

  return (
    <nav className='flexBetwen navbar'>
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
            <Image
                src="/logo.svg"
                alt=''
                width={115}
                height={43}
            />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
              {NavLinks.map((link, index) =>(

                <Link href={link.href} key={link.key}>
                  {link.text}
                </Link>
              ))}
            </ul>
      </div>

      <div className="flexCenter gap-4">
        { session ? (
          <>
            UserPhoto 

            <Link href="/create-projet">Share work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}

export default Navbar
