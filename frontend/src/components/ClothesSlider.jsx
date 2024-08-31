// src/PhotoSlider.js
import React, { useState } from 'react';
import './ClothesSlider.css'; // Optional for custom styling

const images = [
  'https://via.placeholder.com/600x400?text=Image+1',
  'https://via.placeholder.com/600x400?text=Image+2',
  'https://via.placeholder.com/600x400?text=Image+3',
  'https://via.placeholder.com/600x400?text=Image+4',
  'https://via.placeholder.com/600x400?text=Image+5',
  'https://via.placeholder.com/600x400?text=Image+6',
  'https://via.placeholder.com/600x400?text=Image+7',
  'https://via.placeholder.com/600x400?text=Image+8',
  'https://via.placeholder.com/600x400?text=Image+9',
  'https://via.placeholder.com/600x400?text=Image+10'
];

const ClothesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + images.length) % images.length);
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);
  
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex overflow-hidden relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 z-10"
        >
          &#10094;
        </button>
        
        <div className="flex transition-transform duration-500 ease-in-out">
          {visibleImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-1/3">
              <img src={image} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 z-10"
        >
          &#10095;
        </button>
      </div>
      
      <div className="bg-black text-white p-4 text-center mt-4">
        <p>Your text here</p>
      </div>
      
      <button
        className="absolute bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-400 flex items-center justify-center"
        title="User Profile"
      >
       Hello
      </button>
    </div>
  );
};

export default ClothesSlider;
