import React from 'react';
import { motion } from 'framer-motion';

const PopupAnimationWrapper = ({ children, delay, className, damping }) => {
  let transition = {
    duration: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
    scale: {
      delay: delay || 0,
      type: 'spring',
      stiffness: 100,
      restDelta: 0.001,
    },
  };

  if (damping !== undefined) {
    transition.scale.damping = damping;
  }

  return (
    <motion.div
      className={`${className ? className : ''}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default PopupAnimationWrapper;
