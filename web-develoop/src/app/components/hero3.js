"use client";
import { useState } from "react";

export default function hero3() {
  return (
    <section className="relative bg-gradient-to-r from-violet-50 to-orange-50 h-screen">
      <img
        src="logo_develoop_tr.png"
        alt=""
        className="absolute -z-10 inline-block h-full w-full object-cover opacity-75"
      />
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-[720px]">
            <h1 className="mb-3 pb-4 text-4xl font-bold text-develoop md:text-6xl">
              Dream It, We'll Build It
            </h1>
            <p className="mb-6 max-w-[528px] text-xl md:mb-10 text-gray-600">
              Develoop adalah sebuah startup teknologi yang akan mengalahkan semua dan menjadi kaya raya
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <a
                href="#"
                className="mb-4 sm:mb-0 mr-5 inline-block rounded-full bg-develoop px-6 py-4 text-center font-bold text-white transition hover:border-black hover:bg-emerald-600 md:mr-6 lg:mr-8"
              >
                Reach Us
              </a>
              <a
                href="#"
                className="flex max-w-full flex-row rounded-full border border-solid border-develoop text-develoop px-6 py-4 font-bold hover:bg-gray-200"
              >
                <p className="">Explore More</p>
              </a>
            </div>
          </div>
          <div className="mt-8 sm:mt-0">
            <img
              src="logo_develoop_tr.png"
              alt=" "
              className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
