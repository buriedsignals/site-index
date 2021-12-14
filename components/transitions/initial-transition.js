import styles from "./initial-transition.module.css";
import { motion } from "framer-motion";

const blackBox = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  return (
    <div className={styles.square}>
      <motion.div
        className={styles.square_mask}
        initial="initial"
        animate="animate"
        variants={blackBox}
      />
    </div>
  );
};

export default InitialTransition;
