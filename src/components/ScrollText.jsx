import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollText = ({ children, duration = 0.5 }) => {
  const controls = useAnimation();
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling Down
        controls.start({ y: "-100%", opacity: 0 });
      } else {
        // Scrolling Up
        controls.start({ y: "0%", opacity: 1 });
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, controls]);

  return (
    <motion.div
      initial={{ y: "0%", opacity: 1 }}
      animate={controls}
      transition={{ duration }}
      // style={{
      //   position: "fixed",
      //   top: "50%",
      //   left: "50%",
      //   transform: "translate(-50%, -50%)",
      //   background: "lightblue",
      //   padding: "20px",
      //   borderRadius: "8px",
      // }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollText;
