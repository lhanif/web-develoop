import React from "react";

const Card = ({ icon, text, number }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-40 h-40 bg-white rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:scale-105">
      {/* Menampilkan nomor di kiri atas */}
      <div className="absolute top-[-10px] left-[-10px] bg-develoop text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md">
        {number}
      </div>
      {/* Menampilkan ikon sebagai gambar SVG */}
      <img src={icon} alt="Icon" className="w-12 h-12 mb-2" />
      <p className="text-center text-black font-medium">{text}</p>
    </div>
  );
};

export default Card;
