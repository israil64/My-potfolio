import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  ${"" /* background: linear-gradient(to right, #00003f, #00002f, #00003f); */}
`;

const About = () => {
  return (
    <AboutSection
      id="about"
      className="bg-white dark:bg-custom-gradient  text-black "
    >
      <div className="border-r rounded-lg shadow-md mx-auto p-5 max-w-4xl">
        <div className="relative ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-sky-400 to-black/30 w-full transform -skew-y-12"></div>
          </div>
          <div className="relative z-10 mb-12">
            <p className="text-2xl sm:text-3xl font-bold text-center text-blue-950 ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 ">
                About Me
              </span>
            </p>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0, y: 5 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ root: scrollY, once: true }}
          className="text-lg text-black/80 mb-8 dark:text-white"
        >
          Hi, I’m Israil. I've completed with a B.A degree, but my love for tech
          led me to web development. As a Full-Stack Developer, I’m skilled in
          HTML, CSS, JavaScript, and specialize in React.js for frontend. I use
          Python and Django for backend. I’m excited to apply my skills and
          passion in future projects.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center capitalize font-bold">
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ root: scrollY, once: true }}
            className="border rounded p-4 shadow-lg shadow-cyan-500/50"
          >
            <p className="text-black dark:text-white ">2022</p>
            <p className="text-black dark:text-white ">
              Started my journey with web
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ root: scrollY, once: true }}
            className="border rounded p-4 shadow-lg shadow-cyan-500/50"
          >
            <p className="text-black dark:text-white">2023</p>
            <p className="text-black dark:text-white ">
              learning start Front-End
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ root: scrollY, once: true }}
            className="border rounded p-4 shadow-lg shadow-cyan-500/50"
          >
            <p className="text-black dark:text-white">2023</p>
            <p className="text-black dark:text-white ">
              Shared my projects on Github
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ root: scrollY, once: true }}
            className="border rounded p-4 shadow-lg shadow-cyan-500/50"
          >
            <p className="text-black dark:text-white">2024</p>
            <p className="text-black dark:text-white">
              worked as Freelances developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ root: scrollY, once: true }}
            className="border rounded p-4 shadow-lg shadow-cyan-500/50"
          >
            <p className="text-black dark:text-white">2024</p>
            <p className="text-black dark:text-white">
              learning start back-end
            </p>
          </motion.div>
        </div>
        {/* end */}
        <div>
          <h2 className="text-3xl font-bold mt-8  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            My Learning Journey
          </h2>
          <div class="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md m-auto"></div>
          <p className="text-lg text-black dark:text-white p-8">
            I am a self-taught learner passionate about web development. Here is
            a snapshot of my learning journey so far:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 5 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ root: scrollY, once: true }}
              className="border rounded p-4 shadow-lg shadow-cyan-500/50"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                Learning HTML & CSS
              </h2>
              <p className="text-black dark:text-white">
                I started with the basics of HTML and CSS to build static web
                pages.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, y: 5 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ root: scrollY, once: true }}
              className="border rounded p-4 shadow-lg shadow-cyan-500/50"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                JavaScript
              </h2>
              <p className="text-black dark:text-white">
                I then moved on to learning JavaScript to add interactivity to
                my web pages.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 5 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ root: scrollY, once: true }}
              className="border rounded p-4 shadow-lg shadow-cyan-500/50"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                React.js
              </h2>
              <p className="text-black dark:text-white ">
                Currently, I am focusing on mastering React.js to build dynamic
                and responsive web applications.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 5 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ root: scrollY, once: true }}
              className="border rounded p-4 shadow-lg shadow-cyan-500/50"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                Future Goals
              </h2>
              <p className="text-black dark:text-white">
                My goal is to become a full-stack developer and work on
                real-world projects to hone my skills.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
