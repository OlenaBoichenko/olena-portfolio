'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-lg border-b border-primary/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              <span className="text-gradient glow-text">{'<OB/>'}</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <span
                    className={`text-sm font-medium transition-colors ${
                      pathname === item.path
                        ? 'text-primary'
                        : 'text-gray-300 hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </span>
                  {pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark-light/95 backdrop-blur-lg border-t border-primary/20"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    pathname === item.path
                      ? 'bg-primary/10 text-primary border-l-4 border-primary'
                      : 'text-gray-300 hover:bg-primary/5'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
