import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io5";

const WhatsApp = ({ phoneNumber }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div ref={ref}>
      <button
        onClick={handleWhatsAppClick}
        title="connected to whatsapp"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          fontSize: "28px",
        }}
      >
        <IoLogoWhatsapp />
      </button>
    </div>
  );
};

export default WhatsApp;
