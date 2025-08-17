import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center p-10">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">
          About TalkSphere
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          <strong>TalkSphere</strong> is a global chat application designed to
          connect people worldwide. With real-time messaging, secure
          authentication, and a modern user experience, TalkSphere creates{" "}
          <span className="font-semibold text-purple-600">
            a global chatting vibe
          </span>{" "}
          where communities, friends, and teams can collaborate effortlessly.  
          Built with cutting-edge technology, it ensures smooth, reliable, and
          scalable communication across the globe.
        </p>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          {[
            "TalkSphere",
            "globalChat",
            "realTimeVibe",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.io",
            "TailwindCSS",
            "Vite",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium shadow"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
