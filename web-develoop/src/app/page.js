"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Carousel from "./components/carousel-services";
import Head from "next/head"; // Impor Head dari Next.js

export default function Home({ component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Head>
        <title>Develoop</title>
        <meta name="description" content="Ini adalah halaman beranda." />
      </Head>
      <nav className="sticky top-0 z-50">
        <Navbar />
      </nav>
      <div className="-mt-1.5">
        <Hero data-aos="fade-up" />
      </div>
      
      {/* <section className="py-20" data-aos="fade-up">
        <header className="relative z-10 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            OUR SERVICES
          </h1>
        </header>
        <div className="py-20">
          <div className="w-2/3 sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto">
            <Carousel />
          </div>
        </div>
      </section> */}

      <section className="py-20" data-aos="fade-up">
        <header className="relative z-10 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            OUR PROJECT
          </h1>
        </header>
        <div className="py-20">
          <div className="w-2/3 sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto">
            {/* Mengubah ukuran carousel */}
            <Carousel />
          </div>
        </div>
      </section>

      <section className="py-20" data-aos="fade-up">
        <header className="relative z-10 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            HOW TO ORDER?
          </h1>
        </header>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
