import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Cards = ({ title, description, link, img_url, code, language }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <motion.div ref={ref}>
      <div
        className={` max-w-[300px] bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-blue-950 shadow-lg hover:shadow-cyan-500/50`}
        style={{
          transform: inView ? "none" : "translateX(100px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="object-cover p-2 rounded-md">
          <img src={img_url} alt="" />
        </div>
        <div class="p-5 mb-3">
          <h5 class="border-l-2 border-l-green-400 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-start ">
            {description}
          </p>
          <div class="mt-4 flex justify-around items-center">
            <span class="mb-2 mr-2 inline-block rounded bg-gray-800 px-3 py-1 text-[12px] font-semibold text-white shadow-md">
              {language[0]}
            </span>
            <span class="mb-2 mr-2 inline-block rounded bg-gray-800 px-3 py-1 text-[12px] font-semibold text-white">
              {language[1]}
            </span>
            {/* <span class="mb-2 mr-2 inline-block rounded bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {language[2]}
            </span> */}
          </div>
          <div className="flex justify-around items-center mt-2">
            <a
              href={link}
              class="inline-flex items-center font-bold px-3 py-2 text-sm  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              target="_blank"
            >
              Visit
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href={code}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              target="_blank"
            >
              Code
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
