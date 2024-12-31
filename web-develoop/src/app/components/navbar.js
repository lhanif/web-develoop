"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav class="bg-white border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://www.instagram.com/develoop.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="logo_develoop_tr2.png"
            class="h-auto max-h-9 0bject-contain"
            alt="Develoop Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex items-center space-x-8`}
          >
            <li>
              <Link href="/" className="text-gray-700 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-700 hover:text-black">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="text-gray-700 hover:text-black"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="./contact"
                className="px-6 py-2 text-white bg-green-500 rounded-full hover:bg-green-600"
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
