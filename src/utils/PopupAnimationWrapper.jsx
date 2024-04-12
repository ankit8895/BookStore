import React from 'react';
import { motion } from 'framer-motion';

const PopupAnimationWrapper = ({ children, delay, className }) => {
  return (
    <motion.div
      className={`${className ? className : ''}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: delay || 0,
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PopupAnimationWrapper;
