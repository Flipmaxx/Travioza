'use client';
import Image from 'next/image';

export default function Testimonials() {
const testimonials = [
  {
    name: 'Wade Warren',
    role: 'Founder, Assista.Us',
    avatar: 'https://img.freepik.com/free-photo/person-woman-smiling-studio-portrait_1303-2281.jpg?semt=ais_items_boosted&w=740',
    review: `"Airvoir turned my business trip into a seamless and luxurious experience. Impeccable service, personalized attention, and truly a world-class flight. Highly recommend!"`,
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    role: 'Marketing Director, SkyTech',
    avatar: 'https://photosbulk.com/wp-content/uploads/instagram-profile-picture-for-girls-cartoon-aesthetic_50.webp',
    review: `"The staff was courteous, the seating was luxurious, and the in-flight dining exceeded expectations. This is how flying should always feel!"`,
    rating: 5,
  },
  {
    name: 'Darlene Robertson',
    role: 'Event Manager, SphereX',
    avatar: 'https://img.freepik.com/free-photo/young-businesswoman-smiling-camera_23-2149455602.jpg',
    review: `"Our corporate team had an outstanding experience. Booking was easy, and everything from takeoff to landing was handled professionally."`,
    rating: 4,
  },
  {
    name: 'Ralph Edwards',
    role: 'Travel Blogger, MilesAndMore',
    avatar: 'https://img.freepik.com/free-photo/portrait-young-man_23-2149172203.jpg',
    review: `"A solid premium experience. The entertainment options could use a refresh, but everything else was top-tier."`,
    rating: 4,
  },
  {
    name: 'Annette Black',
    role: 'Entrepreneur',
    avatar: 'https://img.freepik.com/free-photo/cheerful-young-woman-with-curly-hair_23-2147615955.jpg',
    review: `"From the moment I stepped on board, I felt like a VIP. Worth every penny!"`,
    rating: 5,
  },
  {
    name: 'Courtney Henry',
    role: 'Tech Analyst, NovaData',
    avatar: 'https://img.freepik.com/free-photo/young-man-posing-isolated_273609-18750.jpg',
    review: `"Good service, but the flight was slightly delayed. Still, the comfort and amenities made up for it."`,
    rating: 4,
  },
  {
    name: 'Jacob Jones',
    role: 'Digital Nomad',
    avatar: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
    review: `"Hands down the best flight I’ve taken this year. Clean, calm, and very classy."`,
    rating: 5,
  },
  {
    name: 'Jenny Wilson',
    role: 'Creative Director, Lumen Studios',
    avatar: 'https://img.freepik.com/free-photo/smiling-young-woman-posing-isolated_273609-12248.jpg',
    review: `"The perfect blend of luxury and efficiency. Loved the seamless check-in and boarding process."`,
    rating: 5,
  },
];


  const allTestimonials = [...testimonials, ...testimonials]; 

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 text-center overflow-hidden">
      <p className="text-sm text-orange-400 font-medium mb-2">Testimonials</p>
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
        Reviews From <br className="hidden md:block" />
        Discerning Travelers.
      </h2>

  <div className="flex justify-center items-center gap-6 text-sm text-gray-700 mb-10">
  <img
    src="https://exportcomments.com/resources/content/images/2022/05/google-reviews-1-.png"
    alt="Google Reviews"
    width={64}
    height={64}
    className="object-contain"
  />
  <span className="text-base font-bold">4.5 <span className='text-yellow-400'>★</span></span>
</div>

      <div className="relative w-full overflow-hidden">
        <div className="scroll-row scroll-right">
          {allTestimonials.map((t, i) => (
            <div key={`top-${i}`} className="testimonial-card w-96">
              <div className="flex justify-start mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-6">{t.review}</p>
              <div className="flex items-center space-x-4 ">
                <img src={t.avatar} alt={t.name} className="rounded-full w-12 h-12 object-cover" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden mt-10">
        <div className="scroll-row scroll-left">
          {allTestimonials.map((t, i) => (
            <div key={`bottom-${i}`} className="testimonial-card w-96">
              <div className="flex justify-start mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-6">{t.review}</p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="rounded-full w-12 h-12 object-cover" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .scroll-row {
          display: flex;
          width: max-content;
          animation-duration: 40s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .scroll-right {
          animation-name: scrollRight;
        }

        .scroll-left {
          animation-name: scrollLeft;
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-card {
          margin: 1rem;
          padding: 1.5rem;
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          flex-shrink: 0;
          transition: box-shadow 0.3s;
        }

        .testimonial-card:hover {
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
}
