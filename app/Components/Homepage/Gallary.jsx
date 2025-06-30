'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const travelPhotos = [
  {
    src: '/Images/G1.jpg',
    location: 'Santorini, Greece',
    description: 'Aegean blue & white charm',
  },
  {
    src: '/Images/G2.jpg',
    location: 'Kyoto, Japan',
    description: 'Cherry blossoms & tradition',
  },
  {
    src: '/Images/G3.jpg',
    location: 'Patagonia, Chile',
    description: 'Glaciers & sunrise hikes',
  },
  {
    src: '/Images/G4.jpg',
    location: 'Marrakech, Morocco',
    description: 'Spices & souks',
  },
  {
    src: '/Images/G5.jpg',
    location: 'Banff, Canada',
    description: 'Lake Louise calm',
  },
  {
    src: '/Images/G6.jpg',
    location: 'Zanzibar, Tanzania',
    description: 'Turquoise beaches',
  },
];

export default function TravelGallery() {
  return (
    <section className="px-4 py-12 md:px-8 max-w-7xl mx-auto">
        <h1 className='text-5xl text-[#FFCB05] font-bold mb-12 text-center '>Our Gallary</h1>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {travelPhotos.map((photo, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-md group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="relative w-full h-auto">
              <Image
                src={photo.src}
                alt={photo.location}
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
              
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-lg mb-6 text-black">
          Time to create your story?
        </p>
        <motion.button
  onClick={() => {
    const useWhatsApp = window.confirm("Would you like to contact via WhatsApp?\nClick 'Cancel' for Email.");
    if (useWhatsApp) {
      window.location.href = "https://wa.me/919876543210"; 
    } else {
      window.location.href = "mailto:traviozaholidays@gmail.com"; 
    }
  }}
  className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-[#FFCB05] transition"
>
  Let's Go
 </motion.button>
      </motion.div>
    </section>
  );
}
