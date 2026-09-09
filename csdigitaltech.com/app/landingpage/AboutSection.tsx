import heroBg1 from '../../public/digitalmarketing-new.png';
import heroBg2 from '../../public/technology-two.png';
import heroBg3 from '../../public/consulting-two.png';

const serviceData = [
  {
    id: 1,
    title: "Digital",
    image: heroBg1,
    description: "Digital transformation and innovative solutions",
  },
  {
    id: 2,
    title: "Technology",
    image: heroBg2,
    description: "Cutting-edge technology implementations",
  },
  {
    id: 3,
    title: "Consulting",
    image: heroBg3,
    description: "Expert consulting for business growth",
  },
];

const ServiceCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto lg:px-0 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="group relative h-72 [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-lg">
                  <div
                    className="w-full h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${service.image.src})` }}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-3xl font-bold text-white font-poppins text-center px-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg overflow-hidden shadow-lg">
                  <div className="w-full h-full flex items-center justify-center p-6 bg-[#262051] text-white text-center">
                    <p className="text-lg leading-relaxed">{service.description}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function AboutSection() {
  return (
    <>
      
      <ServiceCards />
    </>
  );
}
