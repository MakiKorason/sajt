import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 2, ease: "easeInOut" }} 

      viewport={{ once: true, amount: 0.2  }} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
