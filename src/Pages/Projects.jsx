import React from "react";
import memopad from "../assets/Pic/Memopad.png";
import pic from "../assets/Pic/pic2.png";
import martinzStore from "../assets/Pic/pic3.png";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        🚀 My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {/* Memopad App */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <img src={memopad} className="w-full h-56 object-cover rounded-lg" />
          <a
            href="https://github.com/Ayooluwa01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-blue-400 hover:underline mt-4 block"
          >
            📝 MEMOPAD APP
          </a>
          <p className="text-gray-300 text-sm mt-2">
            "Jot with Ayo Memopad" is a sleek and intuitive note-taking app
            built using React Native. This app allows users to jot down
            thoughts, ideas, and to-dos on the go. It leverages SQLite for fast
            and secure data storage and Async Storage for quick access. The
            smooth UI ensures seamless note-taking!
          </p>
          <p className="text-green-400 font-medium mt-2">
            🔧 Tech Stack: React Native, SQLite, Async Storage
          </p>
        </div>

        {/* Fashion Store Landing Page */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <img src={pic} className="w-full h-48 object-cover rounded-lg" />
          <a
            href="https://github.com/Ayooluwa01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-blue-400 hover:underline mt-4 block"
          >
            👗 FASHION STORE LANDING PAGE
          </a>
          <p className="text-gray-300 text-sm mt-2">
            This beautifully designed landing page showcases an online fashion
            store, featuring stylish collections, trendy looks, and an
            effortless shopping experience. The responsive and modern UI
            enhances user engagement and boosts sales!
          </p>
          <p className="text-green-400 font-medium mt-2">
            🔧 Tech Stack: HTML, CSS, JavaScript
          </p>
        </div>

        {/* Martinz Store */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <img
            src={martinzStore}
            className="w-full h-48 object-cover rounded-lg"
          />
          <a
            href="https://github.com/Ayooluwa01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-blue-400 hover:underline mt-4 block"
          >
            🛒 MARTINZ STORE
          </a>
          <p className="text-gray-300 text-sm mt-2">
            Martinz Store is an e-commerce web platform that offers a seamless
            shopping experience. Users can explore a wide range of products, add
            items to their cart, and checkout with ease. The UI is designed for
            simplicity and efficiency, ensuring a smooth user journey.
          </p>
          <p className="text-green-400 font-medium mt-2">
            🔧 Tech Stack: React, Tailwind CSS, Firebase
          </p>
        </div>

        {/* Extra Memopad App */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <img src={memopad} className="w-full h-48 object-cover rounded-lg" />
          <a
            href="https://github.com/Ayooluwa01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-blue-400 hover:underline mt-4 block"
          >
            📝 MEMOPAD APP (Another Version)
          </a>
          <p className="text-gray-300 text-sm mt-2">
            A variant of the Memopad app with enhanced performance, improved UI,
            and additional features for a smoother note-taking experience.
          </p>
          <p className="text-green-400 font-medium mt-2">
            🔧 Tech Stack: React Native, SQLite, Async Storage
          </p>
        </div>
      </div>
    </div>
  );
}
