import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503264116251-35a269479413')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">About PTU Hostel</h1>
          <p className="text-lg md:text-2xl mt-4">A Safe and Comfortable Stay for Future Engineers</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-red-600">Welcome to Punjab Technical University Hostel</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Our hostel provides the perfect environment for students to live, learn, and grow. We offer modern facilities,
            comfortable rooms, and a friendly community where students can thrive.
          </p>
        </div>

        {/* Hostel Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Modern Amenities</h3>
            <p className="text-gray-700">
              PTU Hostel is equipped with all the modern amenities to make your stay comfortable, including 24/7 water supply,
              Wi-Fi, and common rooms with recreational facilities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Mess and Dining</h3>
            <p className="text-gray-700">
              We provide a hygienic mess facility with nutritious meals served four times a day. Our dining area is spacious
              and can accommodate all hostel students at once.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Security and Safety</h3>
            <p className="text-gray-700">
              Security is our top priority. Our hostel has round-the-clock security personnel and surveillance cameras in all
              common areas to ensure a safe environment for students.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Events and Activities</h3>
            <p className="text-gray-700">
              At PTU Hostel, we believe in all-round development. We organize regular cultural events, sports competitions,
              and workshops to engage students outside of academics.
            </p>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="my-12">
          <h3 className="text-3xl font-bold text-center text-red-600 mb-8">Life at PTU Hostel</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img className="rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555255697-f0c90fddd3e1" alt="Hostel Exterior" />
            <img className="rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1524386322425-51bfc80b2600" alt="Mess and Dining Area" />
            <img className="rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1582719478176-c4edfa5b2664" alt="Student Events" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg text-center mt-12">
          <h3 className="text-3xl font-bold">Want to be a part of PTU Hostel?</h3>
          <p className="mt-4 text-lg">Contact us for admission and accommodation details.</p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-white text-red-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
