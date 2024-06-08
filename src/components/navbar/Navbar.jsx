import React, { useState, useEffect } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Nav,
  NavLink,
  NavLinksContainer,
  SocialIcon,
  HamburgerIcon,
  NavLinks,
} from "./styleComponents";

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
    <Nav className="bg-black/5">
      <h1 onClick={() => scroll.scrollToTop()} className="cursor-pointer">
        Portfolio
      </h1>
      <HamburgerIcon onClick={toggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
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
      <SocialIcon className="group/item">
        <a
          className="flex items-center space-x-1 group hover:translate-x-0.5"
          href="https://github.com/israil64"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="flex items-center space-x-1 group ml-4 hover:translate-x-0.5"
          href="https://linkedin.com/in/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </SocialIcon>
    </Nav>
  );
};

export default Navbar;
