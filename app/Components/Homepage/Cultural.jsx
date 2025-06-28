'use client';

export default function Culturals() {
  const cards = [
    {
      location: 'Kannur',
      title: 'Cultural programs',
      description:
        'Explore the rich heritage of Indigenous cultures through art',
      image:
        './Images/CL1.jpeg',
    },
    {
      location: 'Kerala, India',
      title: 'Travel Expo',
      description:
        'Indulge in premium experiences with 5-star stays and curated comforts.',
      image:
        './Images/CL2.webp',
    },
    {
      location: 'Rajasthan, India',
      title: 'Music Concerts',
      description:
        'Dive into heritage, arts, and traditions across regions.',
      image:
        './Images/Party.jpg',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-0 py-16">
      <h2 className="text-4xl font-bold text-center text-[#FFCB05] mb-12">
        Explore our cultural events
      </h2>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl shadow-lg overflow-visible"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <div className="mt-4 bg-white rounded-xl p-5 shadow-xl text-start sm:hidden">
              <p className="text-xs text-gray-500 mb-1">{card.location}</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>
              <a
                href="#"
                className="text-[#FFCB05] text-sm font-medium mt-2 inline-block hover:underline"
              >
                Know More
              </a>
            </div>
            <div
              className="hidden sm:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full 
                group-hover:translate-y-1/2 opacity-0 group-hover:opacity-100 
                transition-all duration-500 ease-in-out 
                w-[85%] bg-white rounded-xl p-5 shadow-xl text-start z-10"
            >
              <p className="text-xs text-gray-500 mb-1">{card.location}</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>
              <a
                href="#"
                className="text-[#FFCB05] text-sm font-medium mt-2 inline-block hover:underline"
              >
                Know More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
