export const homepage = {
  title: {
    initial: { opacity: 0, translateY: 30 },
    animate: {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 0.1,
        ease: "easeOut",
        duration: 0.5,
      },
    },
    exit: { opacity: 0, translateY: -20 },
  },
  socials: {
    initial: { opacity: 0, translateY: 30 },
    animate: {
      opacity: 1,
      translateY: 0,

      transition: {
        duration: 0.5,
        delay: 0.15,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, translateY: -20 },
  },
};
