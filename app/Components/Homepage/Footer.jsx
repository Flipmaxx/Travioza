'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-white pt-20  px-4 rounded-xl  xl:pb-0"
      style={{
        backgroundImage: `url('./Images/F1.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0 rounded-xl" />=
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
            Let Us Create The Trip <br className="hidden md:block" /> Of Your Dreams
          </h2>
          <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-full px-5 py-2 text-[#FFCB05] w-full border border-[#FFCB05] focus:outline-[#FFCB05]"
            />
            <button className="bg-[#FFCB05] text-white px-5 py-2 rounded-full hover:bg-[#1d2f57] transition">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-white/90 backdrop-blur-sm bg-white/5 p-6 rounded-xl">
          <div>
            <h3 className="font-semibold text-white mb-2">Travioza</h3>
            <p>
              We empower our content shine <br />
              through engaging & impactful
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Menu</h3>
            <ul className="space-y-4">
            <Link href={`/`}>  <li>Home</li></Link>
             <Link href={`/Destinations`}><li>Destinations</li></Link>
             <Link href={`/Services`}>  <li>Services</li></Link>
             <Link href={`/Contact`}>  <li>Contact us</li></Link>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Utility Pages</h3>
            <ul className="space-y-1">
              <li>404</li>
              <li>Privacy Policies</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={14} /> traviozaholidays@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} /> +91 8590208940
              </li>
              <li className="flex items-start mb-5 gap-2">
                <MapPin size={30} /> Mangalassery Tower, Eloor Rd, opposite Ganapathy Temple, North Kalamassery, Kalamassery, Kochi, Kerala 683104
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/70">
          <p>©2025 by Travioza</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaTiktok className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
