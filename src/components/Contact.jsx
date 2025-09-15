import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+234 704 444 4444",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "hello@luxesalon.com",
      action: "Send Email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "123 Lagos City, Victoria Island",
      action: "Get Directions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: "Mon-Sat: 9AM-7PM | Sun: 10AM-5PM",
      action: "View Schedule"
    }
  ];

  const socialLinks = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "WhatsApp",
      handle: "+234 704 444 4444",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      handle: "@luxesalon",
      color: "bg-pink-500 hover:bg-pink-600"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      handle: "Luxe Salon",
      color: "bg-blue-500 hover:bg-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to book your appointment or have questions about our services? 
            We'd love to hear from you. Reach out through any of our convenient contact methods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="+234 704 444 4444"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Hair Cut & Styling</option>
                    <option value="coloring">Hair Coloring</option>
                    <option value="treatments">Hair Treatments</option>
                    <option value="special">Special Occasions</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="Tell us about your needs or any questions you have..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-rose-600 text-white p-3 rounded-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600 mb-2">{info.details}</p>
                      <Button variant="outline" size="sm" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                        {info.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media & Chat */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Connect With Us
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-rose-300 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`₦{social.color} text-white p-2 rounded-lg`}>
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{social.name}</div>
                        <div className="text-sm text-gray-600">{social.handle}</div>
                      </div>
                    </div>
                    <Button size="sm" className={`₦{social.color} text-white`}>
                      Chat Now
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-rose-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Quick Response:</strong> We typically respond to messages within 1-2 hours during business hours. 
                  For immediate assistance, please call us directly.
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Find Us
              </h3>
              
              <div className="aspect-video bg-gradient-to-br from-rose-200 to-pink-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">123 Lagos City, Victoria Island</p>
                </div>
              </div>
              
              <div className="mt-4 flex space-x-4">
                <Button variant="outline" className="flex-1 border-rose-600 text-rose-600 hover:bg-rose-50">
                  Get Directions
                </Button>
                <Button className="flex-1 bg-rose-600 hover:bg-rose-700 text-white">
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-rose-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
            For urgent booking requests or last-minute appointments, 
            call us directly or send a WhatsApp message for the fastest response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600">
              <Phone className="w-5 h-5 mr-2" />
              Call +234 704 444 4444
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

