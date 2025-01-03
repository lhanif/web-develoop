"use client";

import { useState } from "react";

import Navbar from "../components/navbar";
import Card from "../components/card";
import Carousel from "../components/carousel-services";
import Footer from "../components/footer";

export default function Home() {
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
            OUR SERVICES
          </h1>
        </div>
      </header>

      <Footer />
    </div>
  );
}
