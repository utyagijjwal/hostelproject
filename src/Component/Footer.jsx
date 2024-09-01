import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Punjab Technical University</h3>
            <p className="text-gray-300">
              Established in 1997, Punjab Technical University (PTU) is one of the top
              technical universities in North India offering a wide variety of programs
              in Engineering, Management, and Applied Sciences.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#admission"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Admission Process
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-300">Punjab Technical University</p>
            <p className="text-gray-300">Jalandhar - Kapurthala Highway, Punjab</p>
            <p className="text-gray-300">Phone: +91-1234567890</p>
            <p className="text-gray-300">Email: info@ptu.ac.in</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.58c0-2.49 1.49-3.86 3.77-3.86 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.89h-2.33V22c4.78-.76 8.44-4.88 8.44-9.88z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.46 7.37c.01.14.01.28.01.42 0 4.29-3.27 9.23-9.23 9.23-1.83 0-3.53-.54-4.96-1.47.25.03.5.05.75.05 1.52 0 2.92-.52 4.03-1.38-1.42-.03-2.62-.96-3.03-2.25.2.04.41.07.63.07.3 0 .59-.04.87-.12-1.49-.3-2.62-1.61-2.62-3.19v-.04c.44.24.95.38 1.49.4-.88-.59-1.46-1.6-1.46-2.74 0-.61.16-1.18.44-1.67 1.6 1.97 4 3.27 6.69 3.41-.05-.24-.08-.5-.08-.76 0-1.84 1.49-3.33 3.33-3.33.96 0 1.83.4 2.44 1.03.76-.15 1.48-.43 2.12-.82-.25.78-.78 1.44-1.47 1.86.68-.08 1.33-.26 1.94-.53-.45.68-1.02 1.27-1.67 1.75z"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.45 20.45h-3.56v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83v5.45H9.51V9h3.42v1.56h.05c.48-.91 1.64-1.87 3.37-1.87 3.61 0 4.28 2.37 4.28 5.45v6.31zM6.4 7.43c-1.14 0-2.06-.93-2.06-2.07s.93-2.07 2.06-2.07 2.07.93 2.07 2.07-.93 2.07-2.07 2.07zM8.2 20.45H4.6V9h3.6v11.45z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>© 2024 Punjab Technical University, Jalandhar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
