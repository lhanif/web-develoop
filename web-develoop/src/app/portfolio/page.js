"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Cards from "../components/Cards"; // Pastikan ini adalah komponen Cards Anda
import Gallery from "../components/detail"; // Impor komponen Gallery
import Footer from "../components/footer";
import Head from "next/head";
import cardsData from "../data/data-portfolio"; // Impor data kartu

export default function Portfolio() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);

  const handleReadMore = (gallery) => {
    setSelectedGallery(gallery);
    setIsGalleryOpen(true);
  };

  const handleExit = () => {
    setIsGalleryOpen(false);
    setSelectedGallery(null);
  };

  const handleOverlayClick = (e) => {
    // Cek apakah klik terjadi di luar galeri
    if (e.target === e.currentTarget) {
      handleExit();
    }
  };

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <header className="relative bg-cover bg-center text-white py-16" style={{ backgroundImage: "url('bg-head.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">OUR PORTFOLIO</h1>
        </div>
      </header>

      <div className="container mx-auto p-4 mt-10 mb-10">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {cardsData.map((card) => (
              <Cards
                key={card.id}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                linkHref={card.linkHref}
                timestamp={card.timestamp}
                location={card.location}
                onReadMore={() => handleReadMore(card)} // Pass the card data
              />
            ))}
          </div>
        </div>
      </div>

      {isGalleryOpen && selectedGallery && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleOverlayClick}>
          <div onClick={(e) => e.stopPropagation()}> {/* Mencegah klik di dalam galeri menutup galeri */}
            <Gallery
              title={selectedGallery.title}
              timestamp={selectedGallery.timestamp}
              location={selectedGallery.location}
              images={selectedGallery.images}
              description={selectedGallery.description}
              onExit={handleExit}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
