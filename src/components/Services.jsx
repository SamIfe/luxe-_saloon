import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Scissors, Palette, Sparkles, Crown, Clock, DollarSign } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Hair Cutting & Styling",
      description: "Professional cuts and styling for all hair types. From classic to trendy, we create the perfect look for you.",
      price: "From ₦45",
      duration: "45-60 min",
      features: ["Consultation", "Wash & Cut", "Blow Dry", "Styling"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Hair Coloring",
      description: "Expert color services including highlights, balayage, and full color transformations using premium products.",
      price: "From ₦85",
      duration: "2-3 hours",
      features: ["Color Consultation", "Professional Products", "Toning", "Aftercare"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Hair Treatments",
      description: "Nourishing treatments to restore and maintain healthy, beautiful hair with lasting results.",
      price: "From ₦65",
      duration: "60-90 min",
      features: ["Deep Conditioning", "Keratin Treatment", "Scalp Massage", "Hair Mask"]
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Special Occasions",
      description: "Elegant updos and special event styling for weddings, proms, and other memorable occasions.",
      price: "From ₦95",
      duration: "90-120 min",
      features: ["Trial Run", "Custom Styling", "Hair Accessories", "Touch-ups"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury hair and beauty services delivered by our team of expert stylists 
            using only the finest products and latest techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-rose-600 text-white p-3 rounded-xl flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Price and Duration */}
                  <div className="flex items-center space-x-6 mb-4">
                    <div className="flex items-center space-x-2 text-rose-600">
                      {/* <DollarSign className="w-4 h-4" /> */}
                      <span className="font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                    Book This Service
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Services
            </h3>
            <p className="text-gray-600">
              We offer a complete range of beauty services to help you look and feel your best.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Eyebrow Shaping", price: "₦25" },
              { name: "Eyelash Extensions", price: "₦120" },
              { name: "Facial Treatments", price: "₦75" },
              { name: "Manicure & Pedicure", price: "₦55" },
              { name: "Makeup Application", price: "₦65" },
              { name: "Hair Extensions", price: "₦200+" },
              { name: "Scalp Treatments", price: "₦45" },
              { name: "Bridal Packages", price: "₦350+" }
            ].map((service, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl">
                <div className="font-semibold text-gray-900 mb-1">{service.name}</div>
                <div className="text-rose-600 font-medium">{service.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Look?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the luxury and expertise that sets us apart. 
            Our team is ready to help you achieve your beauty goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8">
              View Full Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

