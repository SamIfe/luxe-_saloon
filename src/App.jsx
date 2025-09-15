import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import SocialMediaChat from './components/SocialMediaChat';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="App">
      <Header onBookingClick={openBooking} />
      <Hero onBookingClick={openBooking} />
      <Services onBookingClick={openBooking} />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <BookingForm isOpen={isBookingOpen} onClose={closeBooking} />
      <SocialMediaChat />
    </div>
  );
}

export default App;
