"use client";
import { useState } from "react";
import Card from "../components/card";

export default function Carousel() {
  const cards = [
    {
      imageSrc: "https://via.placeholder.com/150",
      title: "IoT Development",
      description: "This is a dynamically passed description for the card.",
      linkHref: "https://example.com",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      title: "AI Solutions",
      description: "Explore AI solutions that help businesses grow.",
      linkHref: "https://example.com",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      title: "Web Development",
      description: "Build responsive and robust web applications.",
      linkHref: "https://example.com",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      title: "Mobile Apps",
      description: "Design and develop native mobile applications.",
      linkHref: "https://example.com",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      title: "Mobile Apps",
      description: "Design and develop native mobile applications.",
      linkHref: "https://example.com",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      title: "Mobile Apps",
      description: "Design and develop native mobile applications.",
      linkHref: "https://example.com",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1); // Geser ke kanan
    }
  };

  // Fungsi untuk geser ke kiri
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Geser ke kiri
    }
  };

  return (
    <div className="relative w-full">
      {/* Carousel container */}
      <div className="relative overflow-hidden">
        {/* Carousel items */}
        <div className="flex transition-transform duration-500 ease-in-out">
          {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
            <div className="w-1/3 px-2" key={index}>
              <Card
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                linkHref={card.linkHref}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next buttons */}
      <button
        className="absolute top-1/2 left-0 z-10 text-white bg-black/50 p-2 rounded-full"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-0 z-10 text-white bg-black/50 p-2 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
}
