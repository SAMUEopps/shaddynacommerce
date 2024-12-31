import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#182155] text-white py-12">
      <div className="container mx-auto px-6">
        {/* Logo and About Section */}
        <div className="flex flex-col sm:flex-row sm:space-x-12 mb-12">
          <div className="flex-1 mb-8 sm:mb-0">
            <h1 className="text-4xl font-semibold text-[#ff199c] transition duration-300">
              Shaddyna
            </h1>
            <p className="mt-4 text-gray-300">
              Your ultimate destination for all things shopping! Browse our platform, discover amazing shops, and get the best deals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 mb-8 sm:mb-0">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-yellow-600 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
               
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-300 hover:text-yellow-600 transition duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-yellow-600 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-300 hover:text-yellow-600 transition duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <p className="text-gray-300">
                  Email:{' '}
                  <a
                    href="mailto:info@Imani Imports.com"
                    className="text-[#ff199c] hover:text-yellow-500 transition duration-300"
                  >
                    info@Shaddyna.com
                  </a>
                </p>
              </li>
              <li>
                <p className="text-gray-300">
                  Phone:{' '}
                  <a
                    href="tel:+1234567890"
                    className="text-[#ff199c] hover:text-yellow-500 transition duration-300"
                  >
                    (123) 456-7890
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>

{/* Social Media Links */}
<div className="flex justify-center space-x-6 mb-8 flex-col sm:flex-row text-center sm:text-left">
  <a
    href="https://facebook.com/ImaniImports"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-gray-300 hover:text-yellow-600 transition duration-300 mb-4 sm:mb-0"
  >
    <FaFacebook className="mr-2 text-[#ff199c] text-2xl" />
    Facebook
  </a>
  <a
    href="https://instagram.com/ImaniImports"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-gray-300 hover:text-yellow-600 transition duration-300 mb-4 sm:mb-0"
  >
    <FaInstagram className="mr-2 text-[#ff199c] text-2xl" />
    Instagram
  </a>
  <a
    href="https://twitter.com/ImaniImports"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-white hover:text-yellow-600 transition duration-300 mb-4 sm:mb-0"
  >
    <FaTwitter className="mr-2 text-[#ff199c] text-2xl" />
    Twitter
  </a>
  <a
    href="https://linkedin.com/company/ImaniImports"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-gray-300 hover:text-yellow-600 transition duration-300 mb-4 sm:mb-0"
  >
    <FaLinkedin className="mr-2 text-[#ff199c] text-2xl" />
    LinkedIn
  </a>
</div>


        {/* Newsletter Signup */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-white">Stay Updated</h3>
          <p className="text-gray-300 mt-2">
            Sign up for our newsletter to receive the latest updates, offers, and news.
          </p>
          <div className="mt-6 flex justify-center items-center space-x-4 flex-wrap">
  <input
    type="email"
    placeholder="Enter your email"
    className="p-2 sm:p-3 rounded-l-md text-gray-800 border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 w-full sm:w-auto text-sm sm:text-base"
  />
  <button className="bg-[#ff199c] text-white py-2 px-4 sm:py-2 sm:px-6 rounded-r-md hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-600 transition duration-300 w-full sm:w-auto mt-2 sm:mt-0 text-sm sm:text-base">
    Subscribe
  </button>
</div>


        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-300 mb-8">
          <p>&copy; {new Date().getFullYear()} Shaddyna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
