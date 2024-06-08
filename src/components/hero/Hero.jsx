import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import forCodingGif from "../../assets/img/forCoding.gif";
import "../../App.css";
import { CiSaveDown1 } from "react-icons/ci";
const Hero = () => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <>
      <section class="dark:bg-gray-900 max-sm:mb-64" id="heroSection">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:grid-cols-12 gap-4 lg:py-16">
          <div class="lg:col-span-7 md:text-center lg:text-center">
            <h1 class="max-w-xl  mt-16 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Hi! Welcome to My Portfolio
            </h1>
            <p className="max-w-xl mt-5 md:text-3xl lg:text-4xl text-gray-400  text-2xl">
              I am {""}
              <span style={{ color: "red" }}>
                <ReactTyped
                  strings={[
                    "UX/UI Designer",
                    "Frontend Developer",
                    "Full Stack Developer",
                  ]}
                  typeSpeed={60}
                  backSpeed={80}
                  loop
                />
              </span>
            </p>
            <div className="flex flex-wrap max-sm:justify-start  ml-28 mt-20">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Resume <span className="inline-flex justify-center items-center p-0.5 me-1 ml-2" ><CiSaveDown1/></span>
                </span>
              </button>
            </div>
          </div>
          <div class="lg:col-span-5 flex justify-center mt-10">
            <img
              id="forCoding"
              className="w-full md:max-w-lg border-b-8"
              src={forCodingGif}
              alt="mockup"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
