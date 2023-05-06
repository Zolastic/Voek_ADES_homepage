import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import "./css/Modal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    type: "spring",
    damping: 25,
    stiffness: 500,
  },
  exit: {
    opacity: 0,
  },
};

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="modal modalBackground"
        variants={dropIn}
      >
        <div className="closeButtonContainer">
          <div className="grow"></div>
          <motion.button onClick={handleClose} className="close-button">
            <FontAwesomeIcon
              icon={faXmark}
              size="2xl"
              style={{ color: "#6a0500" }}
            />
          </motion.button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
