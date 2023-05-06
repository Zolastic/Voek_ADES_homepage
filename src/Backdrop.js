import React from "react";
import { motion } from "framer-motion";
import "./css/Backdrop.css";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop flex justify-center items-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
