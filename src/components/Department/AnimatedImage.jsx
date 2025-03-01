import { motion } from "framer-motion";

const AnimatedImage = ({ src, alt, className }) => {
  return (
    <motion.img
    className={`container-image ${className}`} 
    src={src} 
    alt={alt}
    initial={{ opacity: 0, y: 40 }} 
    whileInView={{ opacity: 1, y: 0}} 
    transition={{ duration: 2 }}
    viewport={{ once: true, amount: 0.3 }} 
  />

  );
};

export default AnimatedImage;