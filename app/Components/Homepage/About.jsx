'use client';

import SplitText from "../../Components/Engine/Splittext";
import BlurText from "../Engine/Blurtext";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative bg-white py-16 px-4 md:px-7 xl:px-1 max-w-7xl mx-auto overflow-hidden">
    

      <svg
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ccc"
          d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,208C672,203,768,149,864,149.3C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192V320H0Z"
        ></path>
      </svg>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
            <motion.p
        className="text-xl text-black font-semibold mb-6 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        About Us
      </motion.p>
          <SplitText
            text="Where Personalized Service Meets Bespoke Experiences."
            className="text-xl md:text-4xl  font-bold text-gray-900 leading-snug"
            delay={50}
            duration={0.3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="start"
          />
          <p className=""></p>
          <BlurText
            text="We are passionate about crafting extraordinary journeys that embody sophistication and luxury. Travel experiences that cater to the discerning traveler seeking exclusivity and unforgettable memories."
            delay={80}
            animateBy="words"
            direction="top"
            className="text-gray-600 max-w-lg"
          />
          <motion.button
            className="mt-4 px-6 py-2 border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn more
          </motion.button>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="rounded-xl overflow-hidden">
            <img
              src="./Images/AB1.jpg"
              alt="Globe"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-gray-600 max-w-full"></p>
          <BlurText
            text="We are passionate about crafting extraordinary journeys that embody sophistication and luxury. With years of expertise, we create seamless travel experiences that cater to the discerning traveler seeking exclusivity and unforgettable memories."
            delay={80}
            animateBy="words"
            direction="top"
            className="text-gray-600 max-w-full "
          />
        </motion.div>
      </div>

      <motion.div
        className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div>
          <img
            src="./Images/AB2.jpg"
            alt="Map"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 text-center ">
          <div>
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900">1.5K+</p>
            <p className="text-sm text-gray-600">Happy customers</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900">120+</p>
            <p className="text-sm text-gray-600">Destinations</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900">5+</p>
            <p className="text-sm text-gray-600">Years experience</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
