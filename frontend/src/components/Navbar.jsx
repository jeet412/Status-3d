import { useState, useEffect } from 'react';
import NavigationPanel from './NavigationPanel';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [activeNavPanel, setActiveNavPanel] = useState(null);

  const navLinks = [
    { label: 'Home', value: 'home' },
    { label: 'Formals', value: 'formals' },
    { label: 'Fabrics', value: 'fabrics' },
    { label: 'Blog', value: 'blog' },
    { label: 'Contact', value: 'contact' },
  ];

  const secondNavLinks = [
    'Holiday Gifting',
    'New Arrivals',
    'Best Sellers',
    'Clothing',
    'Tops & Sweaters',
    'Pants & Jeans',
    'Outerwear',
    'Shoes & Bags',
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setActiveSection(null);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <header className="w-full border-b border-gray-200">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 w-full relative">
        {/* Hamburger (left in mobile) */}
        <button
          onClick={handleToggleMenu}
          className="md:hidden text-2xl transition duration-300"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          {navLinks.map(link => (
            <button
              key={link.value}
              onClick={() => setActiveSection(link.value)}
              className={`relative transition-all duration-300 ease-in-out ${
                activeSection === link.value
                  ? 'underline underline-offset-4'
                  : 'hover:underline hover:underline-offset-4'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Center logo */}
        <div className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2">
          CozyCloth
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4 text-lg ml-auto">
          <button className="hover:text-gray-600" title="Search">
            <i className="fas fa-search" />
          </button>
          <a href="/account" className="hover:text-gray-600" title="Account">
            <i className="fas fa-user" />
          </a>
          <a href="/cart" className="hover:text-gray-600" title="Cart">
            <i className="fas fa-shopping-cart" />
          </a>
        </div>
      </div>

      {/* Mobile navbar links */}
      {menuOpen && (
        <div className="md:hidden w-full border-t border-b border-gray-100 bg-white text-sm transition-all duration-300 ease-in-out animate-fade-in">
          <div className="flex justify-center gap-6 px-4 py-2 whitespace-nowrap">
            {navLinks.map(link => (
              <button
                key={link.value}
                onClick={() => setActiveSection(link.value)}
                className={`transition-all duration-300 ease-in-out ${
                  activeSection === link.value
                    ? 'underline underline-offset-4'
                    : 'hover:underline hover:underline-offset-4'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}


      {/* Navigation Panel */}
      <NavigationPanel active={activeNavPanel} onClose={() => setActiveNavPanel(null)} />
    </header>
  );
};

export default Navbar;
