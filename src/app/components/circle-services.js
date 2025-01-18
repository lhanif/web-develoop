"use client";
import { useState } from "react";

export default function Circle({ icon, title }) {
  return (
    <div className="flex flex-col items-center">
      {/* Lingkaran */}
      <div className="w-24 h-24 flex items-center justify-center rounded-full bg-develoop text-white shadow-lg hover:bg-emerald-700">
        {/* Menyisipkan SVG sebagai icon */}
        <div className="w-12 h-12">
          {icon}
        </div>
      </div>
      {/* Judul */}
      <p className="mt-4 text-lg font-medium text-gray-800">{title}</p>
    </div>
  );
}
