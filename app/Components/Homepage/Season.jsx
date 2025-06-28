'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: 'Explore Hidden Beaches',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: "The Majesty Of The River's Flow",
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    span: '',
  },
  {
    title: 'Snowy Mountains and Blue Skies',
    img: 'https://images.ctfassets.net/wv75stsetqy3/DaKdXY2tkQGWeVQiCbSx7/ac01166282697e4e0cafb99180d35cd1/Thailand_Featured.jpg?q=60&fit=fill&fm=webp',
    span: '',
  },
];

export default function BlogBento() {
  return (
    <section className="bg-black py-16 px-4 md:px-12">
      {/* Header */}
      <div className="container mx-auto mb-12 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFCC00]">
            Adventure Awaits – <span className="text-white">Read more</span>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Get inspired with expert travel tips, destination guides, and real stories from travelers. Discover hidden gems, plan your next adventure, and make every trip unforgettable!
          </p>
        </div>
        <button className="mt-6 md:mt-0 px-6 py-2 bg-white text-black rounded-full flex items-center gap-2 hover:bg-gray-900 hover:text-white transition">
          See All Blogs →
        </button>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[250px] px-7">
        {blogs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`relative overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition-all duration-300 ${item.span}`}
          >
            <img
              loading="lazy"
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 z-10 text-white bg-black/40 backdrop-blur-sm p-2 rounded-lg">
              <h3 className="text-sm font-medium uppercase tracking-wider">Travel</h3>
              <p className="text-md font-semibold">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
