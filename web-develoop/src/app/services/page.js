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
        {/* WEB DEVELOPMENT */}
        <section class="flex flex-col md:flex-row gap-8 p-8 ml-20 mr-20">
          <div class="flex-[1] ml-10 mr-10">
            <img
              src="web-dev.jpg"
              alt="Deskripsi Gambar"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-[2]">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Web Development
            </h2>
            <p className="text-gray-600 mb-4 text-justify">
              Jasa web development adalah layanan yang menyediakan pembuatan,
              desain, pengembangan, dan pemeliharaan situs web atau aplikasi
              web. Layanan ini mencakup berbagai tahap, mulai dari perencanaan
              dan desain antarmuka pengguna (UI), pengembangan fungsionalitas
              menggunakan berbagai bahasa pemrograman (seperti HTML, CSS,
              JavaScript, PHP, Python), hingga pengujian dan peluncuran situs.
              Web development juga mencakup pengelolaan dan optimasi performa,
              keamanan, serta pembaruan situs secara berkala untuk memastikan
              kinerja yang optimal. Tujuan dari jasa web development adalah
              untuk menciptakan situs web yang efektif, responsif, dan
              user-friendly untuk memenuhi kebutuhan bisnis atau individu.
            </p>
          </div>
        </section>

        {/* IOT DEVELOPMENT */}
        <section class="flex flex-col md:flex-row gap-8 p-6 bg-gray-100">
          <div className="flex-[2]">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              IoT Development
            </h2>
            <p className="text-gray-600 mb-4">
              Jasa web development adalah layanan yang menyediakan pembuatan,
              desain, pengembangan, dan pemeliharaan situs web atau aplikasi
              web. Layanan ini mencakup berbagai tahap, mulai dari perencanaan
              dan desain antarmuka pengguna (UI), pengembangan fungsionalitas
              menggunakan berbagai bahasa pemrograman (seperti HTML, CSS,
              JavaScript, PHP, Python), hingga pengujian dan peluncuran situs.
              Web development juga mencakup pengelolaan dan optimasi performa,
              keamanan, serta pembaruan situs secara berkala untuk memastikan
              kinerja yang optimal. Tujuan dari jasa web development adalah
              untuk menciptakan situs web yang efektif, responsif, dan
              user-friendly untuk memenuhi kebutuhan bisnis atau individu.
            </p>
          </div>

          <div class="flex-[1]">
            <img
              src="web-dev.jpg"
              alt="Deskripsi Gambar"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* MOBILE APP DEVELOPMENT */}
        <section class="flex flex-col md:flex-row gap-8 p-6 bg-gray-100">
          <div class="flex-[1]">
            <img
              src="web-dev.jpg"
              alt="Deskripsi Gambar"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-[2]">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Mobile App Development
            </h2>
            <p className="text-gray-600 mb-4">
              Jasa web development adalah layanan yang menyediakan pembuatan,
              desain, pengembangan, dan pemeliharaan situs web atau aplikasi
              web. Layanan ini mencakup berbagai tahap, mulai dari perencanaan
              dan desain antarmuka pengguna (UI), pengembangan fungsionalitas
              menggunakan berbagai bahasa pemrograman (seperti HTML, CSS,
              JavaScript, PHP, Python), hingga pengujian dan peluncuran situs.
              Web development juga mencakup pengelolaan dan optimasi performa,
              keamanan, serta pembaruan situs secara berkala untuk memastikan
              kinerja yang optimal. Tujuan dari jasa web development adalah
              untuk menciptakan situs web yang efektif, responsif, dan
              user-friendly untuk memenuhi kebutuhan bisnis atau individu.
            </p>
          </div>
        </section>

        {/* PCB DESIGN */}
        <section class="flex flex-col md:flex-row gap-8 p-6 bg-gray-100">
          <div className="flex-[2]">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              PCB Design
            </h2>
            <p className="text-gray-600 mb-4">
              Jasa web development adalah layanan yang menyediakan pembuatan,
              desain, pengembangan, dan pemeliharaan situs web atau aplikasi
              web. Layanan ini mencakup berbagai tahap, mulai dari perencanaan
              dan desain antarmuka pengguna (UI), pengembangan fungsionalitas
              menggunakan berbagai bahasa pemrograman (seperti HTML, CSS,
              JavaScript, PHP, Python), hingga pengujian dan peluncuran situs.
              Web development juga mencakup pengelolaan dan optimasi performa,
              keamanan, serta pembaruan situs secara berkala untuk memastikan
              kinerja yang optimal. Tujuan dari jasa web development adalah
              untuk menciptakan situs web yang efektif, responsif, dan
              user-friendly untuk memenuhi kebutuhan bisnis atau individu.
            </p>
          </div>

          <div class="flex-[1]">
            <img
              src="web-dev.jpg"
              alt="Deskripsi Gambar"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* ROBOTICS */}
        <section class="flex flex-col md:flex-row gap-8 p-6 bg-gray-100">
          <div class="flex-[1]">
            <img
              src="web-dev.jpg"
              alt="Deskripsi Gambar"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-[2]">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Robotics</h2>
            <p className="text-gray-600 mb-4">
              Jasa web development adalah layanan yang menyediakan pembuatan,
              desain, pengembangan, dan pemeliharaan situs web atau aplikasi
              web. Layanan ini mencakup berbagai tahap, mulai dari perencanaan
              dan desain antarmuka pengguna (UI), pengembangan fungsionalitas
              menggunakan berbagai bahasa pemrograman (seperti HTML, CSS,
              JavaScript, PHP, Python), hingga pengujian dan peluncuran situs.
              Web development juga mencakup pengelolaan dan optimasi performa,
              keamanan, serta pembaruan situs secara berkala untuk memastikan
              kinerja yang optimal. Tujuan dari jasa web development adalah
              untuk menciptakan situs web yang efektif, responsif, dan
              user-friendly untuk memenuhi kebutuhan bisnis atau individu.
            </p>
          </div>
        </section>

        {/* AI Solutions */}
        <section class="flex flex-col md:flex-row gap-8 p-6 bg-gray-100">
          <div className="flex-[2]">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              AI Solutions
            </h2>
            <p className="text-gray-600 mb-4">
              Jasa web development adalah layanan yang menyediakan pembuatan,
              desain, pengembangan, dan pemeliharaan situs web atau aplikasi
              web. Layanan ini mencakup berbagai tahap, mulai dari perencanaan
              dan desain antarmuka pengguna (UI), pengembangan fungsionalitas
              menggunakan berbagai bahasa pemrograman (seperti HTML, CSS,
              JavaScript, PHP, Python), hingga pengujian dan peluncuran situs.
              Web development juga mencakup pengelolaan dan optimasi performa,
              keamanan, serta pembaruan situs secara berkala untuk memastikan
              kinerja yang optimal. Tujuan dari jasa web development adalah
              untuk menciptakan situs web yang efektif, responsif, dan
              user-friendly untuk memenuhi kebutuhan bisnis atau individu.
            </p>
          </div>

          <div class="flex-[1]">
            <img
              src="web-dev.jpg"
              alt="Deskripsi Gambar"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
