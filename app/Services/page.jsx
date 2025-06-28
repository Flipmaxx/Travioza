'use client';

const services = [
  {
    category: 'Tour Packages',
    items: [
      {
        title: 'Domestic Tours',
        description: 'Explore breathtaking destinations within India including Kerala, Rajasthan, Himachal and more.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/451496146/JQ/WD/RT/14858318/domestic-kerala-packages-services-500x500.jpg',
      },
      {
        title: 'International Tours',
        description: 'Travel to exotic locations around the world with our expertly curated international packages.',
        image: 'https://kundutirthoovraman.com/wp-content/uploads/2024/04/vietnam-and-cambodia-header-700x430.jpg',
      },
    ],
  },
  {
    category: 'Cultural Events',
    items: [
      {
        title: 'Festivals & Traditions',
        description: 'Attend rich cultural festivals like Pushkar Fair, Hornbill Festival, and Onam celebrations.',
        image: 'https://images.pexels.com/photos/27489411/pexels-photo-27489411.jpeg?cs=srgb&dl=pexels-nandhukumar-27489411.jpg&fm=jpg',
      },
      {
        title: 'Dance & Music Shows',
        description: 'Experience India’s classical and folk arts with curated cultural dance and music events.',
        image: 'https://media.istockphoto.com/id/535403859/photo/dancing-at-disco.jpg?s=612x612&w=0&k=20&c=mVZX9qAsgnOv8C0t9gR81ofJ0JG20Orc4Io9r4AKNQQ=',
      },
      {
        title: 'Heritage Walks',
        description: 'Join guided walks through historic cities and UNESCO heritage sites across the country.',
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/db/89/35.jpg',
      },
    ],
  },
  {
    category: 'Travel Expo',
    items: [
      {
        title: 'Annual Travel Expo 2025',
        description: 'Meet top travel brands, get exclusive deals, and explore new travel trends.',
        image: 'https://photos.acnnewswire.com/20250224JLH1.jpg',
      },
      {
        title: 'Virtual Travel Expo',
        description: 'Attend from anywhere—virtual expos offer destination showcases and live expert sessions.',
        image: 'https://www.shutterstock.com/shutterstock/videos/3609172777/thumb/8.jpg?ip=x480',
      },

    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <h1 className="text-4xl font-bold text-center text-[#FFCB05] mb-12">Our Services</h1>

      {services.map((service, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[#FFCB05] inline-block">
            {service.category}
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {service.items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-70 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#FFCB05] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
