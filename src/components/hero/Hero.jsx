import React from "react";
import { ReactTyped } from "react-typed";
import forCodingGif from "../../assets/img/forCoding.gif";
import "../../App.css";
import { CiSaveDown1 } from "react-icons/ci";

const Hero = () => {
  function downloadResume() {
    let resumePath = "../../assects/img/Personal-Resume.pdf";
    let link = document.createElement("a");
    link.href = resumePath;
    link.download = "Personal-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <section class="max-sm:mb-4 bg-white dark:bg-custom-gradient pb-10">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:grid-cols-12 gap-4 lg:py-16 max-sm:py-3">
          <div className="lg:col-span-7 flex flex-col justify-center items-start order-2 lg:order-1">
            <h1 className="max-w-xl mt-16 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight dark:text-white text-black/50 max-sm:ml-2 max-sm:mt-5">
              <span></span> Welcome to My Portfolio
            </h1>
            <p className="max-w-xl mt-5 md:text-3xl lg:text-4xl font-semibold dark:text-white text-black/60 max-sm:ml-2 text-4xl">
              I am{" "}
              <span
                style={{ color: "red" }}
                className="animate-pulse delay-300 ease-in"
              >
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
            <div className="flex flex-wrap mt-11 max-sm:ml-1" id="resume">
              <button
                onClick={downloadResume}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Resume{" "}
                  <span className="inline-flex justify-center items-center p-0.5 me-1 ml-2">
                    <CiSaveDown1 />
                  </span>
                </span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center items-end mt-5 max-sm:mt-8 order-1 lg:order-2">
            <img
              id="forCoding"
              className="md:max-w-lg rounded-[50%] w-[350px] h-[350px] border-b-8 max-sm:w-[200px] max-sm:h-[200px]"
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
