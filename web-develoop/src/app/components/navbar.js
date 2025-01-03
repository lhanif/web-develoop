"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="bg-white border-gray-200" >
      <div className="w-full flex flex-wrap  justify-between mx-auto p-4 items-center bg-white border-gray-200 rounded-bl-lg rounded-br-lg">
        {/* Gambar Logo*/}
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

        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button>
        
        {/*Daftar Menu*/}
        <div className=" w-full md:block md:w-auto mr-0" id="navbar-default">
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex items-center space-x-5`}
          >
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-black text-xl font-['gothambold']"
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
    // </nav>
  );
}
