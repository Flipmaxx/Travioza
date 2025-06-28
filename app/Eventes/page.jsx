'use client';

const tripTravel = [
  {
    title: 'Safari Adventure in Kenya',
    location: 'Masai Mara, Kenya',
    date: 'Aug 15 - Aug 22, 2025',
    description: 'Witness the Great Migration and explore the wild savannah with expert guides.',
    image: './Images/EV1.jpg',
  },
  {
    title: 'Cherry Blossom Festival',
    location: 'Kyoto, Japan',
    date: 'Mar 25 - Apr 5, 2025',
    description: 'Experience the stunning bloom of cherry blossoms and Japanese traditions.',
    image: './Images/EV2.jpg',
  },
  {
    title: 'Northern Lights Quest',
    location: 'Reykjavík, Iceland',
    date: 'Nov 10 - Nov 17, 2025',
    description: 'Chase the auroras with nightly tours and soak in geothermal lagoons.',
    image: './Images/EV3.webp',
  },
  {
    title: 'Tuscany Wine Trails',
    location: 'Tuscany, Italy',
    date: 'Sep 5 - Sep 12, 2025',
    description: 'Explore historic vineyards, taste world-class wines, and enjoy scenic countryside.',
    image: './images/EV4.jpg',
  },
  {
    title: 'Andean Highlands Trek',
    location: 'Cusco, Peru',
    date: 'Jun 10 - Jun 18, 2025',
    description: 'Trek through the Sacred Valley and visit the majestic Machu Picchu.',
    image: './Images/EV5.jpg',
  },
  {
    title: 'Greek Island Cruise',
    location: 'Santorini & Mykonos, Greece',
    date: 'Jul 20 - Jul 27, 2025',
    description: 'Sail through the Aegean Sea and indulge in island life and ancient ruins.',
    image: './Images/EV6.jpg',
  },
];

export default function TripTravelGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#FFCB05] mb-10">Upcoming Events</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tripTravel.map((trip, idx) => (
          <FlipCard key={idx} trip={trip} />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ trip }) {
  return (
    <div className="group [perspective:1000px]">
      <div className="relative w-full h-96 duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden [backface-visibility:hidden]">
          <img
            src={trip.image}
            alt={trip.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 bg-[#FFCB05]/90 text-black p-4 w-full">
            <h3 className="text-lg font-semibold">{trip.title}</h3>
            <p className="text-sm">{trip.location}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="text-xl font-bold text-[#FFCB05] mb-2">{trip.title}</h3>
          <p className="text-sm text-gray-500 mb-1">{trip.date}</p>
          <p className="text-sm text-gray-600 mb-4">{trip.description}</p>
          <button className="bg-[#FFCB05] hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg text-sm">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}
