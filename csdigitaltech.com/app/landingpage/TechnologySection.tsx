import imgi_2_flipbox1 from '../assets/imgi_48_fun-fact1.jpg';
import imgi_3_flipbox2 from '../assets/imgi_49_fun-fact2.jpg';

export default function TechnologySection() {
  return (
    <section className=" bg-white ">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 lg:h-[600px]">
          {/* Panel 1 - Office Image with Blue Gradient */}
        <div className="relative overflow-hidden h-64 md:h-auto">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${imgi_2_flipbox1.src})`,
                filter: 'grayscale(100%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-blue-500/30 to-blue-400/20"></div>
          </div>

          {/* Panel 2 - 45+ Countries */}
          <div className="bg-white lg:py-0 py-8 flex flex-col justify-center items-start text-left px-8 relative">
            <div className="lg:text-8xl text-6xl font-bold text-[#84B642] mb-2">45+</div>
            <div className="lg:text-4xl text-2xl font-bold text-gray-900 mb-2">Countries</div>
            <div className="lg:text-4xl text-2xl font-bold text-gray-900 mb-4">Worldwide</div>
            <div className="lg:text-lg text-sm text-gray-700 leading-relaxed">
              As an affordable offshore IT solutions provider and partner, we work with the clients across the global market.
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-gray-100 text-8xl font-bold opacity-10 -mb-4">
              45+
            </div>
          </div>

          {/* Panel 3 - Laptop Image with Purple Gradient */}
         <div className="relative overflow-hidden h-64 md:h-auto">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${imgi_3_flipbox2.src})`,
                filter: 'grayscale(100%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 via-purple-500/30 to-purple-400/20"></div>
          </div>

          {/* Panel 4 - 12+ Years */}
          <div className="bg-white lg:py-0 py-8 flex flex-col justify-center items-start text-left px-8 relative">
            <div className="lg:text-8xl text-6xl font-bold text-[#84B642] mb-2">16+</div>
            <div className="lg:text-4xl text-2xl font-bold text-gray-900 mb-2">Years of Excellence</div>
            {/* <div className="text-4xl font-bold text-gray-900 mb-2"></div> */}
            <div className="lg:text-lg text-sm text-gray-600 leading-relaxed mt-4">
              To succeed, every software solution must be deeply integrated into the existing tech environment.
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-gray-100 text-8xl font-bold opacity-10 -mb-4">
              12+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
