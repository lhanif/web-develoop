"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4 items-center">
        {/* Gambar Logo*/}
        <div className="ml-0">
          <a
            href="https://www.instagram.com/develoop.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="logo_develoop_tr2.png"
              className="h-auto max-h-9 object-contain"
              alt="Develoop Logo"
            />
          </a>
        </div>

        {/*Daftar Menu*/}
        <div className="hidden w-full md:block md:w-auto mr-0" id="navbar-default">
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex items-center space-x-8`}
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
                href="./contact"
                className="px-6 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 text-xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
