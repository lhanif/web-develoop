"use client";

import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");  // State untuk nama
  const [email, setEmail] = useState(""); // State untuk email
  const [problem, setProblem] = useState(""); // State untuk masalah
  const [selectedServices, setSelectedServices] = useState([]); // State untuk layanan yang dipilih

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = {
      name,
      email,
      problem,
      services: selectedServices,
    };

    // Kirim form data ke backend
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred.");
    }
  };

  // Handle checkbox change for services
  const handleServiceChange = (event) => {
    const value = event.target.value;
    setSelectedServices((prevServices) =>
      prevServices.includes(value)
        ? prevServices.filter((service) => service !== value)
        : [...prevServices, value]
    );
  };

  return (
    <div className="py-5">
      <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h1 className="text-center font-bold text-xl text-gray-900">FORM ORDER</h1>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          {/* NAMA LENGKAP */}
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Mengupdate state nama
              className="bg-gray-200 border border-emerald-600 text-gray-900 text-sm rounded-xl w-full p-2.5 focus:border-blue-500"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Mengupdate state email
              className="bg-gray-200 border border-emerald-600 text-gray-900 text-sm rounded-xl w-full p-2.5 focus:border-blue-500"
            />
          </div>

          {/* PROBLEM */}
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Masalah yang ingin diselesaikan
            </label>
            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)} // Mengupdate state problem
              className="break-words bg-gray-200 border border-emerald-600 text-gray-900 text-sm rounded-xl w-full p-2.5 focus:border-blue-500"
            />
          </div>

          {/* LAYANAN YANG DIPERLUKAN */}
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Layanan yang diperlukan
            </label>
            <div className="space-y-2">
              {["AI", "Web Dev", "Mobile Apps", "IoT", "PCB Design", "Robotics"].map((service) => (
                <label key={service} className="flex items-center">
                  <input
                    type="checkbox"
                    value={service}
                    onChange={handleServiceChange} // Menghandle perubahan pada checkbox
                    className="mr-2 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-900">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* FILE UPLOAD */}
          <div className="mb-3">
            <label htmlFor="file-upload" className="block mb-2 text-sm font-medium text-gray-900">
              File Pendukung
            </label>
            <input
              type="file"
              id="file-upload"
              name="file"
              className="block w-full text-sm text-gray-900"
            />
            <p className="mt-2 text-xs text-gray-400">File yang diizinkan: PDF, JPG, PNG (max 5MB) *Opsional</p>
          </div>

          <div>
            <button
              type="submit"
              className="mt-4 px-6 py-2 text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
