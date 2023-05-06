import "./css/App.css";
import { useState } from "react";
import Slider from "./Slider";
import Banner from "./Banner";
import Category from "./Category";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalOpenFn = () => {
    setModalOpen(true);
  };

  const modalCloseFn = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <Banner />
      <Category />
      <Slider
        className="slider"
        header={"Top Picks"}
        modalOpen={modalOpen}
        modalOpenFn={modalOpenFn}
        modalCloseFn={modalCloseFn}
      />
      <Slider
        header={"For You"}
        modalOpen={modalOpen}
        modalOpenFn={modalOpenFn}
        modalCloseFn={modalCloseFn}
      />
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={modalCloseFn} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
