// components/Gallery.js
import React from 'react';

const Gallery = ({ title, timestamp, location, images, description, onExit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
          />
      <div className="bg-white rounded-lg shadow-md p-6 relative max-w-4xl w-full h-auto max-h-[80vh] overflow-y-auto scrollbar-hidden mx-4 sm:mx-8 lg:mx-16"> {/* Menambahkan margin fleksibel */}
        {/* Tombol Exit */}
        <button
          onClick={onExit}
          className="absolute top-4 right-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
        >
          Exit
        </button>

        <div className="text-center mb-6 mt-12">
          <h2 className="text-3xl font-bold text-gray-700">{title}</h2>
          <div className="flex justify-center space-x-4 mt-5">
            <div className="flex items-center">
              <i className="bi bi-calendar mr-2 text-gray-500"></i>
              <p className="text-sm text-gray-500">{timestamp}</p>
            </div>
            <div className="flex items-center">
              <i className="bi bi-geo-alt mr-2 text-gray-500"></i>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
          </div>
        </div>

        <div className="-m-1 flex flex-wrap md:-m-2 justify-center">
          {/* Gambar dengan variasi ukuran */}
          {images.map((src, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/2 p-1 md:p-2">
              <img
                alt={`gallery-${index}`}
                className="block h-full w-full rounded-lg object-cover object-center"
                src={src}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-700 text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
