import React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimationWrapper = ({ children, classname, ...props }) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      className={classname}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
