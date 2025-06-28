'use client'

import { FaLock, FaRoute, FaMapMarkedAlt, FaGem } from 'react-icons/fa'

export default function WhyChooseDestinova() {
  return (
    <section className="bg-[#002D4C] bg-cover bg-center text-white px-4 py-16 rounded-2xl max-w-7xl mx-auto relative"
      style={{
        backgroundImage: `url('./Images/W1.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl z-0" />
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h4 className="text-sm uppercase tracking-wide text-white/70 mb-2">Why Choose Travioza</h4>
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-10">
          Experience The <br className="hidden md:block" /> Difference Of True Luxury.
        </h2>
      </div>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12">
        <div className="bg-white text-black rounded-xl p-6 shadow-md text-center">
          <FaLock className="text-2xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Exclusive Access</h3>
          <p className="text-sm text-gray-600">Offering rare experiences that are not available to the general public.</p>
        </div>
        <div className="bg-white text-black rounded-xl p-6 shadow-md text-center">
          <FaRoute className="text-2xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Personalized Itineraries</h3>
          <p className="text-sm text-gray-600">Tailor-made travel plans crafted to suit individual preferences.</p>
        </div>
        <div className="bg-white text-black rounded-xl p-6 shadow-md text-center">
          <FaMapMarkedAlt className="text-2xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Expert Local Guides</h3>
          <p className="text-sm text-gray-600">Providing insightful tours top guides the destination intimately.</p>
        </div>
        <div className="bg-white text-black rounded-xl p-6 shadow-md text-center">
          <FaGem className="text-2xl mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">Luxury Accommodation</h3>
          <p className="text-sm text-gray-600">Only the finest hotels, villas, and resorts are included.</p>
        </div>
      </div>
    </section>
  )
}
