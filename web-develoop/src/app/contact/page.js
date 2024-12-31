'use client'

import { useState } from "react";

import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to Develoop</h1>
        <p className="mt-4 text-gray-600">Contact</p>
      </div>
    </div>
  );
}
