import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[700px]">
      <img
        src="https://prd-resource.knitup.io/home/webp/header_desktop/Flag_Desktop.webp"
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="text-white p-4 md:p-8">
          <h1 className="text-2xl md:text-6xl font-bold">A Personal Knitting Factory For Anyone, Anywhere</h1>
          <p className="mt-4 text-md md:text-3xl">
            Deliver in just 3 weeks. Starting with an order of one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
