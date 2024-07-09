import styled from "styled-components";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
  ${"" /* background: linear-gradient(to right, #00003f, #00002f, #00003f); */}
  font-size: bold;
  letter-spacing: 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  height: 5rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 85px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
    ${"" /* justify-content: center; */}
    transition: 0.3s all ease;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    cursor: pointer;

    svg {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    right: 6rem;
    -top: -5%;
  }
`;

const NavLink = styled(ScrollLink)`
  margin: 0 1rem;
  text-decoration: none;
  cursor: pointer;
  padding: 2px 3px;
  &.active {
    border-bottom: 3px solid red;
  }

  &:hover {
    color: gray;
    background-color: #d3d3d3;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    margin: 2rem 0;
    font-size: 1.5rem;
  }
`;

const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export { Nav, NavLink, NavLinksContainer, SocialIcon, HamburgerIcon, NavLinks };
