import { motion } from "framer-motion";

const TypingText = ({ text, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <p>{text}</p>
    </motion.div>
  );
};

export default TypingText;
