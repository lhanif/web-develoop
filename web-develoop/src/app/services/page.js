"use client";

import { useState } from "react";

import Navbar from "../components/navbar";
import Card from "../components/card";
import Carousel from "../components/carousel-services";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <Navbar />
      <header
        className="relative bg-cover bg-center text-white py-16"
        style={{
          backgroundImage: "url('bg-head.jpg')",
        }}
      >
        {/* Overlay Gelap */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

        {/* Konten Header */}
        <div className="relative z-10 text-center max-w-screen-xl mx-auto p-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            OUR SERVICES
          </h1>
        </div>
      </header>

      <div className="bg-white">
        <div className="relative z-10 text-center bg-white p-10 mr-1 mb-3 shadow-xl rounded-lg flex items-center flex-col">
          <img
            src="file.svg"
            alt="Deskripsi Gambar"
            className="w-16 h-16 mb-4"
          />
          <h1 className="text-black font-bold text-xl mb-2">Web Development</h1>
          <p className="text-black text-justify">
            Jasa web development adalah layanan yang menyediakan pembuatan,
            desain, pengembangan, dan pemeliharaan situs web atau aplikasi web.
            Layanan ini mencakup berbagai tahap, mulai dari perencanaan dan
            desain antarmuka pengguna (UI), pengembangan fungsionalitas
            menggunakan berbagai bahasa pemrograman (seperti HTML, CSS,
            JavaScript, PHP, Python), hingga pengujian dan peluncuran situs. Web
            development juga mencakup pengelolaan dan optimasi performa,
            keamanan, serta pembaruan situs secara berkala untuk memastikan
            kinerja yang optimal. Tujuan dari jasa web development adalah untuk
            menciptakan situs web yang efektif, responsif, dan user-friendly
            untuk memenuhi kebutuhan bisnis atau individu.
          </p>
        </div>

        <div className="relative z-10 text-center bg-white p-10 mr-1 mb-3 shadow-xl rounded-lg flex items-center flex-col">
          <img
            src="file.svg"
            alt="Deskripsi Gambar"
            className="w-16 h-16 mb-4"
          />
          <h1 className="text-black font-bold text-xl mb-2">Web Development</h1>
          <p className="text-black text-justify">
            Jasa web development adalah layanan yang menyediakan pembuatan,
            desain, pengembangan, dan pemeliharaan situs web atau aplikasi web.
            Layanan ini mencakup berbagai tahap, mulai dari perencanaan dan
            desain antarmuka pengguna (UI), pengembangan fungsionalitas
            menggunakan berbagai bahasa pemrograman (seperti HTML, CSS,
            JavaScript, PHP, Python), hingga pengujian dan peluncuran situs. Web
            development juga mencakup pengelolaan dan optimasi performa,
            keamanan, serta pembaruan situs secara berkala untuk memastikan
            kinerja yang optimal. Tujuan dari jasa web development adalah untuk
            menciptakan situs web yang efektif, responsif, dan user-friendly
            untuk memenuhi kebutuhan bisnis atau individu.
          </p>
        </div>

        <div className="relative z-10 text-center bg-white p-10 mr-1 mb-3 shadow-xl rounded-lg flex items-center flex-col">
          <img
            src="file.svg"
            alt="Deskripsi Gambar"
            className="w-16 h-16 mb-4"
          />
          <h1 className="text-black font-bold text-xl mb-2">Web Development</h1>
          <p className="text-black text-justify">
            Jasa web development adalah layanan yang menyediakan pembuatan,
            desain, pengembangan, dan pemeliharaan situs web atau aplikasi web.
            Layanan ini mencakup berbagai tahap, mulai dari perencanaan dan
            desain antarmuka pengguna (UI), pengembangan fungsionalitas
            menggunakan berbagai bahasa pemrograman (seperti HTML, CSS,
            JavaScript, PHP, Python), hingga pengujian dan peluncuran situs. Web
            development juga mencakup pengelolaan dan optimasi performa,
            keamanan, serta pembaruan situs secara berkala untuk memastikan
            kinerja yang optimal. Tujuan dari jasa web development adalah untuk
            menciptakan situs web yang efektif, responsif, dan user-friendly
            untuk memenuhi kebutuhan bisnis atau individu.
          </p>
        </div>

        <div className="relative z-10 text-center bg-white p-10 mr-1 mb-3 shadow-xl rounded-lg flex items-center flex-col">
          <img
            src="file.svg"
            alt="Deskripsi Gambar"
            className="w-16 h-16 mb-4"
          />
          <h1 className="text-black font-bold text-xl mb-2">Web Development</h1>
          <p className="text-black text-justify">
            Jasa web development adalah layanan yang menyediakan pembuatan,
            desain, pengembangan, dan pemeliharaan situs web atau aplikasi web.
            Layanan ini mencakup berbagai tahap, mulai dari perencanaan dan
            desain antarmuka pengguna (UI), pengembangan fungsionalitas
            menggunakan berbagai bahasa pemrograman (seperti HTML, CSS,
            JavaScript, PHP, Python), hingga pengujian dan peluncuran situs. Web
            development juga mencakup pengelolaan dan optimasi performa,
            keamanan, serta pembaruan situs secara berkala untuk memastikan
            kinerja yang optimal. Tujuan dari jasa web development adalah untuk
            menciptakan situs web yang efektif, responsif, dan user-friendly
            untuk memenuhi kebutuhan bisnis atau individu.
          </p>
        </div>

        <div className="relative z-10 text-center bg-white p-10 mr-1 mb-3 shadow-xl rounded-lg flex items-center flex-col">
          <img
            src="file.svg"
            alt="Deskripsi Gambar"
            className="w-16 h-16 mb-4"
          />
          <h1 className="text-black font-bold text-xl mb-2">Web Development</h1>
          <p className="text-black text-justify">
            Jasa web development adalah layanan yang menyediakan pembuatan,
            desain, pengembangan, dan pemeliharaan situs web atau aplikasi web.
            Layanan ini mencakup berbagai tahap, mulai dari perencanaan dan
            desain antarmuka pengguna (UI), pengembangan fungsionalitas
            menggunakan berbagai bahasa pemrograman (seperti HTML, CSS,
            JavaScript, PHP, Python), hingga pengujian dan peluncuran situs. Web
            development juga mencakup pengelolaan dan optimasi performa,
            keamanan, serta pembaruan situs secara berkala untuk memastikan
            kinerja yang optimal. Tujuan dari jasa web development adalah untuk
            menciptakan situs web yang efektif, responsif, dan user-friendly
            untuk memenuhi kebutuhan bisnis atau individu.
          </p>
        </div>

        <div className="relative z-10 text-center bg-white p-10 mr-1 mb-3 shadow-xl rounded-lg flex items-center flex-col">
          <img
            src="file.svg"
            alt="Deskripsi Gambar"
            className="w-16 h-16 mb-4"
          />
          <h1 className="text-black font-bold text-xl mb-2">Web Development</h1>
          <p className="text-black text-justify">
            Jasa web development adalah layanan yang menyediakan pembuatan,
            desain, pengembangan, dan pemeliharaan situs web atau aplikasi web.
            Layanan ini mencakup berbagai tahap, mulai dari perencanaan dan
            desain antarmuka pengguna (UI), pengembangan fungsionalitas
            menggunakan berbagai bahasa pemrograman (seperti HTML, CSS,
            JavaScript, PHP, Python), hingga pengujian dan peluncuran situs. Web
            development juga mencakup pengelolaan dan optimasi performa,
            keamanan, serta pembaruan situs secara berkala untuk memastikan
            kinerja yang optimal. Tujuan dari jasa web development adalah untuk
            menciptakan situs web yang efektif, responsif, dan user-friendly
            untuk memenuhi kebutuhan bisnis atau individu.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
