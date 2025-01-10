'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            {/* Remplacez cette ligne avec le logo */}
            <Image 
              src="/logo.ico" // Remplacez par le chemin de votre logo
              alt="Logo"
              width={32} // Largeur du logo
              height={32} // Hauteur du logo
              className="rounded-full" // Optionnel : rend le logo circulaire
            />
            <span className="text-xl font-semibold text-gray-900">Startup Landing</span>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                href="/" 
                className="text-[#8D448B] hover:text-[#7D347A] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/testimonials" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link 
                href="/news" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                News
              </Link>
            </li>
          </ul>

          {/* Register Button */}
          <button 
            className="hidden md:flex border-2 border-[#8D448B] text-[#8D448B] px-4 py-2 rounded-md hover:bg-[#8D448B] hover:text-white transition-colors"
          >
            Register Now
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
