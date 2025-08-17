import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-semibold">TalkSphere</h2>
          <p className="text-sm">Learn, Share & Grow Together</p>
        </div>

        {/* Middle Section - Links */}
        <div className="flex space-x-6 text-sm">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        {/* Right Section - Socials */}
        <div className="flex space-x-5 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/arun-by/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaLinkedin size={22} />
          </a>
          <a href="https://www.instagram.com/arun_bavimane_15/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaInstagram size={22} />
          </a>
          <a href="https://github.com/arunby15" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaGithub size={22} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-xs text-gray-200">
        © {new Date().getFullYear()} TalkSphere – A Global Chatting Vibe. All rights reserved..
      </div>
    </footer>
  );
};

export default Footer;
