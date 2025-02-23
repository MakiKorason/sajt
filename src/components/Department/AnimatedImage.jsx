import { motion } from "framer-motion";

const AnimatedImage = ({ src, alt, className }) => {
  return (
    <motion.img
    className={`container-image ${className}`} 
    src={src} 
    alt={alt}
    initial={{ opacity: 0, y: 50, filter: "blur(1px)" }} 
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
    transition={{ duration: 2 }}
    viewport={{ once: false, amount: 0.5 }} 
  />

  );
};

export default AnimatedImage;