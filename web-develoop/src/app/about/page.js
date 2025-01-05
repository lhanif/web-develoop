"use client";

import { useState } from "react";

import Navbar from "../components/navbar";
import Card from "../components/card";
import Carousel from "../components/carousel-services";
import Footer from "../components/footer";
import Gallery from "../components/detail";

export default function Services() {
    const images = [
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
      ];
    
      const handleExit = () => {
        // Logika untuk keluar atau menutup galeri
        console.log("Exit button clicked");
      };

  return (
    <div>
      <Navbar />
      <header
        className="relative bg-cover bg-center text-white py-16"
        style={{
          backgroundImage: "url('bg-head.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
        {/* Overlay gelap */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            ABOUT US
          </h1>
        </div>
      </header>
      
      <Footer />
    </div>
  );
}


