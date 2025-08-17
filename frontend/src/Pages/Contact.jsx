import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-10">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-6">Contact Me</h1>
        <p className="text-gray-700 text-lg mb-6">
          Feel free to reach out for collaboration, project discussions, or queries.
        </p>
        <div className="space-y-4">
          {/* Email */}
          <p className="flex justify-center items-center gap-3 text-lg">
            <FaEnvelope className="text-purple-600" />
            <span>arunby15@gmail.com</span>
          </p>

          {/* Phone */}
          <p className="flex justify-center items-center gap-3 text-lg">
            <FaPhone className="text-green-600" />
            <span>+91 6360420522</span>  {/* 🔄 Replace with your real number */}
          </p>

          {/* GitHub */}
          <p className="flex justify-center items-center gap-3 text-lg">
            <FaGithub className="text-gray-800" />
            <a
              href="https://github.com/arunby15"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/arunby15
            </a>
          </p>

          {/* LinkedIn */}
          <p className="flex justify-center items-center gap-3 text-lg">
            <FaLinkedin className="text-blue-600" />
            <a
              href="https://www.linkedin.com/in/arun-by/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/arun-by
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
