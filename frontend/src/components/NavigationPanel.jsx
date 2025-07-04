import { useEffect, useState } from 'react';

const exampleLinks = {
  'Holiday Gifting': {
    left: {
      heading: 'Highlights',
      links: [
        'Shop All New Arrivals',
        'The Gift Guide',
        'New Bottoms',
        'New Tops',
        'T-Shirt Bundles',
        'Under $100',
      ],
    },
    right: [
      { image: '/assets/secondnav/shirt.webp', title: 'The Holiday Outfit Edit' },
      { image: '/assets/secondnav/shirt.webp', title: 'Giftable Sweaters' },
    ],
  },
  'New Arrivals': {
    left: { heading: 'Latest Trends', links: ['Just Dropped', 'Top Picks', 'Coming Soon'] },
    right: [
      { image: '/assets/secondnav/shirt.webp', title: 'New Suits' },
      { image: '/assets/secondnav/shirt.webp', title: 'Linen Casuals' },
    ],
  },
  Shirts: {
    left: { heading: 'Formals', links: ['Slim Fit', 'Classic', 'Checks'] },
    right: [
      { image: '/assets/secondnav/shirt.webp', title: 'Business Shirts' },
      { image: '/assets/secondnav/shirt.webp', title: 'Evening Wear' },
    ],
  },
};

const NavigationPanel = ({ active, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (active) setVisible(true);
    else setTimeout(() => setVisible(false), 300);
  }, [active]);

  if (!active && !visible) return null;
  const content = exampleLinks[active];

  return (
    <div
      className={`relative z-40 bg-white shadow-md transition-all duration-300 ease-in-out ${
        active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      style={{ fontFamily: "'Poppins', sans-serif", marginTop: '1px' }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-xl text-gray-500 hover:text-black transition"
        title="Close"
      >
        ✕
      </button>

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 space-y-4">
          <h4 className="font-medium uppercase text-xs text-gray-500 tracking-wide">
            {content?.left.heading}
          </h4>
          <ul className="text-sm space-y-2">
            {content?.left.links.map((link, i) => (
              <li key={i}>
                <a href="#" className="text-gray-800 hover:underline transition-all">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-4">
          {content?.right.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="relative group overflow-hidden border border-gray-200 bg-white rounded-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-800 bg-white bg-opacity-80 backdrop-blur-sm">
                <span>{item.title}</span>
                <span className="text-lg">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationPanel;
