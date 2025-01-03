"use client";
import Navbar from "../components/navbar";
import Cards from "../components/Cards"; // Mengimpor komponen Cards
import Carousel from "../components/carousel-services";
import Footer from "../components/footer";

export default function Portfolio() {
  // Contoh data untuk kartu
  const cardsData = [
    {
      id: 1,
      imageSrc: "loop.svg",
      title: "Card Title 1",
      description: "Description for card 1.",
      linkHref: "#",
      timestamp: "January 1, 2023", // Tambahkan timestamp
      location: "Location 1" // Tambahkan location
    },
    {
      id: 2,
      imageSrc: "https://via.placeholder.com/640x360.png?text=Default+Image",
      title: "Card Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkHref: "#",
      timestamp: "February 1, 2023", // Tambahkan timestamp
      location: "Location 2" // Tambahkan location
    },
    {
      id: 3,
      imageSrc: "https://via.placeholder.com/640x360.png?text=Default+Image",
      title: "Card Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkHref: "#",
      timestamp: "March 1, 2023", // Tambahkan timestamp
      location: "Location 3" // Tambahkan location
    },
    {
      id: 4,
      imageSrc: "https://via.placeholder.com/640x360.png?text=Default+Image",
      title: "Card Title 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkHref: "#",
      timestamp: "April 1, 2023", // Tambahkan timestamp
      location: "Location 4" // Tambahkan location
    },
    {
      id: 5,
      imageSrc: "https://via.placeholder.com/640x360.png?text=Default+Image",
      title: "Card Title 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkHref: "#",
      timestamp: "May 1, 2023", // Tambahkan timestamp
      location: "Location 5" // Tambahkan location
    },
    {
      id: 6,
      imageSrc: "https://via.placeholder.com/640x360.png?text=Default+Image",
      title: "Card Title 6",
      description: "Description for card 6.",
      linkHref: "#",
      timestamp: "June 1, 2023", // Tambahkan timestamp
      location: "Location 6" // Tambahkan location
    },
  ];

  return (
    <div>
      <Navbar />
      <header
        className="relative bg-cover bg-center text-white py-16"
        style={{
          backgroundImage: "url('bg-head.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
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
              <Cards
                key={card.id}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                linkHref={card.linkHref}
                timestamp={card.timestamp} // Kirimkan timestamp
                location={card.location} // Kirimkan location
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
