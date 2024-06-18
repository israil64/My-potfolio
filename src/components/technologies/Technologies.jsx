import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { SiCodesignal, SiDjango } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { SiFlask } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Technologies = () => {
  const Selection = styled.div`
    background: linear-gradient(to right, #00003f, #00002f, #00003f);
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
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="border rounded p-4 shadow-lg shadow-cyan-500/50"
          >
            <div>
              <FaReact />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Front-End</h2>
            <p className="text-gray-400 flex justify-around items-center">
              <span className="text-3xl text-orange-700 hover:scale-125 transition-transform duration-300">
                <TiHtml5 />
              </span>
              <span className="text-3xl text-sky-500  hover:scale-125 transition-transform duration-300">
                <FaCss3 />
              </span>
              <span className="text-3xl text-sky-600 hover:scale-125 transition-transform duration-300">
                <RiTailwindCssFill />
              </span>
              <span className="text-3xl text-yellow-300 hover:scale-125 transition-transform duration-300">
                <IoLogoJavascript />
              </span>
              <span className="text-3xl text-blue-500 hover:scale-125 transition-transform duration-300">
                <FaReact />
              </span>

              <span className="text-3xl  hover:scale-125 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--logos"
                  width="31.88"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 257"
                >
                  <defs>
                    <linearGradient
                      id="IconifyId1813088fe1fbc01fb466"
                      x1="-.828%"
                      x2="57.636%"
                      y1="7.652%"
                      y2="78.411%"
                    >
                      <stop offset="0%" stop-color="#41D1FF"></stop>
                      <stop offset="100%" stop-color="#BD34FE"></stop>
                    </linearGradient>
                    <linearGradient
                      id="IconifyId1813088fe1fbc01fb467"
                      x1="43.376%"
                      x2="50.316%"
                      y1="2.242%"
                      y2="89.03%"
                    >
                      <stop offset="0%" stop-color="#FFEA83"></stop>
                      <stop offset="8.333%" stop-color="#FFDD35"></stop>
                      <stop offset="100%" stop-color="#FFA800"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#IconifyId1813088fe1fbc01fb466)"
                    d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
                  ></path>
                  <path
                    fill="url(#IconifyId1813088fe1fbc01fb467)"
                    d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
                  ></path>
                </svg>
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="border rounded p-4 shadow-lg shadow-cyan-500/50"
          >
            <div>
              <BsDatabase />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Back-End</h2>
            <p className="text-gray-400 flex justify-around items-center">
              <span className="text-3xl text-blue-900 hover:scale-125 transition-transform duration-300">
                <FaPython />
              </span>
              <span className="text-3xl text-green-800  hover:scale-125 transition-transform duration-300">
                <TbBrandDjango />
              </span>
              <span className="text-3xl  hover:scale-125 transition-transform duration-300">
                <SiFlask />
              </span>
              <span className="text-3xl text-red-300 hover:scale-125 transition-transform duration-300">
                <SiMysql />
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="border rounded p-4 shadow-lg shadow-cyan-500/50"
          >
            <div>
              <SiCodesignal />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">UI/UX</h2>
            <p className="text-gray-400 flex justify-start items-center space-x-3">
              <span className="text-3xl text-blue-900 hover:scale-125 transition-transform duration-300">
                <FaFigma />
              </span>
              <span className="text-3xl text-green-800  hover:scale-125 transition-transform duration-300">
                <SiCanva />
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </Selection>
  );
};

export default Technologies;
