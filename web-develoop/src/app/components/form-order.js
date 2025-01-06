"use client";

import { useState } from "react";

export default function Form() {
  return (
    <div className="py-5">
      <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h1 className="text-center font-bold text-xl text-gray-900">
          FORM INPUT
        </h1>
        <form className="max-w-sm mx-auto">
          {/* NAMA LENGKAP */}
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Name
            </label>
            <input
              type="email"
              id="email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-200 border border-emerald-600 text-gray-900 text-sm rounded-xl w-full p-2.5 focus:border-blue-500"
            />
            {/* <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-gray-600"
            >
              We’ll never share your details.
            </p> */}
          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-200 border border-emerald-600 text-gray-900 text-sm rounded-xl w-full p-2.5 focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>

          {/* PROBLEM */}
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Masalah yang ingin diselesaikan
            </label>
            <input
              aria-describedby="helper-text-explanation"
              className="break-words bg-gray-200 border border-emerald-600 text-gray-900 text-sm rounded-xl w-full p-2.5 focus:border-blue-500"
            />

            <p
              id="helper-text-explanation"
              className="mt-2 text-xs text-gray-400 "
            >
              Deskripsikan secara naratif permasalahan yang ingin diselesaikan
            </p>
          </div>

          
        </form>
      </div>
    </div>
  );
}
