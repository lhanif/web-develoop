"use client";
import Navbar from "../components/navbar";
import Card from "../components/card";
import Carousel from "../components/carousel-services"
import Footer from "../components/footer";

export default function Page() {
  // Contoh data untuk kartu
  const cardsData = [
    {
      imageSrc: "loop.svg",
      title: "Card Title 1",
      description: "Description for card 1.",
      linkHref: "#"
    },
    {
      imageSrc: "https://via.placeholder.com/640x360.png?text=Default+Image",
      title: "Card Title 2",
      description: "Description for card 2.",
      linkHref: "#"
    },
    {
      imageSrc: "https://via.placeholder.com/640x360.png?text=Default+Image",
      title: "Card Title 3",
      description: "Description for card 3.",
      linkHref: "#"
    },
    {
      imageSrc: "https://via.placeholder.com/640x360.png?text=Default+Image",
      title: "Card Title 4",
      description: "Description for card 4.",
      linkHref: "#"
    },
    {
      imageSrc: "https://via.placeholder.com/640x360.png?text=Default+Image",
      title: "Card Title 5",
      description: "Description for card 5.",
      linkHref: "#"
    },
    {
      imageSrc: "https://via.placeholder.com/640x360.png?text=Default+Image",
      title: "Card Title 6",
      description: "Description for card 6.",
      linkHref: "#"
    },
  ];

  return (
    <div>

      <Navbar/>
      <header
        className="relative bg-cover bg-center text-white py-16"
        style={{
          backgroundImage: "url('bg-head.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
        {/* Overlay gelap */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            OUR PORTFOLIO
          </h1>
        </div>
      </header>

      <div className="container mx-auto p-4 mt-10 mb-10">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {cardsData.map((card) => (
              <Card
                key={card.id}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                linkHref={card.linkHref}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  );
}
