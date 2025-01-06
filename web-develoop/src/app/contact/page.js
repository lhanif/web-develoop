"use client";

import { useState } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Form from "../components/form-order";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
} 
