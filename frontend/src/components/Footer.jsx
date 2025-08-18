import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    // KEY CHANGE: Added `sticky bottom-0 z-10`
    // - `sticky`: Makes the footer stick to the bottom of the viewport.
    // - `bottom-0`: Positions it at the very bottom.
    // - `z-10`: Ensures it stays on top of other content.
    <footer className="sticky bottom-0 z-10 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-3">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        
        <div className="mb-2 sm:mb-0 text-center sm:text-left">
          <h2 className="text-md font-semibold">TalkSphere</h2>
          <p className="text-xs">Learn, Share & Grow Together</p>
        </div>

        <div className="text-center text-xs text-gray-200 my-2 sm:my-0">
          <div className="flex space-x-6 text-sm mb-2 justify-center">
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
          © {new Date().getFullYear()} TalkSphere – A Global Chatting Vibe. All rights reserved.
        </div>

        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="https://www.linkedin.com/in/arun-by/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/arun_bavimane_15/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaInstagram size={20} />
          </a>
          <a href="https://github.com/arunby15" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
