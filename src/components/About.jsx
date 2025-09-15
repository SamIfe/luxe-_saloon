import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Award, Heart, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "2000+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Years Experience" },
    { icon: <Heart className="w-8 h-8" />, number: "4.9", label: "Average Rating" },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Online Booking" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Master Stylist & Owner",
      experience: "15+ years",
      specialties: ["Color Specialist", "Bridal Styling", "Hair Extensions"]
    },
    {
      name: "Maria Rodriguez",
      role: "Senior Stylist",
      experience: "10+ years",
      specialties: ["Cutting Expert", "Keratin Treatments", "Balayage"]
    },
    {
      name: "Emma Chen",
      role: "Beauty Specialist",
      experience: "8+ years",
      specialties: ["Facial Treatments", "Lash Extensions", "Makeup Artist"]
    },
    {
      name: "Jessica Williams",
      role: "Hair Stylist",
      experience: "5+ years",
      specialties: ["Modern Cuts", "Color Correction", "Styling"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Luxe Salon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where beauty meets expertise. We're passionate about helping you look and feel your absolute best 
            through personalized service and exceptional results.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2009, Luxe Salon has been a cornerstone of beauty and style in our community. 
              What started as a small neighborhood salon has grown into a premier destination for those 
              seeking exceptional hair and beauty services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our philosophy is simple: every client deserves to feel beautiful and confident. We combine 
              the latest techniques with timeless artistry, using only the finest products to ensure 
              stunning, long-lasting results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From the moment you walk through our doors, you'll experience the warmth and professionalism 
              that sets us apart. Our team of expert stylists is dedicated to understanding your unique 
              style and helping you achieve your beauty goals.
            </p>
            
            <div className="pt-4">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8">
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-rose-200 to-pink-300 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">🏪</div>
                <p className="text-xl font-medium">Our Beautiful Salon</p>
                <p className="text-sm">Modern, Clean & Welcoming</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-200 rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-rose-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented stylists bring years of experience and passion to every service. 
              Each team member is committed to staying current with the latest trends and techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Team member image placeholder */}
                <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2">👩‍💼</div>
                    <p className="text-sm font-medium">{member.name}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-rose-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span 
                          key={specialtyIndex}
                          className="bg-rose-100 text-rose-700 px-2 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h3>
            <p className="text-gray-600">
              The principles that guide everything we do at Luxe Salon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Passion</h4>
              <p className="text-gray-600">
                We're passionate about beauty and dedicated to helping every client feel their best.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in every service, using only the finest products and techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Community</h4>
              <p className="text-gray-600">
                We're proud to be part of this community and committed to giving back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

