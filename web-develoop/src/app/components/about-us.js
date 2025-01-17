import React from "react";

const AboutUs = () => {
  return (
    <div
      className="relative flex items-center justify-left min-h-screen bg-cover bg-right text-center"
      style={{
        backgroundImage: "url('hero_bgwhite.png')", // Ganti dengan path gambar Anda
      }}
    >
      {/* Konten */}
      <div className="max-w-4xl p-8 -mt-40 ml-10">
        <h1 className="text-4xl xl:text-[80px] text-develoop mb-10 font-gothambold text-left">
          About <span className="text-develoop">Us!</span>
        </h1>
        <p className="text-black text-md xl:text-xl leading-relaxed text-justify mb-20">
          At <span className="font-semibold">Develoop</span>, we specialize in
          delivering customer-focused IT and IoT solutions that bring ideas to
          life. We are committed to supporting students, organizations, and
          small businesses by providing accessible, reliable, and impactful
          technology tailored to their unique needs.
        </p>
        <h1 className="text-4xl lg:text-[40px] font-bold capitalize mb-8 text-develoop ">
          Our Vision and Mission
        </h1>

        <h2 className="text-lg lg:text-2xl italic leading-relaxed max-w-4xl mx-auto text-black">
          “To become the go-to name for IoT innovation, where individuals,
          students, and businesses instinctively turn when they want to develop,
          connect, and implement smart solutions.”
        </h2>
      </div>
    </div>
  );
};

export default AboutUs;
