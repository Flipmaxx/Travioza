'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const trips = [
  {
    title: 'Parisian elegance & charm',
    desc: 'Indulge in the romance and refinement of Paris.',
    duration: '4 day 3 night',
    location: 'France',
    price: '₹88,000',
    img: './Images/CD1.jpeg',
  },
  {
    title: 'The Swiss Alps adventure',
    desc: 'Adventure in the heart of the Swiss Alps.',
    duration: '4 day 3 night',
    location: 'Italy',
    price: '₹ 99,000',
    img: './Images/CD2.jpg',
  },
  {
    title: 'Mediterranean in Greece',
    desc: "Experience the magic of Greece's sun-soaked.",
    duration: '4 day 3 night',
    location: 'Germany',
    price: '₹ 40,000',
    img: './Images/CD3.webp',
  },
  {
    title: 'Royal journey through Scotland',
    desc: 'The rugged beauty and royal history of Scotland.',
    duration: '4 day 3 night',
    location: 'Europe',
    price: '₹ 55000',
    img: './Images/CD4.jpg',
  },
  {
    title: "Bali’s private villa paradise",
    desc: "Immerse yourself in Bali’s tropical luxury.",
    duration: '4 day 3 night',
    location: 'UAE',
    price: '₹ 45000',
    img: './Images/CD5.jpg',
  },
  {
    title: 'Opulent island retreats',
    desc: "The allure of Thailand’s pristine islands.",
    duration: '4 day 3 night',
    location: 'Koria',
    price: '₹ 35000',
    img: './Images/CD6.jpg',
  },
];

export default function TripCards() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const animationTypes = ['fade-up', 'zoom-in', 'flip-left', 'slide-up', 'fade-right', 'flip-up'];

  return (
    <section className="bg-white py-16 md:px-10 px-5 lg:px-10 xl:px-0">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900" data-aos="fade-up">
          Exclusive Travel Packages
        </h1>
        <p className="text-gray-600 mt-3 text-lg" data-aos="fade-up" data-aos-delay="100">
          Designed for those who seek extraordinary experiences
        </p>
      </div>

      <div className="grid gap-8 xl:gap-16 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {trips.map((trip, index) => (
          <div
            key={index}
            data-aos={animationTypes[index % animationTypes.length]}
            data-aos-delay={index * 100}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition border border-gray-300"
          >
            <img
              src={trip.img}
              alt={trip.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">{trip.title}</h3>
              <p className="text-sm text-gray-600">{trip.desc}</p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center gap-1">🕒 {trip.duration}</span>
                <span className="flex items-center gap-1">📍 {trip.location}</span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="font-bold text-gray-900">{trip.price}</span>
                <button className="px-5 py-2 text-sm rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition">
                  View trip
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
