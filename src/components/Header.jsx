import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-40">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
              San Diego Goalball
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-nearBlack hover:text-primary font-medium transition-colors duration-200 ${isActive ? 'text-primary' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle main menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}
        id="mobile-menu"
      >
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-4 text-base font-medium text-nearBlack hover:text-primary hover:bg-gray-50 rounded-md transition-colors ${isActive ? 'text-primary bg-gray-50' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
