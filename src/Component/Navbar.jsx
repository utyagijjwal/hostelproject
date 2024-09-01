import React, { useState } from "react";
import {Link } from "react-router-dom"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="#">PTU Hostel Website</a>
        </div>

        {/* Menu Toggle Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`md:flex items-center ${isOpen ? "block" : "hidden"}`}>
          <ul className="md:flex md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0">
            <Link
              to="/"
                className="text-white text-lg hover:bg-red-700 py-2 px-4 rounded-md transition duration-300"
              >
                Home
              </Link>
            
            <Link
              to="/about"
                className="text-white text-lg hover:bg-red-700 py-2 px-4 rounded-md transition duration-300"
              >
                About Us
              </Link>
            
            <Link
              to="/galleries"
                className="text-white text-lg hover:bg-red-700 py-2 px-4 rounded-md transition duration-300"
              >
                Galleries
             
            </Link>
            <Link
              to="/contact"
                
                className="text-white text-lg hover:bg-red-700 py-2 px-4 rounded-md transition duration-300"
              >
                Contact Us
              </Link>
            
          </ul>
        </div>

        {/* Register and Login Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
          to="/register"
           className="bg-white text-red-600 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300">
            Register
          </Link>
          <Link
          to="/login"
          className="bg-white text-red-600 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300">
            Login
          </Link>
        </div>
      </div>

      {/* Register and Login Buttons for Mobile */}
      {isOpen && (
        <div className="mt-4 space-y-4 md:hidden">
          <Link 
          to="/register"
          className="w-full bg-white text-red-600 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300">
            Register
          </Link>
          <Link 
          to="/login"
          className="w-full bg-white text-red-600 font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
