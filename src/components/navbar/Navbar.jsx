import React, { useState, useEffect } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
import { FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFilterRight } from "react-icons/bs";

import {
  Nav,
  NavLink,
  NavLinksContainer,
  SocialIcon,
  HamburgerIcon,
  NavLinks,
} from "./styleComponents";
import Theme from "../Theme/Theme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to the "heroSection" on page load
  useEffect(() => {
    scroller.scrollTo("heroSection", {
      smooth: true,
      duration: 500,
      offset: -5,
    });
  }, []);
  return (
    <Nav className="dark:bg-custom-gradient  dark:text-white bg-white text-black font-semibold shadow-md">
      <h1
        onClick={() => scroll.scrollToTop()}
        className="cursor-pointer text-lg font-bold"
      >
        Israil.Dev
      </h1>
      <HamburgerIcon onClick={toggle}>
        {isOpen ? <FaTimes /> : <BsFilterRight />}
      </HamburgerIcon>
      <NavLinksContainer isOpen={isOpen}>
        <NavLinks>
          <NavLink
            to="ProjectContainer"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={toggle}
          >
            Projects
          </NavLink>
          <NavLink
            to="Technologies"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            activeClass="active"
            onClick={toggle}
          >
            Technologies
          </NavLink>
          <NavLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
            activeClass="active"
            onClick={toggle}
          >
            About
          </NavLink>
        </NavLinks>
      </NavLinksContainer>
      <SocialIcon className="group/item dark:text-black">
        <a
          className="flex items-center space-x-1 group hover:translate-x-0.5 text-black dark:text-white"
          href="https://github.com/israil64"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          <FaGithub />
        </a>
        <a
          className="flex items-center space-x-1 group ml-4 hover:translate-x-0.5 text-blue-900 dark:text-white"
          href="https://linkedin.com/in/md-israil-57b356282"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin"
        >
          <FaLinkedin />
        </a>
        <div className="ml-3" title="Dark mode">
          <Theme />
        </div>
      </SocialIcon>
    </Nav>
  );
};

export default Navbar;
