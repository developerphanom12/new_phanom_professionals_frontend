import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import c from "../../../Assets/logo/Property 1=Frame 1618873523.png";
import d from "../../../Assets/logo/Property 1=Frame 1618873525.png";
import e from "../../../Assets/logo/Property 1=Frame 1618873530.png";
import f from "../../../Assets/logo/Property 1=Frame 1618873533.png";
import g from "../../../Assets/logo/Property 1=Frame 1618873537.png";
import h from "../../../Assets/logo/Property 1=Frame 1618873530.png";
import i from "../../../Assets/logo/Property 1=Frame 1618873530.png";

const images = [c, d, e, f, g, h, i];

const DiscoveryPlanning = () => {
  const { ref } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Slightly increase duration for a smoother effect
    return () => clearInterval(interval);
  }, []);

  return (
    <Container ref={ref}>
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Slideshow"
          initial={{ scale: 1 }}  
          animate={{ scale: [1, 2, 0.4, 1] }} // Smooth zoom in and out
          exit={{ scale: [1, 2, 0.4, 1] }} // Mirroring effect for smoothness
          transition={{ duration: 4, ease: "easeInOut", times: [ 0.3, 0.7, 1] }} 
        />
      </AnimatePresence>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    position: absolute;
  }

  @media (max-width: 768px) {
    height: 50vh;

    img {
      width: 90%;
    }
  }
`;

export default DiscoveryPlanning;
