import { SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'

const SoNavbar = () => {

    return (
        <>
        <nav className="fixed w-full top-0 z-10 p-4 bg-black/20 backdrop-blur-lg border-b border-white/20 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      
      <div className="flex-shrink-0 text-2xl font-bold tracking-wide">
        Metaverse<span className="text-yellow-400">X</span>
      </div>

      <div className="hover:text-yellow-400 transtion-colors">
        <SignInButton/>
      </div>

      
    </div>
  </div>
</nav>
        </>
    )
}

export default SoNavbar
