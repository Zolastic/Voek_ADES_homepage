import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { images } from "./images";
import "./css/Slider.css";

const Slider = ({
  header,
  modalOpenFn,
  modalCloseFn,
  modalOpen,
  setProductImg,
}) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="carousel overflow-hidden"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", duration: 2 }}
    >
      <h1 className="ml-12 font-bold text-3xl mt-3 header">{header}</h1>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel flex cursor-grab"
      >
        {images.map((image) => {
          return (
            <motion.div className="item p-5 px-4 pt-7 cursor-pointer">
              <motion.img
                src={image}
                alt="products"
                draggable={false}
                className="rounded-5xl"
                key={image}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  console.log("testing", modalOpen);
                  modalOpen ? modalCloseFn() : modalOpenFn();
                  setProductImg(image);
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
