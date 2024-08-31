// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutOne from './components/AboutOne';
import ClothesSlider from './components/ClothesSlider';
import ModelsSlider from './components/ModelsSlider';
import LogosSlider from './components/LogosSlider';
import LongTextSection from './components/LongTextSection';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './index.css';  

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutOne />
      <ClothesSlider />
      <ModelsSlider />
      <LogosSlider />
      <LongTextSection />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
