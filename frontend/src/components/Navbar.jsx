// src/components/Navbar.jsx

import React, { useState } from 'react';
import { HiMiniChevronDown } from "react-icons/hi2";
import { BiCart } from "react-icons/bi";
import { TiUserOutline } from "react-icons/ti";

const Navbar = () => {
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setDropdownOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setDropdownOpenIndex(null);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center py-2">
          {/* Left Side Links */}
          <div className="flex space-x-4">
            {['About', 'Create', 'Discover', 'Learn', 'Ask'].map((link, index) => (
              <div
                className="relative"
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md font-medium">
                  {link}
                  {/* Add ChevronDown icon to links that have dropdowns */}
                  {([0, 2, 3, 4].includes(index)) && (
                    <HiMiniChevronDown className="ml-1 h-5 w-5 text-gray-700" />
                  )}
                </button>
                {/* Dropdown Menu */}
                {([0, 2, 3, 4].includes(index) && dropdownOpenIndex === index) && (
                  <div className="absolute left-0 mt-2 w-48 bg-[#333] shadow-lg rounded-md">
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Sub Link 1</a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Sub Link 2</a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Sub Link 3</a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0">
            <img src="icons/knitup_logo.webp" alt="knitup_logo" className="h-8 w-auto" />
          </div>

          {/* Right Side Icons and Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-gray-700  border border-gray-400 text-white px-3 py-1 rounded-md font-medium">Try Now</button>
            <button className="bg-white  border border-black text-black px-3 py-1 rounded-md font-medium">Get In Touch</button>
            <div className="text-gray-700 hover:text-gray-900 px-1 py-2 rounded-md font-medium cursor-pointer">
              <BiCart className='w-6 h-6' />
            </div>
            <div className="text-gray-700 hover:text-gray-900 px-1 py-2 rounded-md font-medium cursor-pointer">
              <TiUserOutline className='w-6 h-6' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
