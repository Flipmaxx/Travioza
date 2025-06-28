'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const trips = [
  {
    title: ' Land of Tea Gardens and Rolling Greens',
    desc: 'Nestled in the Western Ghats, Munnar is a serene hill station known for its lush tea plantations, misty mountains, and cool climate — a perfect escape into nature’s calm and green embrace',
    duration: '2 day ',
    location: 'Munnar',
    price: '₹ 7,500',
    img: './Images/CD1.jpg',
  },
  {
    title: ' Clifftop Serenity by the Arabian Sea',
    desc: 'Perched on dramatic red cliffs overlooking the Arabian Sea, Varkala blends pristine beaches, spiritual vibes, and laid-back charm — a hidden coastal gem in Kerala.',
    duration: '2 day',
    location: 'Varkala',
    price: '₹ 10,500',
    img: './Images/CD2.jpg',
  },
  {
    title: 'The Eternal City on the Banks of the Ganga',
    desc: "Steeped in spirituality and centuries of tradition, Kashi (Varanasi) is India’s holiest city — where sacred rituals, ancient temples",
    duration: '6 days',
    location: 'Kashi',
    price: '₹ 64,750',
    img: './Images/CD3.jpg',
  },
  {
    title: ' Where Mountains Meet the Spirit',
    desc: 'Home to the majestic Himalayas and rich cultural heritage, Nepal offers breathtaking landscapes, sacred temples, and warm hospitality — a haven for trekkers, seekers, and explorers alike',
    duration: '4 days ',
    location: 'Nepal',
    price: '₹ 74,750',
    img: './Images/CD4.jpg',
  },
  {
    title: "Bali’s private villa paradise",
    desc: "Immerse yourself in Bali’s tropical luxury.",
    duration: '5 days',
    location: 'Bali',
    price: '₹ 91,900',
    img: './Images/CD5.jpg',
  },
  {
    title: 'A Thousand Islands, Endless Wonders',
    desc: "From turquoise beaches and lush jungles to lively festivals and warm hospitality, the Philippines is a vibrant archipelago that promises adventure",
    duration: '4 day 3 night',
    location: 'Philippines',
    price: '₹ 1,64,900',
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
