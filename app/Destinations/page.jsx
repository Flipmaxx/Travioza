'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Compass } from 'lucide-react';

const destinations = [
  { country: 'France', region: 'Europe', title: 'Around Saint Tropez', price: '$4.99', image: './Images/DP.jpg' },
  { country: 'Sri Lanka', region: 'Asia', title: 'Mysteries of Sigiriya', price: '$2.99', oldPrice: '$5.99', endsIn: '2d 3h 25m', image: 'https://oceanjar-new.s3.ap-south-1.amazonaws.com/sri_lanka_991797e44f.jpg' },
  { country: 'Japan', region: 'Asia', title: 'Tokyo Explorer', price: '$3.99', image: 'https://lp-cms-production.imgix.net/2020-11/shutterstockRF_189118511.jpg?auto=format,compress&q=72&fit=crop' },
  { country: 'Greece', region: 'Europe', title: 'Islands of Greece', price: '$4.49', oldPrice: '$6.49', endsIn: '1d 14h', image: 'https://internationalliving.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fwv75stsetqy3%2F18jOEJrhKM7WA81nkCKZV8%2F6f70df258ed1233d5c3a8e3f01298b06%2FGreece.jpg%3Fq%3D60%26fit%3Dfill%26fm%3Dwebp&w=3840&q=60' },
  { country: 'Italy', region: 'Europe', title: 'Romance of Rome', price: '$3.50', image: 'https://hips.hearstapps.com/hmg-prod/images/positano-amalfi-coast-italy-royalty-free-image-1719519974.jpg?crop=0.668xw:1.00xh;0.0144xw,0&resize=1120:*' },
  { country: 'Brazil', region: 'South America', title: 'Vibes of Rio', price: '$3.99', image: 'https://www.jacadatravel.com/_next/image/?url=https%3A%2F%2Fcdn.jacadatravel.com%2Fwp-content%2Fuploads%2Fbis-images%2F492407%2FMachu-Picchu-AdobeStock_53391024-3200x1800-f50_50.jpg&w=3840&q=100' },
  { country: 'USA', region: 'North America', title: 'Grand Canyon Escape', price: '$5.49', image: 'https://colombianabroad.com/wp-content/uploads/vivir-usa.jpg' },
  { country: 'Canada', region: 'North America', title: 'Maple Trails', price: '$4.99', oldPrice: '$6.00', endsIn: '5h 30m', image: 'https://explorewithalec.com/wp-content/uploads/2023/10/Wing-Lake-DJI_0483-scaled.jpg' },
  { country: 'Vietnam', region: 'Asia', title: 'Ha Long Bay Adventures', price: '$2.89', image: 'https://dynamic-media.tacdn.com/media/photo-o/2e/e3/be/62/caption.jpg?w=800&h=600&s=1' },
  { country: 'Australia', region: 'Oceania', title: 'Sydney Highlights', price: '$4.79', image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZDshdZpXIHI/v0/-1x-1.webp' },
  { country: 'Thailand', region: 'Asia', title: 'Bangkok Buzz', price: '$3.69', oldPrice: '$4.99', endsIn: '8h 10m', image: 'https://www.shutterstock.com/image-photo/lapse-aerial-view-bangkok-city-600nw-2315495803.jpg' },
  { country: 'Indonesia', region: 'Asia', title: 'Bali Breeze', price: '$3.29', image: 'https://media.digitalnomads.world/wp-content/uploads/2021/01/20120709/bali-for-digital-nomads.jpg' },
  { country: 'New Zealand', region: 'Oceania', title: 'Queenstown Quest', price: '$5.19', image: 'https://w0.peakpx.com/wallpaper/529/652/HD-wallpaper-new-zealand-sea-summer-hills-tropics-patagonia.jpg' },
  { country: 'South Africa', region: 'Africa', title: 'Cape Town Calling', price: '$4.39', image: 'https://www.shutterstock.com/shutterstock/videos/1088273235/thumb/12.jpg?ip=x480' },
  { country: 'Iceland', region: 'Europe', title: 'Aurora Nights', price: '$6.29', oldPrice: '$8.99', endsIn: '3d 6h', image: 'https://res.cloudinary.com/icelandtours/g_auto,f_auto,c_auto,w_3840,q_auto:good/northern_lights_above_glacier_lagoon_v2osk_unsplash_7d39ca647f.jpg' },
  
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
                    <span className="line-through">{item.oldPrice}</span>
                    <span>{item.price}</span>
                  </div>
                ) : (
                  <div className="bg-black/80 px-3 py-1 rounded-full">{item.price}</div>
                )}
              </div>
           <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-white drop-shadow-md">
  <div className="flex items-center gap-2 mb-1">
    <Compass className="w-4 h-4" />
    <span className="text-xs uppercase tracking-wide">Star Guide</span>
  </div>
  <h3 className="text-lg font-semibold">{item.title}</h3>
  <p className="text-sm text-gray-200">{item.country}, {item.region}</p>
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
