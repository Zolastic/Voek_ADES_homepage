import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";
import { images, clothes } from "./images";
import "./css/Category.css";

const Category = () => {
  const clothesImg = clothes;
  const shoesImg = images[1];
  const watchcesImg = images[0];
  const techImg = images[5];
  const bagsImg = images[2];

  return (
    <motion.div
      className="category"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", duration: 2 }}
    >
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          <img src={clothesImg} alt="Clothes" />
          <div className="flex flex-col grow gap-y-5">
            <img src={shoesImg} alt="Shoes" className="sixty" />
            <img src={techImg} alt="Tech" className="forty" />
          </div>
          <div className="flex flex-col grow gap-y-5">
            <img src={watchcesImg} alt="Watches" className="forty" />
            <img src={bagsImg} alt="Bags" className="sixty" />
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </motion.div>
  );
};

export default Category;
