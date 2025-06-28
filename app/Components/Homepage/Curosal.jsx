'use client';

const logos = [
  'https://img.freepik.com/premium-vector/traveling-logo-design_745595-734.jpg?semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-vector/traveling-logo-design_745595-734.jpg?semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-vector/traveling-logo-design_745595-734.jpg?semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-vector/traveling-logo-design_745595-734.jpg?semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-vector/traveling-logo-design_745595-734.jpg?semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-vector/traveling-logo-design_745595-734.jpg?semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-vector/traveling-logo-design_745595-734.jpg?semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-vector/traveling-logo-design_745595-734.jpg?semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-vector/traveling-logo-design_745595-734.jpg?semt=ais_hybrid&w=740',
  '/logos/logo10.png',
  '/logos/logo11.png',
  '/logos/logo12.png',
];

export default function LogoCarousel() {
  return (
    <div className=" overflow-hidden bg-white py-20 max-w-7xl mx-auto">
      <div className="relative">
        <div className="animate-slide flex gap-12 w-[200%]">
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
