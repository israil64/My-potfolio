// src/components/Contact.js
import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <p>
        If you would like to get in touch, please email me at{" "}
        <a href="mailto:example@example.com">example@example.com</a>.
      </p>
    </ContactSection>
  );
};

export default Contact;
