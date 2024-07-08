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
    backgroun-size: cover;
    background-position: center;
    with: 100vw;
  `;

  return (
    <Selection
      className="text-black bg-white dark:bg-custom-gradient"
      id="Technologies"
    >
      <div className=" rounded-lg shadow-md mx-auto p-5 max-w-4xl">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-black dark:text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="border rounded p-4 shadow-lg shadow-cyan-500/50 dark:bg-custom-gradient bg-white"
          >
            <div>
              <FaReact />
            </div>
            <h2 className="text-xl font-semibold text-black/50 mb-2 dark:text-white">
              Front-End
            </h2>
            <p className="text-gray-400 flex justify-around items-center">
              <span className="text-3xl text-orange-700 hover:scale-125 transition-transform duration-300">
                <TiHtml5 />
              </span>
              <span className="text-3xl text-sky-500  hover:scale-125 transition-transform duration-300">
                <FaCss3 />
              </span>
              <span className="text-3xl text-sky-700 hover:scale-125 transition-transform duration-300">
                <RiTailwindCssFill />
              </span>
              <span className="text-3xl text-yellow-500 hover:scale-125 transition-transform duration-300">
                <IoLogoJavascript />
              </span>
              <span className="text-3xl text-blue-800 hover:scale-125 transition-transform duration-300">
                <FaReact />
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="border rounded p-4 shadow-lg shadow-cyan-500/50 dark:bg-custom-gradient bg-white"
          >
            <div>
              <BsDatabase />
            </div>
            <h2 className="text-xl font-semibold text-black/50 mb-2 dark:text-white">
              Back-End
            </h2>
            <p className="text-gray-400 flex justify-around items-center">
              <span className="text-3xl text-blue-900 hover:scale-125 transition-transform duration-300">
                <FaPython />
              </span>
              <span className="text-3xl text-green-800  hover:scale-125 transition-transform duration-300">
                <TbBrandDjango />
              </span>
              <span className="text-3xl  text-gray-500 hover:scale-125 transition-transform duration-300">
                <SiFlask />
              </span>
              <span className="text-3xl text-red-500 hover:scale-125 transition-transform duration-300">
                <SiMysql />
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="border rounded p-4 shadow-lg shadow-cyan-500/50 dark:bg-custom-gradient bg-white"
          >
            <div>
              <SiCodesignal />
            </div>
            <h2 className="text-xl font-semibold text-black/50 mb-2 dark:text-white">
              UI/UX
            </h2>
            <p className="text-gray-400 flex justify-start items-center space-x-3">
              <span className="text-3xl text-blue-900 hover:scale-125 transition-transform duration-300">
                <FaFigma />
              </span>
              <span className="text-3xl text-green-900  hover:scale-125 transition-transform duration-300">
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
