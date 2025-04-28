import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const PrimaryNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative inset-x-0 top-0 z-50 bg-transparent">
      <nav className="flex items-center justify-between p-6 lg:px-8 container mx-auto">
        {/* Logo */}
        <Link to="/">
        <StaticImage
            className="object-scale-down h-[140px] w-[160px]"  // Custom size matching your old h-35 w-40
            alt="The Shark Fighter Logo"
            src="../images/The-Shark-Fighter-logo.png"
        />
        </Link>

        {/* Hamburger button (mobile only) */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon: hamburger (3 lines) */}
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                // X icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when menu is closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div className="hidden lg:flex lg:gap-x-12 text-sm">
          <Link className="font-semibold" to="/portfolio">Portfolio</Link>
          <Link className="font-semibold" to="/about">About</Link>
          <Link className="font-semibold" to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Mobile menu, shown when hamburger is clicked */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link className="block rounded-md px-3 py-2 text-base font-semibold hover:bg-gray-100" to="/portfolio">Portfolio</Link>
            <Link className="block rounded-md px-3 py-2 text-base font-semibold hover:bg-gray-100" to="/about">About</Link>
            <Link className="block rounded-md px-3 py-2 text-base font-semibold hover:bg-gray-100" to="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default PrimaryNavigation

