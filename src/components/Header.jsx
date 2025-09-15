import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = ({ onBookingClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-rose-50 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+234 704 444 4444</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>123 Lagos City, Victoria Island</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <span>Mon-Sat: 9AM-7PM | Sun: 10AM-5PM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-rose-600">Luxe Salon</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#gallery" className="text-gray-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">
                Gallery
              </a>
              <a href="#about" className="text-gray-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-900 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Button 
              onClick={onBookingClick}
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-rose-600 focus:outline-none focus:text-rose-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 hover:text-rose-600 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#services" className="text-gray-900 hover:text-rose-600 block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="#gallery" className="text-gray-900 hover:text-rose-600 block px-3 py-2 text-base font-medium">
                Gallery
              </a>
              <a href="#about" className="text-gray-900 hover:text-rose-600 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-900 hover:text-rose-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button 
                  onClick={onBookingClick}
                  className="bg-rose-600 hover:bg-rose-700 text-white w-full"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

