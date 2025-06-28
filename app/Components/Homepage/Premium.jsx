'use client'


import { ArrowUpRight } from 'lucide-react'

export default function premium() {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-sm text-[#FFCB05] mb-2">Personalised Aviation</p>
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-black">
          More Flexibility, <br className="hidden md:block" />
          Freedom And Choice!
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2">
        <div className="relative rounded-2xl overflow-hidden shadow-md group">
          <img
            src="./Images/P1.jpg" 
            alt="Private tour"
            width={600}
            height={400}
            className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 flex justify-between items-center shadow">
            <div>
              <h3 className="font-semibold text-sm text-black">Private tour</h3>
              <p className="text-xs text-gray-500">
                Book your aircraft. Customize all aspects of our journey
              </p>
            </div>
            <button className="text-sm font-medium flex items-center gap-1 text-black">
              Book now <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-md group">
          <img
            src="./Images/P2.jpg"
            alt="Corporate tour"
            width={600}
            height={400}
            className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 flex justify-between items-center shadow">
            <div>
              <h3 className="font-semibold text-sm text-black">Corporate tour</h3>
              <p className="text-xs text-gray-500">
                Book your aircraft. Customize all aspects of our journey
              </p>
            </div>
            <button className="text-sm font-medium flex items-center gap-1 text-black">
              Book now <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
