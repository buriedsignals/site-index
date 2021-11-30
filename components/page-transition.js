import { motion } from "framer-motion";

const WithPageTransition = (Page) => {
  return (...args) => {
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.1,
      }}
    >
      {Page(...args)}
    </motion.div>;
  };
};

export default WithPageTransition;
