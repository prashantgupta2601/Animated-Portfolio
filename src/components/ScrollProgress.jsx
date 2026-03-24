import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neonBlue to-neonPurple origin-left z-50 rounded-r-full shadow-[0_0_10px_#3b82f6]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
