import React from "react";
import hostelImage from "../Assests/image.png"; // Adjust the path if necessary
import logo from "../Assests/PTULogo.gif"; // Import the logo image

const Heroscore = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hostelImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        {/* University Logo */}
        <img
          src={logo}
          alt="Punjab Technical University Logo"
          className="mb-4 w-30 h-30 md:w-40 md:h-40" // Adjusted width/height for a medium size
        />

        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to Punjab Technical University
        </h1>
        <h2 className="text-6xl md:text-8xl font-bold text-white ">
          Hostel 
        </h2>
      </div>
    </div>
  );
};

export default Heroscore;
