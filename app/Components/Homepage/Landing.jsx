'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark } from 'lucide-react';

const destinations = [
   {
    name: 'USA',
    description: 'The USA is known for its diverse landscapes and iconic landmarks like the Grand Canyon, NYC, and Yellowstone.',
    background: './Images/L4.jpg',
  },
  {
    name: 'Thailand',
    description: 'Thailand is a Southeast Asian country known for tropical beaches, opulent palaces, and ancient ruins.',
    background: './Images/L1.webp',
  },
  {
    name: 'Bali',
    description: 'Broken Beach in Bali offers stunning cliff views and turquoise waters.',
    background: './Images/L2.jpg',
  },
  {
    name: 'Kerala',
    description: 'Kerala is famous for its backwaters, palm-lined beaches, and spice plantations.',
    background: './Images/L3.jpg',
  },
 
  {
    name: 'Greece',
    description: 'Egypt is home to ancient monuments like the Pyramids of Giza and the Great Sphinx.',
    background: './Images/L5.jpg',
  },
];

export default function Landing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const currentDestination = destinations[activeIndex];
  
  const orderedDestinations = [
    ...destinations.slice(activeIndex),
    ...destinations.slice(0, activeIndex)
  ];

  const changeSlide = (newIndex) => {
    setIsChanging(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsChanging(false);
    }, 300);
  };

  const nextSlide = () => {
    changeSlide(activeIndex === destinations.length - 1 ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    changeSlide(activeIndex === 0 ? destinations.length - 1 : activeIndex - 1);
  };

  const goToSlide = (index) => {
    if (index !== activeIndex) {
      changeSlide(index);
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -20 }
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className="relative w-full bg-black h-screen overflow-hidden text-white ">
     
      <div className="hidden xs:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 h-2/4 md:h-3/4 flex flex-col justify-between items-center">
        <div className="w-px h-full bg-white/30 relative">
          {destinations.map((_, index) => (
            <div 
              key={index}
              className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                index === activeIndex ? 'bg-white text-black' : 'text-white'
              }`}
              style={{ top: `${(index / (destinations.length - 1)) * 100}%` }}
              onClick={() => goToSlide(index)}
            >
              <span className="text-xs font-medium">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentDestination.background})` }}
        />
      </AnimatePresence>

    <div
  className={`absolute inset-0 z-10 transition-all duration-300 ${
    isChanging ? 'backdrop-blur-md ' : ' bg-black/10'
  }`}
/>


      <div className="relative z-20 h-full flex flex-col justify-between p-4 sm:p-6 md:p-8">
        <div className="flex-1 flex flex-col justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
                {currentDestination.name}
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                {currentDestination.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex flex-col items-end w-full mt-4 sm:mt-6 md:mt-8">
          <div className="w-full overflow-x-auto pb-2 sm:pb-4 hide-scrollbar">
            <div className="flex gap-2 sm:gap-3 md:gap-4 w-max ml-auto">
              {orderedDestinations.map((dest, index) => {
                const originalIndex = (activeIndex + index) % destinations.length;
                const isActive = currentDestination.name === dest.name;
                return (
                  <motion.div
                    key={dest.name}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative overflow-hidden cursor-pointer rounded-lg sm:rounded-xl flex-shrink-0 transition-all duration-300 ${
                      isActive 
                        ? 'w-32 h-48 xs:w-40 xs:h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80' 
                        : 'w-24 h-36 xs:w-32 xs:h-48 sm:w-36 sm:h-52 md:w-40 md:h-56 lg:w-44 lg:h-64 mt-4 xs:mt-6 opacity-90 hover:opacity-100'
                    }`}
                    onClick={() => goToSlide(originalIndex)}
                  >
                    <img
                      src={dest.background}
                      alt={`${dest.name} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-white/80 hover:bg-white rounded-full p-1 transition">
                      <Bookmark className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                    </div>
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-center py-1 sm:py-2 text-xs sm:text-sm font-medium">
                      {dest.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-2 sm:mt-4 md:mt-6">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center text-sm sm:text-base"
                aria-label="Previous slide"
              >
                ←
              </motion.button>
              
              <div className="text-xs xs:text-sm sm:text-base md:text-lg text-white">
                {String(activeIndex + 1).padStart(2, '0')}/{String(destinations.length).padStart(2, '0')}
              </div>
              
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center text-sm sm:text-base"
                aria-label="Next slide"
              >
                →
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}