'use client';

import SplitText from "../../Components/Engine/Splittext";
import { motion } from 'framer-motion';

const value = [
  {
    save: '10%',
    head: 'Tropical Bliss: Overwater Luxury in Maldives',
    code: 'D5Y2AG',
    img: './Images/AC1.jpg',
  },
  {
    save: '30%',
    head: 'Golden Hour Cruise: Sunset Dining at Sea',
    code: 'D5Y2AG',
    img: './Images/AC2.jpg',
  },
  {
    save: '20%',
    head: 'Cultural Treasures: Java to Kerala Journey',
    code: 'D5Y2AG',
    img: './Images/AC3.jpg',
  },
  {
    save: '20%',
    head: 'Tranquil Escape: Sunset by the Temple Lake',
    code: 'D5Y2AG',
    img: './Images/AC4.jpg',
  },
  {
    save: '20%',
    head: 'Sacred Peaks: Northern Thailand Pagoda Trail',
    code: 'D5Y2AG',
    img: './Images/AC5.avif',
  },
  {
    save: '20%',
    head: 'Zen Horizons: Timeless Journey Through Japan',
    code: 'D5Y2AG',
    img: './Images/AC6.jpg',
  },
];


export default function Activities() {
  return (
    <div className="bg-white  py-12 px-5 md:px-7 lg:px-8 xl:px-0 max-w-7xl mx-auto">
      <motion.div
        className="mb-10 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="text-xl text-gray-900 underline">Our activities</p>
        <SplitText
          text="Curated Luxury Activities"
          className="text-xl md:text-4xl font-bold text-gray-900 mt-2"
          delay={100}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </motion.div>

      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {value.map((item, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-sm group hover:shadow-xl transition"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src={item.img}
              alt={item.head}
              className="w-full h-80 md:h-[35vh] lg:h-[30vh] xl:h-[50vh] object-cover"
            />
            <div className="absolute top-4 right-4  bg-white text-black text-xs font-semibold px-3 py-1 rounded-xl shadow">
              Save Up to {item.save}
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white h-20 rounded-xl px-4 py-3 shadow-lg">
              <h3 className="text-sm font-semibold text-gray-900">
                {item.head}
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Promo code - {item.code}
              </p>
              <div className="absolute bottom-4 right-4 text-gray-500">
                <span className="text-xl">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
