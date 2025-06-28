'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function TravelArticles() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const articles = [
    {
      title: 'A Refreshing Getaway into the Heart of Nature',
      desc: 'We embarked on an exciting and rejuvenating trip to the forest, a journey that brought us closer to nature and offered a peaceful break from our daily routines. Surrounded by towering trees, the sound of rustling leaves, and the fresh scent of earth and greenery, the forest provided the perfect setting for adventure, reflection, and bonding.',
      img: './Images/AT1.jpg',
      date: '5 October, 2024',
    },
    {
      title: 'A Getaway to Remember – Just Us',
      desc: 'Our recent couple’s trip was everything we needed—an escape from the routine, and a chance to slow down and reconnect. From morning coffees shared on a balcony with a view, to late-night walks under starlit skies, every moment felt like a quiet affirmation of our love.',
      img: './Images/AT2.jpg',
      date: '5 October, 2024',
    },
    {
      title: 'Soar Above the Ordinary',
      desc: 'Paragliding is a thrilling adventure sport that allows you to glide through the air with nothing but a fabric wing and the power of the wind. It combines the serenity of flying with the excitement of being suspended high above stunning landscapes — offering a truly unforgettable experience.',
      img: './Images/AT3.jpg',
      date: '5 October, 2024',
    },
    {
      title: 'Whispers of the North',
      desc: 'The road twisted higher into the mountains, each turn revealing deeper valleys and steeper cliffs. By the time we reached the town, the air had changed — cooler, cleaner, and tinged with the earthy scent of pine and woodsmoke. Snow clung to rooftops and blanketed the winding lanes, softening every sound.',
      img: './Images/AT4.jpg',
      date: '5 October, 2024',
    },
    {
      title: 'Above the Clouds',
      desc: 'The mountain trail began quietly — just a narrow path winding through whispering pine forests, morning light filtering through the trees. My backpack felt heavy at first, and my steps were unsure, but with each turn, the rhythm of the climb settled into my bones. The air grew thinner and cleaner as we gained altitude',
      img: './Images/AT5.jpg',
      date: '5 October, 2024',
    },
    {
      title: 'First Steps on Foreign Soil',
      desc: 'I still remember the moment the plane wheels touched down — a mix of nervous excitement and quiet disbelief. I had finally landed in a country I had only seen in photos, heard about in films, and dreamed of for years. Everything felt unfamiliar — the language on the signs, the scent in the air, even the way the sunlight touched the buildings.',
      img: './Images/AT6.jpg',
      date: '5 October, 2024',
    },
  ];

  const animationVariants = [
    'fade-up',
    'zoom-in',
    'flip-left',
    'slide-up',
    'fade-right',
    'flip-up',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-9 xl:px-0 py-16">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12">
        <div data-aos="fade-down">
          <p className="text-sm text-[#FFCB05] font-medium mb-1">Luxury Travel Insights</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Latest In High-<br className="hidden md:block" />
            End Travel.
          </h2>
        </div>
        <div
          className="mt-6 md:mt-0 md:w-1/3 text-gray-600 text-sm"
          data-aos="fade-right"
        >
          <p className="mb-4">
            Explore our blog for expert travel tips, luxury destination guides, and insider
            knowledge on the most exclusive.
          </p>
          <button className="border border-gray-400 px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition">
            View all Articles
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {articles.map((article, i) => (
          <div
            key={i}
            data-aos={animationVariants[i % animationVariants.length]}
            data-aos-delay={i * 100}
            className="cursor-default"
          >
            <div className="w-full h-96 relative rounded-lg overflow-hidden mb-4">
              <img
                src={article.img}
                alt={article.title}
                fill
                className="object object-cover h-96 w-full"
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{article.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{article.desc}</p>
            <p className="text-xs text-gray-500">{article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
