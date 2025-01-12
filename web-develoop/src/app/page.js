"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero3";
import Hero2 from "./components/hero2";
import Footer from "./components/footer";
import Carousel from "./components/carousel-services";
import CardOrder from "./components/card-order";
import Circle from "./components/circle-services";
import Head from "next/head"; // Impor Head dari Next.js

export default function Home({ component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white">
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

      <section className="py-20 bg-white text-center text-black">
        <div>
          <h1 className="font-gothambold text-4xl font-extrabold sm:text-5xl lg:text-6xl font-extrabold mb-10">
            <span className="text-develoop">WHAT </span>
            <span>WE DO</span>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-11/12 mx-auto">
            {/* Panggil komponen Circle */}
            <Circle
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width=""
                  height="24"
                  fill="currentColor"
                  className="bi bi-code-slash w-full h-full"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                </svg>
              }
              title="Web Development"
            />
            <Circle
              icon={
                <svg
                  viewBox="0 0 24.00 24.00"
                  id="meteor-icon-kit__solid-iot"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#FFFFFF"
                  stroke-width="0.00024000000000000003"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g clip-path="url(#clip0_525_178)">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.38947 2.01068C8.72799 0.764157 10.5254 0 12.5 0C14.9937 0 17.2023 1.21764 18.5648 3.08692C21.6485 3.59544 24 6.2726 24 9.5C24 13.0899 21.0898 16 17.5 16H15V19C15 19.5523 15.4477 20 16 20H18.1707C18.5825 18.8348 19.6938 18 21 18C22.6569 18 24 19.3431 24 21C24 22.6569 22.6569 24 21 24C19.6938 24 18.5825 23.1652 18.1707 22H16C14.3431 22 13 20.6569 13 19V16H11V19C11 20.6569 9.65685 22 8 22H5.82929C5.41746 23.1652 4.30622 24 3 24C1.34315 24 0 22.6569 0 21C0 19.3431 1.34315 18 3 18C4.30622 18 5.41746 18.8348 5.82929 20H8C8.55229 20 9 19.5523 9 19V16H7C3.13401 16 0 12.866 0 9C0 5.13401 3.13401 2 7 2C7.1306 2 7.26046 2.00359 7.38947 2.01068ZM5.98958 9.38299C5.59905 8.99247 5.59905 8.3593 5.98958 7.96878C6.77888 7.17948 7.71591 6.55338 8.74718 6.12621C9.77844 5.69905 10.8837 5.47919 12 5.47919C13.1162 5.47919 14.2215 5.69905 15.2528 6.12621C16.2841 6.55337 17.2211 7.17948 18.0104 7.96878C18.4009 8.3593 18.4009 8.99247 18.0104 9.38299C17.6199 9.77352 16.9867 9.77352 16.5962 9.38299C15.9926 8.77941 15.276 8.30062 14.4874 7.97397C13.6988 7.64731 12.8536 7.47919 12 7.47919C11.1464 7.47919 10.3012 7.64731 9.51254 7.97397C8.72393 8.30062 8.00737 8.77941 7.40379 9.38299C7.01327 9.77352 6.3801 9.77352 5.98958 9.38299ZM8.5 11.9142C8.10948 11.5237 8.10948 10.8905 8.5 10.5C8.95963 10.0404 9.50528 9.67577 10.1058 9.42702C10.7063 9.17828 11.35 9.05025 12 9.05025C12.65 9.05025 13.2936 9.17827 13.8942 9.42702C14.4947 9.67577 15.0403 10.0404 15.5 10.5C15.8905 10.8905 15.8905 11.5237 15.5 11.9142C15.1094 12.3047 14.4763 12.3047 14.0858 11.9142C13.8118 11.6403 13.4867 11.423 13.1288 11.2748C12.7709 11.1265 12.3874 11.0502 12 11.0502C11.6126 11.0502 11.2291 11.1265 10.8712 11.2748C10.5133 11.423 10.1881 11.6403 9.91422 11.9142C9.52369 12.3047 8.89053 12.3047 8.5 11.9142Z"
                        fill="#FFFFFF"
                      ></path>{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <clipPath id="clip0_525_178">
                        {" "}
                        <rect width="24" height="24" fill="white"></rect>{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </g>
                </svg>
              }
              title="IoT Development"
            />
            <Circle
              icon={
                <svg
                  class="w-full h-full text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 21V2.352A3.451 3.451 0 0 0 9.5 2a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 4.04 8.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.017 4.017 0 0 0 2.3 12.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 2 14c.003.24.027.48.072.716a4 4 0 0 0 .235.832c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.285.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 11 21Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 14.5 2a3.451 3.451 0 0 0-1.5.352V21a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 20 17.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z" />
                </svg>
              }
              title="Artificial Intelligence"
            />
            <Circle
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-android2 w-full h-full"
                  viewBox="0 0 16 16"
                >
                  <path d="m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68" />
                </svg>
              }
              title="Mobile App Development"
            />
            <Circle
              icon={
                <svg
                  className="w-full h-full"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFFFFF"
                >
                  <path d="M14.5 1h-13l-.5.5v13l.5.5h13l.5-.5v-13l-.5-.5zM14 14H5v-2h2.3c.3.6 1 1 1.7 1 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2H4v3H2V2h2v2.3c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2s2-.9 2-2h2c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.7 0-1.4.4-1.7 1H6.7c-.3-.6-1-1-1.7-1V2h9v12zm-6-3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1zM5 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm6 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
                </svg>
              }
              title="PCB Design"
            />
            <Circle
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-robot w-full h-full"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                </svg>
              }
              title="Mechatronics"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-black " data-aos="fade-up">
        <header className="relative z-10 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl font-gothambold">
            <span className="text-develoop">OUR</span> PROJECT
          </h1>
        </header>
        <div className="py-16">
          <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto">
            {/* Mengubah ukuran carousel */}
            <Carousel />
          </div>
        </div>
      </section>

      <section className="py-20 items-center" data-aos="fade-up">
        <header className="relative z-10 text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl font-gothambold">
            <span className="text-develoop">ORDER LAYANAN </span>
            <span className="text-black">DEVEL</span>
            {/* <img
              src="loop.svg"
              className="inline-block align-baseline"
              style={{
                height: "1em", // Sama dengan ukuran font
                width: "auto", // Proporsional dengan tinggi
                verticalAlign: "baseline", // Sejajar dengan teks
              }}
              alt="loop"
            /> */}
            <span className="text-black">OOP</span>
            <span className="text-black">?</span>
          </h1>
        </header>

        <div className="mt-20 m-10 ml-40 mr-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-6 place-items-center">
          <CardOrder
            icon={"isi-form.svg"}
            text="Isi Formulir Pemesanan"
            number="1"
          />
          <CardOrder
            icon={"antrean.svg"}
            text="Dapat Nomor Antrean"
            number="2"
          />
          <CardOrder
            icon={"phone.svg"}
            text="Tim Develoop Menghubungi"
            number="3"
          />
          <CardOrder
            icon={"meeting.svg"}
            text="Diskusi dan Revisi"
            number="4"
          />
          <CardOrder
            icon={"cursor-click.svg"}
            text="Konfirmasi dan Pembayaran DP"
            number="5"
          />
          <CardOrder icon={"gear.svg"} text="Pelaksaan Proyek" number="6" />
          <CardOrder
            icon={"presentation.svg"}
            text="Demo dan Persetujuan"
            number="7"
          />
          <CardOrder
            icon={"handshake.svg"}
            text="Penyerahan Proyek"
            number="8"
          />
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
