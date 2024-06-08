import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { SiCodesignal } from "react-icons/si";
const Technologies = () => {
  const Selection = styled.div`
    background: linear-gradient(to right, #00003f, #00002f, #00003f);
    ${"" /* background-image: url("/src/assets/img/heroSectionImge.png"); */}
    backgroun-size: cover;
    background-position: center;
    with: 100vw;
  `;

  return (
    <Selection className="text-white " id="Technologies">
      <div className="border-r rounded-lg shadow-md mx-auto p-5 max-w-4xl">
        <div className="relative ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-sky-400 to-black/30 w-full transform -skew-y-12"></div>
          </div>
          <div className="relative z-10 mb-12">
            <p className="text-2xl sm:text-3xl font-bold text-center text-blue-950 ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 ">
                Technologies
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ">
          <div className="border rounded p-4 shadow-lg shadow-cyan-500/50">
            <div>
              <FaReact />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Front-End</h2>
            <p className="text-gray-400">
              Strong with Html,Css,JavaScript & React.js
            </p>
          </div>
          <div className="border rounded p-4 shadow-lg shadow-cyan-500/50">
            <div>
              <BsDatabase />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Back-End</h2>
            <p className="text-gray-400">
              Strong with Python,Django and Database
            </p>
          </div>
          <div className="border rounded p-4 shadow-lg shadow-cyan-500/50">
            <div>
              <SiCodesignal />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">UI/UX</h2>
            <p className="text-gray-400">Strong with tools like Figma</p>
          </div>
        </div>
      </div>
    </Selection>
  );
};

export default Technologies;
