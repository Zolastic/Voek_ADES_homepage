import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 1,
      title: "test1",
      subtitle: "subtest1",
    },
    {
      id: 2,
      title: "test2",
      subtitle: "subtest2",
    },
  ];

  return (
    <>
      {items.map((item) => (
        <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
          <motion.h5 className="2xl">{item.subtitle}</motion.h5>
          <motion.h2 className="2xl">{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>test</motion.h5>
            <motion.h2>test</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Test;
