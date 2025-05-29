"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Oportunidades", href: "#opportunities" },
    { name: "Programas", href: "#training" },
    { name: "Directorio", href: "#directory" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/95 backdrop-blur-md border-b border-orange-200/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Platform Name */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-turquoise-500 to-teal-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 lg:w-5 lg:h-5 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <div className="text-lg lg:text-xl font-bold text-amber-900">
              <span className="text-orange-800">Plataforma</span>
              <span className="text-turquoise-700 ml-1">Guajira Emprende</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-amber-800 hover:text-turquoise-700 hover:bg-orange-100/50 rounded-lg transition-all duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-turquoise-500 group-hover:w-3/4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/join">
              <Button className="bg-coral-500 hover:bg-coral-600 text-white font-semibold px-4 lg:px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
                Únete Ahora
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-amber-800 hover:text-turquoise-700 hover:bg-orange-100/50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-orange-200/50 bg-amber-50/98 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-amber-800 hover:text-turquoise-700 hover:bg-orange-100/50 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <Link href="/join">
                  <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white font-semibold py-3 rounded-full shadow-md">
                    Únete Ahora
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
