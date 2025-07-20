import { UserButton } from '@clerk/clerk-react'
import React from 'react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
        <nav className="fixed w-full top-0 z-10 p-4 bg-black/20 backdrop-blur-lg border-b border-white/20 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      
      <div className="flex-shrink-0 text-2xl font-bold tracking-wide">
        Metaverse<span className="text-yellow-400">X</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
        <a href="#" className="hover:text-yellow-400 transition-colors">Explore</a>
        <a href="#" className="hover:text-yellow-400 transition-colors">Community</a>
        <a href="#" className="hover:text-yellow-400 transition-colors">About</a>
      </div>

      <div className="hidden md:flex space-x-4">
        <UserButton/>
      </div>

      <div className="md:hidden">
        <button 
          id="menu-btn" 
          className="focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div 
    id="mobile-menu" 
    className={`md:hidden px-4 pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
  >
    <a href="#" className="block py-2 hover:text-yellow-400">Home</a>
    <a href="#" className="block py-2 hover:text-yellow-400">Explore</a>
    <a href="#" className="block py-2 hover:text-yellow-400">Community</a>
    <a href="#" className="block py-2 hover:text-yellow-400">About</a>
    <div className="mt-4 space-y-2">
      <UserButton/>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
