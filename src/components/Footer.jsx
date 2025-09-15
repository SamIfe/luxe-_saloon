import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-rose-400">Luxe Salon</h3>
            <p className="text-gray-300 leading-relaxed">
              Your premier destination for luxury hair and beauty services. 
              We're dedicated to helping you look and feel your absolute best.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white p-2">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white p-2">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-rose-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Hair Cutting & Styling
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Hair Coloring
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Hair Treatments
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Special Occasions
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-rose-400 transition-colors">
                  Beauty Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span className="text-gray-300">+234 704 444 4444</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span className="text-gray-300">hello@luxesalon.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Lagos City, Victoria Island<br />
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday</span>
                    <span className="text-white">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Tuesday</span>
                    <span className="text-white">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Wednesday</span>
                    <span className="text-white">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Thursday</span>
                    <span className="text-white">9:00 AM - 7:00 PM</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Friday</span>
                    <span className="text-white">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white">10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-white mb-4">Ready to Book?</h4>
              <p className="text-gray-300 mb-4">
                Schedule your appointment today and experience the luxury you deserve.
              </p>
              <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>&copy; {currentYear} Luxe Salon. All rights reserved.</span>
              <Heart className="w-4 h-4 text-rose-400" />
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

