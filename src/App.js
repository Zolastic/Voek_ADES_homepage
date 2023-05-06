import "./css/App.css";
import { useState } from "react";
import Slider from "./Slider";
import Banner from "./Banner";
import Category from "./Category";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [productImg, setProductImg] = useState();
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
        setProductImg={setProductImg}
      />
      <Slider
        header={"For You"}
        modalOpen={modalOpen}
        modalOpenFn={modalOpenFn}
        modalCloseFn={modalCloseFn}
        setProductImg={setProductImg}
      />
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={modalCloseFn}
            productImg={productImg}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
