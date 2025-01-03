"use client";

import { useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Carousel from "./components/carousel-services";
export default function Home() {
  return (
    <div>
      <head>
        <title>Develoop</title>
        <meta name="description" content="Ini adalah halaman beranda." />
      </head>
      <Navbar />
      <Hero />
      <section className="py-20">
        <header className="relative z-10 text-center" >
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">OUR SERVICES</h1>
        </header>
        <div className="py-20">
          <div className="w-2/3 sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto">
            {/* Mengubah ukuran carousel */}
            <Carousel />
          </div>
        </div>
      </section>

      <section className="py-20">
        <header className="relative z-10 text-center" >
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">OUR PROJECT</h1>
        </header>
        <div className="py-20">
          <div className="w-2/3 sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto">
            {/* Mengubah ukuran carousel */}
            <Carousel />
          </div>
        </div>
      </section>

      <section className="py-20">
        <header className="relative z-10 text-center" >
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">HOW TO ORDER?</h1>
        </header>
      </section>

      <Footer />
    </div>
  );
}
