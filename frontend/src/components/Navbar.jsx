import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SecondNavbar from './SecondNavbar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const navLinks = ['Home', 'Formals', 'Fabrics', 'About', 'Contact'];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Set active section based on URL path
    const path = location.pathname.toLowerCase();
    if (path === '/' || path === '/home') setActiveSection('Home');
    else if (path.includes('about')) setActiveSection('About');
    else if (path.includes('contact')) setActiveSection('Contact');
    else if (path.includes('formals')) setActiveSection('Formals');
    else if (path.includes('fabrics')) setActiveSection('Fabrics');
  }, [location]);

  const handleClick = (link) => {
    setActiveSection(link);
    if (isMobile) setMenuOpen(false); // Close mobile menu on click
  };

  return (
    <header className="w-full border-b border-gray-200">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 w-full relative">
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden text-2xl transition duration-300"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          {navLinks.map((link) =>
            link === 'Home' || link === 'About' || link === 'Contact' ? (
              <Link
                key={link}
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                onClick={() => handleClick(link)}
                className={`transition duration-200 ${
                  activeSection === link ? 'underline underline-offset-4' : 'hover:underline'
                }`}
              >
                {link}
              </Link>
            ) : (
              <button
                key={link}
                onClick={() => handleClick(link)}
                className={`transition duration-200 ${
                  activeSection === link ? 'underline underline-offset-4' : 'hover:underline'
                }`}
              >
                {link}
              </button>
            )
          )}
        </nav>

        {/* Logo */}
        <div className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2">
          CozyCloth
        </div>

        {/* Right Icons */}
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

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-b border-gray-100 bg-white text-sm">
          <div className="flex justify-center gap-6 px-4 py-2 whitespace-nowrap">
            {navLinks.map((link) =>
              link === 'Home' || link === 'About' || link === 'Contact' ? (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  onClick={() => handleClick(link)}
                  className={`transition duration-300 ${
                    activeSection === link ? 'underline underline-offset-4' : 'hover:underline'
                  }`}
                >
                  {link}
                </Link>
              ) : (
                <button
                  key={link}
                  onClick={() => handleClick(link)}
                  className={`transition duration-300 ${
                    activeSection === link ? 'underline underline-offset-4' : 'hover:underline'
                  }`}
                >
                  {link}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* Dependent SecondNavbar */}
      <SecondNavbar primary={activeSection} />
    </header>
  );
};

export default Navbar;
