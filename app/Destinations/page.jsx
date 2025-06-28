'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Compass } from 'lucide-react';

const destinations = [
  { country: 'France', region: 'Kashmir', title: 'Where Beauty Meets Serenity', price: '₹ 65,000', image: './Images/DP.jpg', oldPrice: '5 days', },
  { country: 'Sri Lanka', region: 'Kulu Manali', title: ' Himalayan Serenity and Snowy Escapes', price: '₹ 67,750', oldPrice: '7 days', endsIn: '2d 3h 25m', image: './Images/DP2.jpg' },
  { country: 'Japan', region: 'Andaman', title: 'Turquoise Waters & Tropical Calm', price: '₹ 64,780',oldPrice: '5 days', image: './Images/DP3.jpg' },
  { country: 'Greece', region: 'Delhi Agra Jaipur', title: 'Where Heritage Meets Hustle', price: '₹ 56,800', oldPrice: '5 days', endsIn: '1d 14h', image: './Images/DP4.jpg' },
  { country: 'Italy', region: 'Goa', title: 'Sunsets, Shores & Soulful Vibes', price: '₹ 37,860', oldPrice: '3 days',image: './Images/DP5.jpg' },
  { country: 'Brazil', region: 'Assam Meghalaya', title: 'Abode of Clouds and Hidden Wonders', price: '67,900',oldPrice: '6 days',  image: './Images/DP6.jpg' },
  { country: 'USA', region: 'Leh Ladakh', title: 'Land of High Passes and Timeless Monasteries', price: '₹ 75,000',oldPrice: '6 days',  image: './Images/DP7.jpg' },
  { country: 'Canada', region: 'Rajastan', title: 'Royal Heritage and Desert Wonders', price: '₹ 71,000', oldPrice: '8 days', endsIn: '5h 30m', image: './Images/DP8.jpg' },
  { country: 'Vietnam', region: 'Mookambika', title: 'Ha Long Bay Adventures', price: '₹ 70,000', image: './Images/DP9.jpg' },
  { country: 'Australia', region: 'Oceania', title: 'Sydney Highlights', price: '₹ 70,000', image: './Images/DP10.webp' },
  { country: 'Thailand', region: 'Asia', title: 'Bangkok Buzz', price: '₹ 70,000', oldPrice: '₹ 70,000', endsIn: '8h 10m', image: './Images/DP11.webp' },
  { country: 'Indonesia', region: 'Asia', title: 'Bali Breeze', price: '₹ 70,000', image: './Images/DP12.jpg' },
  { country: 'New Zealand', region: 'Oceania', title: 'Queenstown Quest', price: '₹ 70,000', image: './Images/DP13.jpg' },
  { country: 'South Africa', region: 'Africa', title: 'Cape Town Calling', price: '₹ 70,000', image: './Images/DP14.webp' },
  { country: 'Iceland', region: 'Europe', title: 'Aurora Nights', price: '$6.29', oldPrice: '₹ 70,000', endsIn: '3d 6h', image: './Images/DP15.webp' },
  
];

export default function DestinationsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, offset: 50 });
  }, []);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Top Travel Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Curated experiences and hidden gems to explore the world like never before.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
          {destinations.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="relative rounded-[28px] overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />

             
              <div className="absolute top-4 right-4 text-xs text-white space-y-1 text-right">
                {item.endsIn && (
                  <div className="bg-black/80 px-3 py-1 rounded-full">Ends in: {item.endsIn}</div>
                )}
                {item.oldPrice ? (
                  <div className="flex gap-1 justify-end bg-black/80 px-3 py-1 rounded-full">
                    <span className="">{item.price}</span>
                    <span>{item.oldPrice}</span>
                  </div>
                ) : (
                  <div className="bg-black/80 px-3 py-1 rounded-full">{item.price}</div>
                )}
              </div>
           <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-white drop-shadow-md">
  <div className="flex items-center gap-2 mb-1">
    <Compass className="w-4 h-4" />
    <span className="text-xs uppercase tracking-wide">Travioza</span>
  </div>
  <h3 className="text-lg font-semibold">{item.region}</h3>
  <p className="text-sm text-gray-200"> {item.title}</p>
</div>

            </div>
          ))}
        </div>
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="1000">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
