// src/components/ModelsSlider.jsx
import React from 'react';

const ModelsSlider = () => {
  // Replace with actual slider component or library
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-4">Models</h2>
      <div className="flex space-x-4 overflow-x-scroll">
        {/* Placeholder images */}
        <img src="https://via.placeholder.com/150" alt="Models" className="w-1/3" />
        <img src="https://via.placeholder.com/150" alt="Models" className="w-1/3" />
        <img src="https://via.placeholder.com/150" alt="Models" className="w-1/3" />
      </div>
    </div>
  );
};

export default ModelsSlider;
