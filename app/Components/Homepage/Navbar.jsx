'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Search, User2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Lock scroll when mobile menu is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 text-white py-3
        ${scrolled ? 'bg-black/30 max-w-7xl mx-auto' : 'bg-black/20 max-w-full'}`}
    >
      <div className="mx-auto px-4 flex items-center justify-between px-3">
        {/* Logo */}
        <Link href="/">
          <img src="/Images/LOGO.png" alt="Logo" className="w-auto h-9" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium text-sm">
          <Link href="/Destinations" className="hover:text-[#FFCB05] transition">Destinations</Link>
          <Link href="/Services" className="hover:text-[#FFCB05] transition">Services</Link>
          <Link href="/Eventes" className="hover:text-[#FFCB05] transition">Events</Link>
          <Link href="/Contact" className="hover:text-[#FFCB05] transition">Contact</Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-white/20 transition">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/20 transition">
            <User2 className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full h-screen bg-[#FFCB05] text-white z-40 flex flex-col items-center justify-center space-y-8"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-6 text-4xl text-white"
              aria-label="Close menu"
            >
              <HiX />
            </button>

            <Link onClick={toggleMenu} href="/Destinations" className="text-3xl font-semibold hover:underline">Destinations</Link>
            <Link onClick={toggleMenu} href="/Services" className="text-3xl font-semibold hover:underline">Services</Link>
            <Link onClick={toggleMenu} href="/Eventes" className="text-3xl font-semibold hover:underline">Events</Link>
            <Link onClick={toggleMenu} href="/Contact" className="text-3xl font-semibold hover:underline">Contact</Link>

            <div className="flex space-x-6 pt-10">
              <button className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition">
                <Search className="w-6 h-6" />
              </button>
              <button className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition">
                <User2 className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
