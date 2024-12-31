"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <img src="loop.svg" className="h-40"/>
          {/* <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-rose-500">
              {" "}
              Forever Home.{" "}
            </strong>
          </h1> */}

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Develoop adalah startup di bidang teknologi yang akan mengalahkan semuanya
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Reach Us Now!
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-sky-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
