const sections = [
    {
      title: 'New Arrivals',
      image: '/assets/featured/img.jpg',
      link: '/new-arrivals',
    },
    {
      title: 'Best Sellers',
      image: '/assets/featured/img.jpg',
      link: '/best-sellers',
    },
    {
      title: 'Holiday Outfit',
      image: '/assets/featured/img.jpg',
      link: '/holiday',
    },
  ];
  
  const FeaturedSections = () => {
    return (
      <section className="w-full py-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <a
              key={idx}
              href={section.link}
              className="relative block w-full h-[400px] overflow-hidden group"
            >
              {/* Background Image */}
              <img
                src={section.image}
                alt={section.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
  
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
  
              {/* Centered Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-white text-3xl md:text-2xl  tracking-wide mb-4 uppercase drop-shadow">
                  {section.title}
                </h3>
                <span className="inline-block bg-white text-black text-sm font-semibold px-6 py-2 hover:bg-gray-100 transition rounded-none tracking-wider shadow-md">
                  Shop Now
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedSections;
  