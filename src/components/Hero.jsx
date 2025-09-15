import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Calendar, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-rose-50 to-pink-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="text-rose-600 block">Beauty</span>
                Experience
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover luxury hair and beauty services in our modern salon. 
                Our expert stylists create stunning looks tailored just for you.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg">
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="bg-rose-600 p-2 rounded-full">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-rose-600 p-2 rounded-full">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-rose-200 to-pink-300 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-6xl mb-4">💇‍♀️</div>
                    <p className="text-lg font-medium">Professional Styling</p>
                    <p className="text-sm">Expert Hair & Beauty Services</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Floating booking card */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <div className="text-sm text-gray-600 mb-2">Quick Booking</div>
          <div className="text-lg font-semibold text-gray-900 mb-3">Available Today</div>
          <Button size="sm" className="bg-rose-600 hover:bg-rose-700 text-white w-full">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

