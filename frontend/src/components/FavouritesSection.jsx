import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const favourites = [
  { name: 'White Linen Shirt', image: '/assets/favourites/shirt.webp' },
  { name: 'Classic Navy Blazer', image: '/assets/favourites/shirt.webp' },
  { name: 'Premium Cotton Trousers', image: '/assets/favourites/shirt.webp' },
  { name: 'Elegant Kurta Set', image: '/assets/favourites/shirt.webp' },
  { name: 'Soft Grey Polo', image: '/assets/favourites/shirt.webp' },
  { name: 'Soft Grey Polo', image: '/assets/favourites/shirt.webp' },
  { name: 'Soft Grey Polo', image: '/assets/favourites/shirt.webp' },
  { name: 'Soft Grey Polo', image: '/assets/favourites/shirt.webp' },
  { name: 'Soft Grey Polo', image: '/assets/favourites/shirt.webp' },
  { name: 'Tailored Black Suit', image: '/assets/favourites/shirt.webp' },
];

const FavouritesSection = () => {
  const scrollRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsPerView = 4;
  const totalDots = Math.ceil(favourites.length / cardsPerView);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.firstChild.offsetWidth + 16; // width + gap
    container.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstChild.offsetWidth + 16;
    const index = Math.round(scrollLeft / (cardWidth * cardsPerView));
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-xl text-center mb-8 text-gray-800">
        Our Favourites Just for You
      </h2>

      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 text-gray-600 hover:text-black"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-4 px-8"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {favourites.map((item, idx) => (
            <div
            key={idx}
            className="w-[220px] flex-shrink-0 scroll-snap-align-start flex flex-col items-center"
          >
            <div className="w-full h-[280px] overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
          
            <div className="mt-3 flex justify-between w-full px-1 text-sm text-gray-700">
              <span>{item.name}</span>
              <span className="text-gray-500">₹1,999</span>
            </div>
          </div>
          
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-gray-600 hover:text-black"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalDots }).map((_, idx) => (
          <div
            key={idx}
            className={`w-1 h-1 rounded-full transition-all duration-200 ${
              idx === activeIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FavouritesSection;
