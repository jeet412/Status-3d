import { useState } from 'react';
import NavigationPanel from './NavigationPanel';

const SecondNavbar = () => {
  const [activePanel, setActivePanel] = useState(null);

  const subNavLinks = [
    'Holiday Gifting',
    'New Arrivals',
    'Best-Sellers',
    'Clothing',
    'Tops & Sweaters',
    'Pants & Jeans',
    'Outerwear',
    'Shoes & Bags',
    'Sale',
  ];

  const handleClick = (label) => {
    setActivePanel((prev) => (prev === label ? null : label));
  };

  return (
    <div className="relative z-30">
      {/* Second Navbar */}
      <div className="w-full border-b border-gray-200 bg-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 overflow-x-auto no-scrollbar">
          <div className="flex gap-6 min-w-max whitespace-nowrap justify-center">
            {subNavLinks.map((label, idx) => (
              <button
                key={idx}
                onClick={() => handleClick(label)}
                className={`transition-all duration-200 ${
                  activePanel === label
                    ? 'text-red-600'
                    : 'text-black hover:text-black'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sliding Navigation Panel Below the Second Navbar */}
      {activePanel && (
        <div className="absolute top-full left-0 w-full">
          <NavigationPanel active={activePanel} onClose={() => setActivePanel(null)} />
        </div>
      )}
    </div>
  );
};

export default SecondNavbar;
