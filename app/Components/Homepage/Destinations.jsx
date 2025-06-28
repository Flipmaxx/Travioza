'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const destinations = [
  {
    country: 'France',
    tours: 4,
    image:
      './Images/D1.jpg',
  },
  {
    country: 'Thailand',
    tours: 7,
    image:
      './Images/D2.jpg',
  },
  {
    country: 'Maldives',
    tours: 5,
    image: './Images/D3.jpg',
  },
  {
    country: 'Indonesia',
    tours: 5,
    image: './Images/D4.webp',
  },
  {
    country: 'Greece',
    tours: 8,
    image:
      './Images/D5.jpg',
  },
]

export default function DestinationSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-black">Destinations</h2>
      </div>
  <Link href={`/Destinations`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 max-w-7xl mx-auto">
        {destinations.map((item, idx) => {
          const colSpan = idx === 0 || idx === 1 ? 'lg:col-span-3' : 'lg:col-span-2'

          return (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden shadow-md group h-72 sm:h-80 ${colSpan}`}
              data-aos="zoom-in-up"
              data-aos-delay={`${idx * 100}`}
            >
              <img
                src={item.image}
                alt={item.country}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-md px-4 py-3 flex justify-between items-center shadow-md">
                <div>
                  <p className="text-xs text-gray-500">{item.tours} tour</p>
                  <p className="font-medium text-sm text-black">{item.country}</p>
                </div>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          )
        })}
      </div>
  </Link>
      <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="500">
     <Link href={`/Destinations`}>   <button className="px-6 py-2 bg-[#FFCB05] text-white text-sm rounded-full hover:bg-[#e6b600] transition">
          View all Destination
        </button></Link>
      </div>
    </section>
  )
}
