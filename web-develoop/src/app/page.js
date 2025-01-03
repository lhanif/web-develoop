"use client";

import { useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <head>
        <title>Develoop</title>
        <meta name="description" content="Ini adalah halaman beranda." />
      </head>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
