// about.js
import React from "react";
import CardMember from "../components/card-member";
import members from "../data/data-member";
import Footer from "../components/footer";
import AboutUs from "../components/about-us";
import Navbar from "../components/navbar";

const About = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50">
        <Navbar />
      </nav>
      <section>
        {/* <header className="relative bg-cover bg-center text-white py-16" style={{ backgroundImage: "url('bg-head.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">About Us</h1>
          </div>
        </header> */}
        <AboutUs />
        
      </section>

      {/* <section className="bg-develoop py-16 h-screen items-center justify-center "> */}

        {/* <div className="container mx-auto grid justify-center gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold">Product</h3>
            <div className="space-y-1 leading-tight">
              <p>Similique quas ea veniam</p>
              <p>Tempore quasi porro</p>
              <p>Blanditiis aut mollitia ex</p>
            </div>
          </div>
        </div> */}
      {/* </section> */}

      {/* <section id="team-members" className="bg-white dark:bg-gray-900">
            <div className="h-[30rem] bg-gray-100 dark:bg-gray-800">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Team Members</h1>
                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                    </div>
                    <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                    </p>
                </div>
            </div>

            <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {members.map((member, index) => (
                        <CardMember
                            key={index}
                            image={member.image}
                            name={member.name}
                            title={member.title}
                            socialLinks={member.socialLinks}
                        />
                    ))}
                </div>
            </div>
        </section> */}

      <Footer />
    </div>
  );
};

export default About;
