import React from 'react';

const Galleries = () => {
  const galleryImages = [
    { src: '/Assets/image1.png', alt: 'Hostel Exterior' }, // Update path here
    // { src: '/Assets/image2.jpg', alt: 'Hostel Room' },
    // { src: '/Assets/image3.jpg', alt: 'Mess Hall' },
    // { src: '/Assets/image4.jpg', alt: 'Study Area' },
    // { src: '/Assets/image5.jpg', alt: 'Gym' },
    // { src: '/Assets/image6.jpg', alt: 'Common Room' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Punjab Technical University Hostel Gallery
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Explore the hostel facilities and see where our students live, study, and relax!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              className="transform group-hover:scale-110 transition-transform duration-500 w-full h-64 object-cover"
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galleries;
