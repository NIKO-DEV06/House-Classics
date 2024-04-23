export const menuVars = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleX: 0,
    transition: {
      duration: 0.8,
      ease: [0.12, 0, 0.39, 0],
    },
  },
};

export const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export const imageVars = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1.5,
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const mobileImageVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 1.2,
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 1.2,
      delay: 0.2,
      ease: "easeInOut",
      type: "spring",
      mass: 10,
      stiffness: 250,
      damping: 80,
    },
  },
  exit: {
    y: "30vh",
    transition: {
      duration: 1.5,
    },
  },
};
