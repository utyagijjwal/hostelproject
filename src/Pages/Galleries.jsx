import React from 'react';
import Image1 from '../Assests/image1.png';
// import Image2 from '/Assets/image2.jpg';
// import Image3 from '/Assets/image3.jpg';
// import Image4 from '/Assets/image4.jpg';
// import Image5 from '/Assets/image5.jpg';
// import Image6 from '/Assets/image6.jpg';

const Galleries = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Punjab Technical University Hostel Gallery
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Explore the hostel facilities and see where our students live, study, and relax!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            className="transform group-hover:scale-110 transition-transform duration-500 w-full h-64 object-cover"
            src={Image1}
            alt="Hostel Exterior"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-lg">Hostel Exterior</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            className="transform group-hover:scale-110 transition-transform duration-500 w-full h-64 object-cover"
            src={Image1}
            alt="Hostel Exterior"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-lg">Hostel Room</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            className="transform group-hover:scale-110 transition-transform duration-500 w-full h-64 object-cover"
            src={Image1}
            alt="Hostel Exterior"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-lg">Mess Hall</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            className="transform group-hover:scale-110 transition-transform duration-500 w-full h-64 object-cover"
            src={Image1}
            alt="Hostel Exterior"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-lg">Study Area</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            className="transform group-hover:scale-110 transition-transform duration-500 w-full h-64 object-cover"
            src={Image1}
            alt="Hostel Exterior"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-lg">Gym</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
          <img
            className="transform group-hover:scale-110 transition-transform duration-500 w-full h-64 object-cover"
            src={Image1}
            alt="Hostel Exterior"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-lg">Common Room</p>
          </div>
        </div>
        {/* Repeat the above block for other images */}
      </div>
    </div>
  );
};

export default Galleries;
