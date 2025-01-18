"use client";
import { useState } from "react";

export default function Hero2() {
  return (
    <section class="relative bg-gradient-to-r from-violet-50 to-orange-50 h-screen">
      <img
        src="logo_develoop_tr.png"
        alt=""
        class="absolute -z-10 inline-block h-full w-full object-cover opacity-75"
      />
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div class="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div class="max-w-[720px]">
            <h1 class="mb-3 pb-4 text-4xl font-bold text-develoop md:text-6xl">
              Dream It, We'll Build It
            </h1>
            <p class="mb-6 max-w-[528px] text-xl md:mb-10 text-gray-600">
              Develoop adalah sebuah startup teknologi yang akan mengalahkan semua dan menjadi kaya raya
            </p>
            <div class="flex items-center">
              <a
                href="#"
                class="] mr-5 inline-block rounded-full bg-develoop px-6 py-4 text-center font-bold text-white transition hover:border-black hover:bg-emerald-600 md:mr-6 lg:mr-8"
              >
                Reach Us
              </a>
              <a
                href="#"
                class="flex max-w-full flex-row rounded-full border border-solid border-develoop text-develoop px-6 py-4 font-bold hover:bg-gray-200"
              >
                <p class="">Explore More</p>
              </a>
            </div>
          </div>
          <div>
            <img
              src="logo_develoop_tr.png"
              alt=" "
              class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
