"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle state isOpen
  };

  // Effect untuk menutup menu saat ukuran layar berubah
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px adalah breakpoint untuk md
        setIsOpen(false); // Tutup menu jika ukuran layar >= md
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-between mx-auto p-4 items-center bg-white border-gray-200 rounded-bl-lg rounded-br-lg shadow-md">
      {/* Gambar Logo */}
      <div className="ml-0">
        <a
          href="https://www.instagram.com/develoop.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="logo_develoop_tr2.png"
            className="h-auto max-h-8 object-contain"
            alt="Develoop Logo"
          />
        </a>
      </div>

      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center p-2 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Daftar Menu */}
      <div className="w-full md:block md:w-auto mr-0" id="navbar-default">
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex items-center space-x-5 md:space-x-8 p-4 md:p-0  md:bg-transparent rounded-lg md:rounded-none  md:shadow-none space-y-4 md:space-y-0`}
        >
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-black text-xl font-['gothambold'] ms-5"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-gray-700 hover:text-black text-xl font-['gothambold']"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-black text-xl font-['gothambold']"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-700 hover:text-black text-xl font-['gothambold']"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-6 py-2 text-white bg-emerald-500 rounded-full hover:bg-emerald-600 text-xl"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
