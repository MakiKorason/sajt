import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const TypingEffect = ({ text, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <span style={{ fontSize: "24px", fontFamily: "monospace", fontWeight: "bold" }}>
        <Typewriter words={[text]} loop={false} typeSpeed={50} cursor />
      </span>
    </motion.div>
  );
};

export default TypingEffect;
