"use client";
import React from 'react';

export default function Cards({ 
  imageSrc = "next.svg", 
  title = "Default Title", 
  description = "Default description goes here.", 
  linkHref = "#", 
  timestamp = "January 1, 2023", // Tambahkan parameter timestamp
  location = "Location" // Tambahkan parameter location
}) {
  // Gambar default dengan rasio 16:9
  const defaultImage = "https://via.placeholder.com/640x360.png?text=Default+Image";

  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={linkHref}>
        {/* Container gambar dengan ukuran tetap */}
        <div className="h-48 w-full overflow-hidden rounded-t-lg bg-gray-200">
          <img 
            className="object-cover w-full h-full" 
            src={imageSrc} 
            alt={title} 
            onError={(e) => { e.target.onerror = null; e.target.src = defaultImage; }} // Mengatur gambar default jika gagal memuat
          />
        </div>
      </a>
      <div className="p-5">
        <a href={linkHref}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        {/* Menambahkan timestamp dan location di bawah judul */}
        <p className="text-sm text-gray-600 mb-1">{timestamp}</p>
        <p className="text-sm text-gray-600 mb-4">{location}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-5">
          {description}
        </p>
        <a
          href={linkHref}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
