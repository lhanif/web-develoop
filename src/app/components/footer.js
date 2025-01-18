"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="relative w-full mb-0 bg-white">
      <div className="w-full px-8 mx-auto max-w-7xl">
        <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <img
              src="logo_develoop_tr2.png" 
              className="mt-8 h-auto max-h-8 object-contain ms"
              alt="Develoop Logo"
            />
            <p className="text-gray-600 text-sm mt-2 ms-7 me-7 text-justify">
            Develoop adalah perusahaan rintisan di bidang system development yang menyediakan 
            layanan pembuatan produk digital, sistem IoT terintegrasi, dan solusi teknologi lainnya. 
            Dengan pendekatan personal dan berfokus pada kebutuhan pelanggan, kami menciptakan solusi inovatif 
            yang mendukung pertumbuhan bisnis Anda. 
            </p>

            <p className="font-bold text-gray-800 text-sm mt-2 me-7 ms-7">DREAM IT, WE'LL BUILD IT.</p>
            
          </div>

          <div className="grid justify-between grid-cols-3 gap-1 mt-10 ms-8 me-2">
            <ul>
              <a href="\" className="block mb-1 text-base font-semibold text-slate-800">
                Home
              </a>
              <li>
                <a
                  href="\services"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="\portfolio"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  
                </a>
              </li>
            </ul>

            <ul>
              <a className="block mb-0 text-base font-semibold  text-slate-800">
                FAQ
              </a>
              <li>
                <a
                  href="#"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  General
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block mb-2 text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a href="\about" className="block text-base font-semibold  text-slate-800">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#team-members"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Team Members
                </a>
              </li>
            </ul>

            <ul>
              <p className="block mb-1 text-base font-semibold text-slate-800">
                Contact Us
              </p>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 64 64"
                    id="email"
                  >
                    <path
                      fill="#222"
                      d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
                    ></path>
                    <path
                      fill="#222"
                      d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
                    ></path>
                    <path
                      fill="#222"
                      d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Email
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="#222"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href="https://www.instagram.com/develoop.co/"
                    className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Instagram
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 737.509 740.824"
                    fill="#222"
                    id="whatsapp"
                  >
                    <path
                      fillRule="evenodd"
                      d="M630.056 107.658C560.727 38.271 468.525.039 370.294 0 167.891 0 3.16 164.668 3.079 367.072c-.027 64.699 16.883 127.855 49.016 183.523L0 740.824l194.666-51.047c53.634 29.244 114.022 44.656 175.481 44.682h.151c202.382 0 367.128-164.689 367.21-367.094.039-98.088-38.121-190.32-107.452-259.707m-259.758 564.8h-.125c-54.766-.021-108.483-14.729-155.343-42.529l-11.146-6.613-115.516 30.293 30.834-112.592-7.258-11.543c-30.552-48.58-46.689-104.729-46.665-162.379C65.146 198.865 202.065 62 370.419 62c81.521.031 158.154 31.81 215.779 89.482s89.342 134.332 89.311 215.859c-.07 168.242-136.987 305.117-305.211 305.117m167.415-228.514c-9.176-4.591-54.286-26.782-62.697-29.843-8.41-3.061-14.526-4.591-20.644 4.592-6.116 9.182-23.7 29.843-29.054 35.964-5.351 6.122-10.703 6.888-19.879 2.296-9.175-4.591-38.739-14.276-73.786-45.526-27.275-24.32-45.691-54.36-51.043-63.542-5.352-9.183-.569-14.148 4.024-18.72 4.127-4.11 9.175-10.713 13.763-16.07 4.587-5.356 6.116-9.182 9.174-15.303 3.059-6.122 1.53-11.479-.764-16.07-2.294-4.591-20.643-49.739-28.29-68.104-7.447-17.886-15.012-15.466-20.644-15.746-5.346-.266-11.469-.323-17.585-.323-6.117 0-16.057 2.296-24.468 11.478-8.41 9.183-32.112 31.374-32.112 76.521s32.877 88.763 37.465 94.885c4.587 6.122 64.699 98.771 156.741 138.502 21.891 9.45 38.982 15.093 52.307 19.323 21.981 6.979 41.983 5.994 57.793 3.633 17.628-2.633 54.285-22.19 61.932-43.616 7.646-21.426 7.646-39.791 5.352-43.617-2.293-3.826-8.41-6.122-17.585-10.714"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Whatsapp
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="4 0 30 30"
                    fill="#222"
                    aria-hidden="true"
                  >
                    <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
                  </svg>

                  <a
                    href="#"
                    className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-4 mt-10 border-t border-slate-200 md:flex-row md:justify-between">
          <p className="block  mb-4 text-sm text-center text-slate-500 md:mb-0 ms-7">
            Copyright © 2024
            <a href="https://material-tailwind.com/"> Develoop Studio</a>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
