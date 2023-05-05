import React from "react";
import watchImg from "./assets/watch.png";
import { motion } from "framer-motion";
import "./css/Banner.css";

const Banner = () => {
  return (
    <div className="Banner flex justify-center items-center">
      <motion.img
        src={watchImg}
        className="w-96 h-96"
        initial={{ opacity: 0, y: -500 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 1.2 }}
      />
    </div>
  );
};

export default Banner;
