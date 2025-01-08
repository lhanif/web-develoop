"use client";

import { useState } from "react";

export default function Form() {
  return (
    <div className="py-5">
      <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h1 className="text-center font-bold text-xl text-gray-900">
          FORM ORDER
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

          {/* LAYANAN YANG DIPERLUKAN */}
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Layanan yang diperlukan
            </label>

            {/* Multiple choice dengan checkbox */}
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="AI"
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900">AI</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Web Dev"
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900">Web Dev</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Mobile Apps"
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900">Mobile Apps</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="IoT"
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900">IoT</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="PCB Design"
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900">PCB Design</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Robotics"
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900">Robotics</span>
              </label>
            </div>

            {/* Helper text */}
            <p
              id="helper-text-explanation"
              className="mt-2 text-xs text-gray-400"
            >
              Opsional (dapat dikosongi atau memilih lebih dari satu)
            </p>
          </div>

          {/* FILE UPLOAD */}
          <div className="mb-3">
            <label
              htmlFor="file-upload"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              File Pendukung
            </label>
            <input
              type="file"
              id="file-upload"
              name="file"
              className="block w-full text-sm text-gray-900 "
            />
            <p className="mt-2 text-xs text-gray-400">
              File yang diizinkan: PDF, JPG, PNG (max 5MB) *Opsional
            </p>
          </div>

          <div>
            <button
              type="submit"
              className="mt-4 px-6 py-2 text-white bg-emerald-500 rounded-lg hover:bg-emerald-6z00 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
