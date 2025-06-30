import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const userLooks = [
  { image: '/assets/status/img.jpg' },
  { image: '/assets/status/img.jpg' },
  { image: '/assets/status/img.jpg' },
  { image: '/assets/status/img.jpg' },
  { image: '/assets/status/img.jpg' },
  { image: '/assets/status/img.jpg' },
  { image: '/assets/status/img.jpg' },
  { image: '/assets/status/img.jpg' },
];

const StatusOnYouSection = () => {
  const scrollRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsPerView = 4;
  const totalDots = Math.ceil(userLooks.length / cardsPerView);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.firstChild.offsetWidth + 16;
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
<section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white text-gray-800">
  {/* Dark horizontal line above the heading */}
  <hr className="border-t border-gray-800 mb-12" />      {/* Section Heading */}
      <h2 className="text-2xl text-center mb-2">Status On You</h2>
      <p className="text-sm text-center text-gray-600 mb-4">
        Share your latest look with Status for a chance to be featured
      </p>

      {/* Upload Button */}
      <div className="text-center mb-12">
        <a
          href="/upload"
          className="inline-block underline text-sm text-gray-700 hover:text-black"
        >
          Upload Your Photo
        </a>
      </div>

      {/* Scrollable Image Gallery */}
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 text-gray-600 hover:text-black"
        >
          <FaChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-4 px-8"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {userLooks.map((item, idx) => (
           <div
           key={idx}
           className="w-[220px] h-[360px] flex-shrink-0 scroll-snap-align-start overflow-hidden bg-gray-100"
         >
           <img
             src={item.image}
             alt={`Look ${idx + 1}`}
             className="w-full h-full object-cover"
           />
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

export default StatusOnYouSection;
