import { UserButton } from '@clerk/clerk-react'
import React from 'react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
        <nav class="fixed w-full top-0 z-10 p-4 bg-black/20 backdrop-blur-lg border-b border-white/20 shadow-lg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      
      <div class="flex-shrink-0 text-2xl font-bold tracking-wide">
        Metaverse<span class="text-yellow-400">X</span>
      </div>
      <div class="hidden md:flex space-x-8">
        <a href="#" class="hover:text-yellow-400 transition-colors">Home</a>
        <a href="#" class="hover:text-yellow-400 transition-colors">Explore</a>
        <a href="#" class="hover:text-yellow-400 transition-colors">Community</a>
        <a href="#" class="hover:text-yellow-400 transition-colors">About</a>
      </div>

      <div class="hidden md:flex space-x-4">
        <UserButton/>
      </div>

      <div class="md:hidden">
        <button 
          id="menu-btn" 
          class="focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div 
    id="mobile-menu" 
    class={`md:hidden px-4 pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
  >
    <a href="#" class="block py-2 hover:text-yellow-400">Home</a>
    <a href="#" class="block py-2 hover:text-yellow-400">Explore</a>
    <a href="#" class="block py-2 hover:text-yellow-400">Community</a>
    <a href="#" class="block py-2 hover:text-yellow-400">About</a>
    <div class="mt-4 space-y-2">
      <UserButton/>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
