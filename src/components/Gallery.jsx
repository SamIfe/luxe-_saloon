import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'cuts', name: 'Hair Cuts' },
    { id: 'color', name: 'Hair Color' },
    { id: 'styling', name: 'Styling' },
    { id: 'treatments', name: 'Treatments' }
  ];

  // Placeholder gallery items - in a real app, these would be actual images
  const galleryItems = [
    { id: 1, category: 'cuts', title: 'Modern Bob Cut', description: 'Sleek and sophisticated bob with subtle layers' },
    { id: 2, category: 'color', title: 'Balayage Highlights', description: 'Natural-looking highlights with seamless blending' },
    { id: 3, category: 'styling', title: 'Elegant Updo', description: 'Perfect for special occasions and events' },
    { id: 4, category: 'cuts', title: 'Layered Long Hair', description: 'Flowing layers that add movement and volume' },
    { id: 5, category: 'color', title: 'Platinum Blonde', description: 'Bold transformation with professional care' },
    { id: 6, category: 'treatments', title: 'Keratin Treatment', description: 'Smooth, frizz-free results that last' },
    { id: 7, category: 'styling', title: 'Beach Waves', description: 'Effortless, natural-looking waves' },
    { id: 8, category: 'cuts', title: 'Pixie Cut', description: 'Chic and modern short style' },
    { id: 9, category: 'color', title: 'Ombre Effect', description: 'Gradual color transition from dark to light' },
    { id: 10, category: 'styling', title: 'Vintage Curls', description: 'Classic Hollywood glamour styling' },
    { id: 11, category: 'treatments', title: 'Deep Conditioning', description: 'Intensive moisture restoration' },
    { id: 12, category: 'cuts', title: 'Shag Cut', description: 'Trendy textured layers with modern edge' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning transformations and see the artistry 
            that goes into every service we provide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-2 ₦{
                activeCategory === category.id 
                  ? "bg-rose-600 hover:bg-rose-700 text-white" 
                  : "border-rose-600 text-rose-600 hover:bg-rose-50"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => openModal(item)}
            >
              <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for actual image */}
                <div className="text-center text-gray-600 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl mb-2">✨</div>
                  <p className="text-sm font-medium">{item.title}</p>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm font-medium">View Details</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-6xl mb-4">✨</div>
                    <p className="text-xl font-medium">{selectedImage.title}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {selectedImage.description}
                  </p>
                  <div className="space-y-4">
                    <Button className="bg-rose-600 hover:bg-rose-700 text-white w-full">
                      Book Similar Service
                    </Button>
                    <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50 w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Love What You See?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to get your own stunning transformation? Book an appointment with our expert stylists 
            and let us create something beautiful just for you.
          </p>
          <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8">
            Schedule Your Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

