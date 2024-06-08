// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background: linear-gradient(to right, #00003f, #00002f, #00003f);
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <FooterSection>
     <footer className="py-6 text-center text-white">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
    </FooterSection>
  );
};

export default Footer;

